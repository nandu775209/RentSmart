// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";


// function Navbar() {
//     const isLoggedIn = false; // Change this based on authentication state
//     const username = "John Doe"; // Replace with actual user data when implementing authentication
   
//     const user = localStorage.getItem("User");
//     // const handleSubmit = () => {
//     //     if (!user) {
//     //       navigate("/user/login");
//     //     } else {
//     //       navigate("/user/upload/cateogry");
//     //     }
//     //   };

//     return (
//         <nav className="navbar">
//             <div className="navbar-container">
//                 {/* Logo (Left Side) */}
//                 <Link to="/" className="navbar-logo">Rent<span>Smart</span></Link>

//                 {/* Navigation Links (Right Side) */}
//                 <ul className="nav-links">
//                 <li>
//       <Link 
//         to={user ? "/user/upload/cateogry" : "/user/login"} 
//         className="upload-button"
//       >
//         Upload Item
//       </Link>
//                     </li>
              
//                     <li><Link to="/about">About Us</Link></li>
//                     <li className="nav-user">Welcome, {isLoggedIn ? username : "Guest"}</li>
//                     <li>
//                         {isLoggedIn ? (
//                             <Link to="/logout" className="nav-logout">Logout</Link>
//                         ) : (
//                             <Link to="/user/login" className="nav-login">Login</Link>
//                         )}
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;


// new code

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onSearch }) {
    const isLoggedIn = false; 
    const username = "John Doe"; 
    const user = localStorage.getItem("User");
    const [searchInput, setSearchInput] = useState("");

    const handleVoiceSearch = () => {
        const recognition = new window.webkitSpeechRecognition(); // Chrome specific
        recognition.lang = "en-US";
        recognition.start();

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setSearchInput(transcript);
            if (onSearch) onSearch(transcript);
        };
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchInput(value);
        if (onSearch) onSearch(value);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">Rent<span>Smart</span></Link>

                {/* 🧠 Search Bar */}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search items..."
                        value={searchInput}
                        onChange={handleInputChange}
                        className="search-input"
                    />
                    <button onClick={handleVoiceSearch} className="mic-button">🎤</button>
                </div>

                <ul className="nav-links">
                    <li>
                        <Link 
                            to={user ? "/user/upload/cateogry" : "/user/login"} 
                            className="upload-button"
                        >
                            Upload Item
                        </Link>
                    </li>
                    <li><Link to="/about">About Us</Link></li>
                    <li className="nav-user">Welcome, {isLoggedIn ? username : "Guest"}</li>
                    <li>
                        {isLoggedIn ? (
                            <Link to="/logout" className="nav-logout">Logout</Link>
                        ) : (
                            <Link to="/user/login" className="nav-login">Login</Link>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
