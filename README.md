# 🚗 Uber Video Project

![Project Banner](./assets/banner.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)]()
[![React](https://img.shields.io/badge/React-18.2.0-blue)]()
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)]()
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.7.0-orange)]()

---

## 🔥 Project Overview
A full-stack **Uber-like application** demonstrating real-time ride booking, driver management, and location tracking. Users and captains interact via a React frontend and Node.js backend, with **Socket.IO** powering real-time updates.

---

## 🚀 Features
- **User & Captain Management:** Registration, login, and role-specific dashboards.
- **Real-Time Ride Updates:** Instant ride tracking via WebSockets.
- **Interactive Maps:** Location visualization and navigation.
- **Secure Authentication:** JWT-based login with cookies.
- **RESTful APIs:** Robust backend endpoints for users, captains, rides, and maps.
- **Cross-Origin Support:** Proper CORS configuration for frontend-backend communication.

---

## 🛠 Tech Stack
| Frontend | Backend | Database | Real-time |
|----------|---------|---------|-----------|
| React + Vite | Node.js + Express | MongoDB + Mongoose | Socket.IO |

Other tools: Axios, dotenv, bcrypt, cookie-parser, React Router

---

## ⚡ Installation

1. **Clone the repository:**
```bash
git clone https://github.com/TIRUMILLI-SAIPRASANNA/uber-video-main.git
cd uber-video-main

2. Backend setup:

npm install

3. Frontend setup:

cd client
npm install

4. Environment variables:
Create a .env file in the root folder:

PORT=3000
MONGO_URI=your_mongodb_uri
VITE_BASE_URL=http://localhost:3000

5. Run the backend server:

npm run dev

6. Run the frontend:

cd client
npm run dev

Visit http://localhost:5173 to see the app in action.
📸 Screenshots

<img width="1920" height="881" alt="uberappp" src="https://github.com/user-attachments/assets/378583a2-7e40-4416-8760-137777dfcb26" />


🤝 Contributing

    Fork the repository.

    Create a new branch: git checkout -b feature-name.

    Commit your changes: git commit -m "Add feature".

    Push to the branch: git push origin feature-name.

    Open a Pull Request.

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

Made by TIRUMILLI-SAIPRASANNA

