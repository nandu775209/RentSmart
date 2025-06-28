//import css of header from global componenet
import {Link , useNavigate } from "react-router-dom";
import { useState ,useEffect } from "react";
function Header(){

    const navigate =useNavigate();
    const[user ,setUser]= useState("");
    
    useEffect(()=>{
        const loggedUser =localStorage.getItem("User");
        console.log(loggedUser);
        if(loggedUser){
            setUser(loggedUser);
        }
    } ,[]);
    console.log("hello i am here")
    const handelLogout =()=>{
        localStorage.removeItem("Email");
        setUser("");
        navigate("/user/login")
    };

 return(
    <div className="header-container">

        <div className="header-section">
            {/* <img>// yaha par logo</img> */}
            {/* <p>About us</p> */}
            <div className="header-login">
                {/* yaha par link karna hai */}
                {/* <span>Welcome, {user ? user : "Guest"}</span> */}

                {/* <button onClick={handelLogout}>logout</button> */}
                
            </div>

        </div>

    </div>
);

}
export default Header;