const express = require("express");
const router = express.Router();
const upload = require("../Middleware/upload"); // Import upload middleware
const { uploadProduct } = require("../controller/upload");

// Define the upload route
router.post("/upload", upload.array("photos", 12), uploadProduct);

module.exports = router;
