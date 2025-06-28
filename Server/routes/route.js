const express = require("express");
const router=  express.Router();
const Product = require("../Model/model");

router.get("./products", async(req , res )=>{
    try{
        const products =await Product.find();
        res.json(products);

    } catch(err){
        res.status(500).json({message:"error fecting products"});
    }
});

router.get("products/:id" , async(req ,res)=>{
    try{
        const product = await product.findone({product_id:req.params.product_id});
        if(!product){
            return res.status(404).json({message:"product not found"});
        }
         res.json(product);
    } catch(err){
        res.status(500).json({message:"Error fetcching product"});

    }
});

module.exports=router;