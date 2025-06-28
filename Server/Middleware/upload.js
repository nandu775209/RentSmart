const multer = require("multer");
const path = require("path");

// Multer storage configuration
const storage = multer.diskStorage({
    destination: "./uploads", // Folder to store uploaded images
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname); // Unique filename
    },
});

// File filter (optional) - allows only image files
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed!"), false);
    }
};

// Multer upload middleware
const upload = multer({ storage, fileFilter });

module.exports = upload;
