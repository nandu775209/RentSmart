
import React, { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { toast } from "react-toastify";

function Navbar({ onSearch }) {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("User");
    setIsLoggedIn(!!token);
  }, []);

    // const username = "John Doe"; 
    const user = localStorage.getItem("User");
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

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


    const handleSubmit = () => {
        if (!user) {
            toast.error("Please login to upload an item");

            navigate("/user/login");



        } else {
            navigate("/user/upload/cateogry");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("User");
         setIsLoggedIn(false);
        navigate("/user/login");
    };

    const handleLoginRedirect = () => {
        navigate("/user/login");
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
                        {/* <Link 
                            to={user ? "/user/upload/cateogry" : "/user/login"} 
                            className="upload-button"
                        >
                            Upload Item
                        </Link> */}
                        <button onClick={handleSubmit} className="upload-button1">
                            Upload Item
                        </button>
                    </li>
                    <li><Link to="/about">About Us</Link></li>
                    <li className="nav-user">Welcome, {isLoggedIn ? user.slice(1,-1) : "Guest"}</li>
                    {/* <li>
                        {isLoggedIn ? (
                            <Link to="/user/login" className="nav-logout">Logout</Link>
                        ) : (
                            <Link to="/user/login" className="nav-login">Login</Link>
                        )}
                    </li> */}

                    <li>
                        {isLoggedIn ? (
                            <button onClick={handleLogout} className="nav-btn logout-btn">
                                Logout
                            </button>
                        ) : (
                            <button onClick={handleLoginRedirect} className="nav-btn login-btn">
                                Login
                            </button>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
