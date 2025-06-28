// const express = require("express");
// const multer = require("multer");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const Product = require("../Model/model");
// const { v4: uuidv4 } = require("uuid");
// const app  = express();
// app.use(cors());
// app.use(express.json());

// const storage = multer.diskStorage({
//     destination:"./uploads",
//     filename: (req , file,cb)=>{
//         cb(null , Date.now()+"-"+ file.originalname);
//     },
// });

// const upload =multer({storage});

// const product_id=uuidv4();  // this will give product a unique id .

// //Uplaod this details to the database

// app.post("/upload" , upload.array("photos", 12), async(req,res)=>{
//     try{
//         if(!req.files || req.files.length<4){
//             return res.status(400).json({message: " upload the correct number of the photos"})
//         }
        
//         const{ productName , description , price , rentprice ,mobile, address}= res.body;
//         const imageUrls = req.files.map((file)=>`/uploads/${file.filename}`);

//         const newProduct = new Product({
//             product_id,
//             productName,
//             description,
//             price,
//             rentprice,
//             mobile,
//             address,
//             images:imageUrls,
//         });

//         await newProduct.save();
//         res.json({message:"product added sucessfully"})
//     } catch(err){

//         console.error(err);
//         res.status(500).json({ message: "error saving product"});

//     }
// });

// mongoose.connect("mongodb://localhost:27017/UploadItems", {useNewUrlParser: true , useUnifiedTopology: true});


//
// app.listen(5000, () => console.log("Server running on port 5000"));



// new code

// const express = require("express");
const Product = require("../model/itemDetails");
const { v4: uuidv4 } = require("uuid");
// Upload product logic
const uploadProduct = async (req, res) => {
    try {
        if (!req.files || req.files.length < 4) {
            return res.status(400).json({ message: "Upload at least 4 photos" });
        }

        const { productName, description, price, rentPrice, mobile, address } = req.body;
        const imageUrls = req.files.map((file) => `/uploads/${file.filename}`);

        const newProduct = new Product({
            product_id: uuidv4(),
            productName,
            description, // Ensure description is passed here
            price,
            rentPrice,
            mobile,
            address,
            images: imageUrls,
        });

        await newProduct.save();
        res.json({ message: "Product added successfully" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error saving product" });
    }
};

module.exports = { uploadProduct };