const Booking = require("../models/booking");
const Listing = require("../models/listing");

// create booking
module.exports.createBooking = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }

    const { startDate, endDate, guests } = req.body;
    const start = new Date(startDate);
    const end = new Date(endDate);

    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    if (nights <= 0) {
        req.flash("error", "Invalid booking dates");
        return res.redirect(`/listings/${id}`);
    }

    // check for overlapping confirmed bookings
    const conflict = await Booking.findOne({
        listing: listing._id,
        status: "confirmed",
        $or: [
            { startDate: { $lt: end }, endDate: { $gt: start } } // overlap condition
        ]
    });

    if (conflict) {
        req.flash("error", "These dates are not available. Please choose different dates.");
        return res.redirect(`/listings/${id}`);
    }

    const totalPrice = listing.price * nights;

    const booking = new Booking({
        listing: listing._id,
        user: req.user._id,
        startDate,
        endDate,
        guests,
        totalPrice
    });

    await booking.save();

    req.flash("success", "Booking request submitted!");
    res.redirect(`/bookings/${booking._id}`);
}

// show all bookings for current user
module.exports.showBooking = async (req, res) => {
    const today = new Date();
    const bookings = await Booking.find({ 
        user: req.user._id, 
        endDate: { $gte: today } 
    }).populate("listing");
    
    res.render("bookings/index", { bookings });
}

// get blocked dates for a listing
module.exports.getBlockedDates = async (req, res) => {
    const { listingId } = req.params;

    const bookings = await Booking.find({
        listing: listingId,
        status: "confirmed"
    }).select("startDate endDate");

    const blockedDates = bookings.map(b => ({
        start: b.startDate,
        end: b.endDate
    }));

    res.json(blockedDates);
}

// show booking details
module.exports.showBookingDetails = async (req, res) => {
    const booking = await Booking.findById(req.params.bookingId)
        .populate("listing")
        .populate("user");

    if (!booking) {
        req.flash("error", "Booking not found");
        return res.redirect("/listings");
    }

    res.render("bookings/show", { booking });
}

// HOST-SIDE MANAGEMENT

// View bookings for listings owned by host
module.exports.showHostBookings = async (req, res) => {
    // Find listings owned by the current host
    const listings = await Listing.find({ owner: req.user._id }).select("_id");
    const listingIds = listings.map(l => l._id);

    const today = new Date();
    const bookings = await Booking.find({ 
        listing: { $in: listingIds }, 
        endDate: { $gte: today } 
    })
    .populate("listing")
    .populate("user");

    res.render("bookings/host-manage", { bookings });
}

// Confirm booking
module.exports.confirmBooking = async (req, res) => {
    const booking = await Booking.findById(req.params.bookingId).populate("listing");

    if (!booking || !booking.listing.owner.equals(req.user._id)) {
        req.flash("error", "Not authorized to confirm this booking");
        return res.redirect("/bookings/host/manage");
    }

    booking.status = "confirmed";
    await booking.save();

    req.flash("success", "Booking confirmed!");
    res.redirect("/bookings/host/manage");
}

// Cancel booking
module.exports.cancelBooking = async (req, res) => {
    const booking = await Booking.findById(req.params.bookingId).populate("listing");

    if (!booking || !booking.listing.owner.equals(req.user._id)) {
        req.flash("error", "Not authorized to cancel this booking");
        return res.redirect("/bookings/host/manage");
    }

    booking.status = "cancelled";
    await booking.save();

    req.flash("success", "Booking cancelled.");
    res.redirect("/bookings/host/manage");
}