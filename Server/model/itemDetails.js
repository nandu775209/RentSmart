const mongoose = require("mongoose");

const itemDetails = new mongoose.Schema({

    product_id: {
        type: String,
        required: true,
    },
    productName: {
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rentPrice: {
        type: Number,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
    },
    images: {
        type: [String], // Array of image URLs
        required: true,
    },
}, { timestamps: true });

const Product = mongoose.model("Product", itemDetails);
module.exports = Product;
