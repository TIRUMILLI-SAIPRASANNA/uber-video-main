// app.js
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');

const app = express();

// connect database
connectToDb();

// ✅ Allow frontend (React) to connect with backend
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true
}));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// test route
app.get('/', (req, res) => {
  res.send('Hello World - Backend is running ✅');
});

// routes
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);

// export app for server.js
module.exports = app;


