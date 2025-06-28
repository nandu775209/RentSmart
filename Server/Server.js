// const express = require("express");
// const app = express();
// const cors = require("cors");
// require("dotenv").config();

// app.use(cors());
// app.use(express.json());

// const port = process.env.PORT || 5000; // ✅ Fallback if env variable is missing

// const con = require("./db/connection"); // Ensure this properly connects to MongoDB

// // Import user routes
// const userRoutes = require("./routes/user");

// app.use("/api/user", userRoutes); // ✅ Mount router properly

// // Serve static files in production
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "../client/build")));
//     app.get("/", (req, res) => {
//         res.sendFile(path.join(__dirname, "../client/build/index.html"));
//     });
// } else {
//     app.get("/", (req, res) => {
//         res.send("API running :)");
//     });
// }

// // MongoDB Connection
// con.then((db) => {
//     if (!db) {
//         console.error("MongoDB Connection Failed!");
//         return process.exit(1);
//     }

//     // Start server
//     app.listen(port, (err) => {
//         if (err) {
//             console.error("Server Error:", err);
//         } else {
//             console.log(`✅ Server is running on: http://localhost:${port}`);
//         }
//     });

//     app.on("error", (err) => console.log("❌ Failed to Connect with HTTP Server:", err));
// }).catch((error) => {
//     console.error("❌ Connection to MongoDB failed:", error);
// });

// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const authRoutes = require("./routes/user");
// const connectDB = require("./db/connection");

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Connect to database
// connectDB();


// // API Routes
// app.use("/api", authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// 3 new

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/user");
const productRoutes = require("./routes/upload");
const fetchRoutes = require("./routes/fetch");
const connectDB = require("./db/connection");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to database
connectDB();


// API Routes
app.use("/api", authRoutes);
app.use("/api", productRoutes);
app.use("/api", fetchRoutes);
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));