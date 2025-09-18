const express = require("express");
const router = express.Router({ mergeParams: true });
const { isLoggedIn } = require("../middleware");
const bookingController = require("../controllers/booking");
const wrapAsync = require("../utils/wrapAsync");

// create booking
router.post("/", isLoggedIn, wrapAsync(bookingController.createBooking));

// Get all bookings for current user
router.get("/", isLoggedIn, wrapAsync(bookingController.showBooking));

// Get unavailable dates for a listing
router.get("/unavailable/:listingId", wrapAsync(bookingController.getBlockedDates));

// Booking details
router.get("/:bookingId", isLoggedIn, wrapAsync(bookingController.showBookingDetails));


// HOST-SIDE MANAGEMENT


// View bookings for listings owned by host
router.get("/host/manage", isLoggedIn, wrapAsync(bookingController.showHostBookings));

// Confirm booking
router.post("/:bookingId/confirm", isLoggedIn, wrapAsync(bookingController.confirmBooking));

// Cancel booking
router.post("/:bookingId/cancel", isLoggedIn, wrapAsync(bookingController.cancelBooking));

module.exports = router;
