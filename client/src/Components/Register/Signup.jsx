import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  // Correcting useState initialization
  const [Name, setName] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Address, setAddress] = useState("");

//   const handleEmailChange = (e) => {
//     const value = e.target.value;
//     if (value.endsWith("@gmail.com") || value === "") {
//       setEmail(value);
//     }
//   };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents form from refreshing the page

    try {
      const response = await fetch(`http://localhost:8080/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: Name,
          MobileNumber: MobileNumber,
          Email: Email,
          Password: Password,
          Address: Address,
        }),
      });

      const data = await response;

      if (response.status === 200) {
        console.log("Registration successful", data);
        // Show a success message (use toast if available)
        navigate("/"); // Redirect to login page after successful signup
      } else {
        console.error(`Failed with status ${response.status}:`, data);
      }
    } catch (error) {
      console.error("Failed to register:", error);
      console.log("kyu bhai kya problem hai");
      console.error(error.message);
    }
  };

  return (
    <div className="Signup-Container">
      <div className="Signup-section">
        <form onSubmit={handleSubmit}>
          {" "}
          {/* ✅ Use onSubmit here */}
          <div className="signup-heading">Register on RentSmart</div>
          <input
            type="text"
            placeholder="Enter your name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Phone Number"
            value={MobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          
                    <input 
                        type="email"
                        placeholder="Enter your email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                    /> 
          {/* <input
            type="email"
            placeholder="Enter your Gmail"
            value={Email}
            onChange={handleEmailChange}
          
          /> */}
          <input
            type="password"
            placeholder="Enter your password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button type="submit">
            {" "}
            {/* ✅ Corrected type="submit" */}
            Register
          </button>
          <div className="login-on-signup">
            Already have an account?
            <span>
              <Link to="/user/login"> Login </Link>{" "}
              {/* ✅ Added Link to login */}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
