# CozyStay 🏡✨

CozyStay is a **full stack web application** for booking and managing vacation rentals with ease. Users can browse listings, book stays, leave reviews, and hosts can manage their own properties and more!

**🌐 Live Website:** [CozyStay Rentals](https://wonderlust-q5tl.onrender.com/listings)

---

## 🚀 Features

- 🔐 **User Authentication:** Sign up, login, and logout securely
- 🏠 **Property Listings:** List, edit, and delete properties with images, geolocation (Mapbox), and price
- 🔍 **Browse & Search:** Browse all listings or search by location
- 📅 **Booking System:**
   - Book properties with date and guest selection
   - Real-time booking conflict checks (no double-booking)
   - Price calculation based on stay duration
   - User dashboard to view/manage bookings
- 👨‍💼 **Host Dashboard:**
   - View/manage bookings for owned listings
   - Confirm or cancel bookings as a host
- ⭐️ **Reviews & Ratings:** Add and delete reviews for listings
- 📱 **Responsive UI:** EJS templates, Bootstrap 5, and custom CSS
- ☁️ **Cloud Image Storage:** Upload and manage images via Cloudinary
- 🗺️ **Interactive Maps:** Mapbox integration for geolocation
- 💬 **Flash Messages:** User feedback for actions
- 🛡️ **Secure Sessions:** Session management and request handling
- 🗂️ **MVC Architecture:** Modular controllers, models, and routes

---

## 🛠️ Tech Stack

- 💻 **Frontend:** EJS templating, Bootstrap 5, CSS, JavaScript
- 🖥️ **Backend:** Node.js, Express.js
- 🗄️ **Database:** MongoDB Atlas (cloud-hosted)
- 🛡️ **Authentication:** Passport.js (local strategy)
- ☁️ **Cloud Storage:** Cloudinary (for property images)
- 🗺️ **Geolocation/Maps:** Mapbox SDK
- ✅ **Validation:** Joi
- 🧩 **Session Store:** connect-mongo
- 🗂️ **Architecture:** Model-View-Controller (MVC)

---

## 🗂️ Project Structure

```
├── app.js                # Main application entry
├── cloudConfig.js        # Cloud configuration settings
├── middleware.js         # Custom middleware for authentication error handling, etc.
├── schema.js             # Database schema definitions
├── controllers/          # Application controllers
├── models/               # Database models
├── public/               # Static assets (CSS, JS, images)
├── routes/               # Application routes
├── utils/                # Utility functions and helpers
├── views/                # EJS templates/views
├── package.json          # NPM dependencies and scripts
├── package-lock.json     # NPM lock file
├── .gitignore            # Git ignore settings
```

---

## 🏁 Getting Started

1. 🌀 **Clone the repository:**
   ```sh
   git clone https://github.com/Nimishkumar07/CozyStay.git
   cd CozyStay
   ```

2. 📦 **Install dependencies:**
   ```sh
   npm install
   ```

3. 🔑 **Set up environment variables:**
   Create a `.env` file with the following keys:
   ```env
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ATLASDB_URL=your_mongodb_atlas_connection_string
   SESSION_SECRET=your_session_secret
   MAP_TOKEN=your_mapbox_token
   ```

4. ▶️ **Run the app:**
   ```sh
   node app.js
   ```
   The site will be available at `http://localhost:8080/listings` by default.

---

## 🚢 Deployment

- 🚀 Deployed on [Render](https://render.com/)
- 🗄️ Database hosted with MongoDB Atlas


---

## 📝 License

This project is for demonstration and educational purposes.

---

© CozyStay Private Limited 🏡
