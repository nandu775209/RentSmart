const mongoose = require("mongoose");
//const schema = mongoose.Schema;

const user_model = new mongoose.Schema(
    {
        Name:{
            type:String,
            required: true,
        },
        MobileNumber:{
            type:String,
            required: true,
            unique: true,
        },
        Email:{
            type: String,
            trim: true,
            unique: true,
            lowercase: true,
        },

        Password:{
            type : String,
            required: true,
            trim: true,

        },

        Address:{
            type: String,
            trim:true,
        }
    },
);

const User =mongoose.model("User",user_model);
//const product=mongoose.model("product" , ItemDetails_model);

module.exports =
User;   