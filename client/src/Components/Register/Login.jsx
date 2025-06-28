import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LogIn() {
    const navigate = useNavigate();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handelSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `${process.env.REACT_APP_BACKEND_API}/api/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        Email: Email,
                        Password: Password,
                    }),
                }
            );

            const data = await response.json();
            console.log(data);

            if (response.status === 200) {
                // Save user and navigate
                localStorage.setItem("User", JSON.stringify(data.Email));
                navigate("/");
                toast.success("Login successful!");
            } else {
                // Show error toast
                toast.error("Invalid email or password. Please try again or register.");
                console.error(`Failed with status code ${response.status}`);
            }
        } catch (error) {
            console.error("Invalid JSON or network error:", error.message);
            toast.error("Something went wrong. Please try again later.");
        }
    };

    return (
        <div className="login-container">
            <ToastContainer position="top-center" autoClose={3000} />
            <div className="login-section">
                <form onSubmit={handelSubmit}>
                    <div className="User-login-heading">RentSmart Login</div>
                    <input
                        type="email"
                        placeholder="Enter your Email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Enter your Password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Continue</button>

                    <div className="Signup-on-login">
                        Don't Have an Account?
                        <span> <Link to="/user/signup"> Register </Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LogIn;
