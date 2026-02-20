const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes (adjust path if needed)
const authRoutes = require("../routes/authRoutes");
const eventRoutes = require("../routes/eventRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

// Test Route
app.get("/", (req, res) => {
  res.status(200).send("Backend Running...");
});

// ===== MongoDB Connection (Serverless Safe) =====
let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

// ===== Vercel Serverless Handler =====
module.exports = async (req, res) => {
  await connectDB();
  return app(req, res);
};