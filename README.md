

🍽️ Eatzo — Premium Food Delivery Platform
Delivering premium flavors with precision — even for your midnight cravings.

License

React
MongoDB
Status

📖 Overview
Eatzo is a modern full-stack food delivery web application built using the MERN stack (MongoDB, Express, React, Node.js).

It combines a premium glassmorphic UI with secure authentication, real-time cart updates, order management, and email-based workflows, making it production-ready out of the box.

✨ Key Features
🔐 Authentication & Security
JWT-based authentication with secure login/register

Password hashing using bcryptjs

Email OTP verification for account activation

Secure forgot/reset password via email link

Protected routes with authentication checks

🍔 Food & Restaurant System
Browse 10+ restaurants with ratings & details

Category-based menu (Pizza, Burger, Biryani, Chinese, etc.)

Search and filter functionality

🛒 Cart & Order Management
Real-time cart updates

Seamless checkout flow

Order history tracking

Email confirmation for every order



🎨 UI/UX Experience
Premium glassmorphism design

Smooth gradients, blur effects, and animations

Split-screen authentication pages

Responsive design (mobile + desktop)

Icons powered by Lucide React

👤 User Profile
Update personal details

Manage addresses

View complete order history

🛠️ Tech Stack
Layer	Technology
Frontend	React 19, React Router DOM, Axios
Styling	CSS, Glassmorphism, Animations
Backend	Node.js, Express.js
Database	MongoDB (Local / Atlas)
ORM	Mongoose
Auth	JWT, bcryptjs
Email	Nodemailer (Gmail SMTP)
Dev Tools	dotenv, nodemon, morgan


📂 Project Structure
Eatzo/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── .env
│
└── my-app/
    ├── public/
    └── src/
        ├── components/
        ├── context/
        ├── pages/
        └── App.js
🚀 Getting Started
📌 Prerequisites
Node.js (v16+)

npm (v8+)

MongoDB (local or Atlas)

1️⃣ Clone Repository
git clone https://github.com/ashwanisharma-pro/Eatzo.git
cd eatzo



2️⃣ Install Dependencies
# Backend
cd Eatzo
cd Eatzo
cd backend
npm install
npm run dev




# Frontend
cd Eatzo
cd Eatzo
cd ../my-app
npm install
npm start



3️⃣ Environment Setup
Create backend/.env:

PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/eatzo

JWT_SECRET=your_secret_key

EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password




🌐 URLs
Service	URL
Frontend	http://localhost:3000
Backend API	http://localhost:5000
Health Check	http://localhost:5000/api/health


📡 API Overview
🔐 Authentication
POST /api/auth/register

POST /api/auth/login
POST /api/auth/verify-otp
POST /api/auth/forgot-password
POST /api/auth/reset-password/:token

GET /api/auth/me

🍽️ Restaurants & Food
GET /api/restaurants
GET /api/restaurants/:id
GET /api/foods
GET /api/foods?category=Pizza

🛒 Cart & Orders
GET /api/cart
POST /api/cart

DELETE /api/cart/:id

POST /api/orders

GET /api/orders

🔐 Authentication Flow
Register → Receive OTP → Verify Email → Login
        ↓
Forgot Password → Reset Link → Update Password
📧 Email System
Automated emails for:

OTP Verification

Order Confirmation

Password Reset

🩺 Health Check Example
{
  "status": "OK",
  "server": "running",
  "database": "Connected"
}
🌱 Database Seeding
On first run, Eatzo auto-generates:

10 Restaurants

Multiple food items

No manual setup required.

💡 Design Highlights
Dual database support (local + cloud)

OTP-based verification (mobile-friendly)

JWT stored in localStorage

Clean UI error handling (no alerts)

🤝 Contributing
git checkout -b feature/your-feature
git commit -m "Add feature"
git push origin feature/your-feature
Then open a Pull Request 🚀

📄 License
MIT License

👨‍💻 Author
Eatzo Team
Built with ❤️ and late-night hunger.

⭐ If you like this project, don’t forget to star it!







