# CozyStay

CozyStay is a **full stack web application** where users can list their properties for rent or book properties on vacations, and explore destinations worldwide.

## Features

- User authentication (sign up, login, logout)
- List properties for rent with images, location, and price
- Browse and search for vacation rentals by location
- Book properties online and manage bookings
- Reviews and ratings for listings
- Responsive design with a modern UI (Bootstrap 5, custom CSS)
- Cloud-based image storage (Cloudinary)
- Flash messages for user feedback
- Secure sessions and request handling

## Tech Stack

- **Frontend:** EJS templating, Bootstrap 5, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (cloud-hosted)
- **Authentication:** Passport.js (local strategy)
- **Cloud Storage:** Cloudinary (for property images)
- **Architecture:** Model-View-Controller (MVC)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nimishkumar07/CozyStay.git
   cd CozyStay
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**  
   Create a `.env` file with the following keys:
   ```
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   ATLASDB_URL=your_mongodb_atlas_connection_string
   SESSION_SECRET=your_session_secret
   ```

4. **Run the app:**
   ```bash
   node app.js
   ```
   The site will be available at `http://localhost:3000/listings` by default.

## Deployment

- Deployed on [Render](https://render.com/)
- Database hosted with MongoDB Atlas

**Live Website:** [CozyStay Rentals](https://wonderlust-q5tl.onrender.com/listings)

## Screenshots

*(Add your own screenshots of the homepage, listing page, and booking flow here)*

## License

This project is for demonstration and educational purposes.

---

© CozyStay Private Limited
