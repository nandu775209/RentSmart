    const express = require("express");
    const app = express();

    require("dotenv").config();
    const User = require("../model/user");
    // const bcrypt = require("bcrypt");
    // const compare  = require("bcrypt");


    // route - http://localhost:8080/api/user/login

    const logIn =async(req , res)=>{
        const Email= req.body.Email;
        const password=req.body.Password;

        try{
            const user = await User.findOne({ Email });

            if (!user) {
                return res.status(400).send({msg : "user not found "});
            }

            //const validpassword = await compare(password , user.Password);
            if(password==user.Password){
                return res.status(200).send({
                    msg: "log-In sucessful",
                    Email: user.Email,
                     other: "Andar aa gaya"});     
                }
                else{
                    return res.status(406).send({msg: "invalid credentials"});
                }
            } catch(error){
                console.error(error);
                return res.status(500).send({msg:"Server error"});
            }

    };

    const signUp = async (req, res) => {
        const { Name, MobileNumber, Email, Password, Address } = req.body;
    
        try {
            const existingUser = await User.findOne({ Email: Email });
            if (existingUser) {
                return res.status(400).send({ msg: "This Email id already exists" });
            }
            // const salt = await bcrypt.genSalt(10);
            // const hashedPassword = await bcrypt.hash(Password,salt);
    
            const newUser = new User({
                Name: Name,
                MobileNumber: MobileNumber,
                Email: Email,
                Password: Password,
                Address: Address,
            });
    
            await newUser.save();
            res.status(200).send({ msg: "Registration successful" });
        } catch (error) {
            console.error(error);
            res.status(500).send({ msg: "Server error" });
        }
    };
    // route http://localhost:8080/api/user/signup/verify

    // const verifysignup = async(req , res)=>{
    //     const name= req.body.name;
    //     const Number= req.body.Number;
    //     const email=  req.body.email;
    //     const password= req.body.password;
    //     const Address= req.body.Address;

    //     try{
            

    //         //ssaaving the new user

    //         const newUser = new User({
    //         name:name,
    //         Number:Number,
    //         email:email,
    //         password:password,
    //         Address: Address,
    //         });

    //         await newUser.save();
    //         console.log("sign up ho gaya ")
    //     } catch (error){
    //         console.error(error);
    //         return res.status(500).seng({msg:"server error"})
    //     }
    // };

    // yaha par savce karni hai file signup se jo data ayega 


    module.exports = {
        signUp,
        
        logIn,
        
    };
