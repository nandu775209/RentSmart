const express = require("express");
const router = express.Router();
const Product = require("../model/itemDetails"); // Import model

const fetchProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching products" });
    }
};

const fetchItem = async (req, res) => {
    try {
        //const  product_id  = req.params.product_id;
        const product_id = String(req.params.product_id);
        console.log("searched this product Id",product_id);
        const product = await Product.findOne({product_id});
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
} catch (err) {
        console.error(err);
        console.log(req.params);
        res.status(500).json({ message: "Error fetching product" });
    }
}

module.exports = { fetchProducts , fetchItem};