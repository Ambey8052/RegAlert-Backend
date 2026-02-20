// // require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const authRoutes = require("./routes/authRoutes");
// const eventRoutes = require("./routes/eventRoutes");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use("/api/auth", authRoutes);
// app.use("/api/events", eventRoutes);

// // Basic Route
// app.get("/", (req, res) => {
//   res.send("Running...");
// });

// // for serverless deployment, we export the app and connect to DB in a separate function
// let isConnected = false;
// async function connectDB() {
//   try{
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     isConnected = true;
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//   }
//   }
// // Connect to MongoDB and Start Server
// // const connectDB = async () => {
// //   try {
// //     await mongoose.connect(process.env.MONGO_URI);
// //     console.log("MongoDB Connected");

// //     // Start Server only after DB connection
// //     const PORT = process.env.PORT || 5000;
// //     app.listen(PORT, () => {
// //       console.log(`Server running on port ${PORT}`);
// //     });
// //   } catch (error) {
// //     console.error("MongoDB connection failed:", error);
// //     process.exit(1);
// //   }
// // };

// // connectDB(); //startReminderJob();

// module.exports = async (req, res) => {
//   await connectDB();
//   return app(req, res);
// };
