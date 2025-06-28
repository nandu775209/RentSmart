import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Header from "../Global Components/header";
import Navbar from "../Global Components/Navbar";
import "./Dashboard.css";

// 🖼️ Image Rotator Component
function ImageCarousel({ images = [], alt }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [images]);

  return (
    <img
      src={`http://localhost:8080${images[index]}`}
      alt={alt}
      className="rotating-image"
    />
  );
}

// function Dashboard() {
//   const [items, setItems] = useState([]);
//   const navigate = useNavigate();
//   const user = localStorage.getItem("User");

//   const handleSubmit = () => {
//     if (!user) {
//       navigate("/user/login");
//     } else {
//       navigate("/user/upload/cateogry");
//     }
//   };

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/fetch");
//         setItems(response.data);
//       } catch (error) {
//         console.error("Error fetching items:", error);
//       }
//     };
//     fetchItems();
//   }, []);

//   return (
//     <div className="Dashboard-container">
//       <Navbar />
//       <Header />
//       <div className="Dashboard-items">
//         <div className="Upload-item-list">
//           {items.length > 0 ? (
//             items.map((product) => (
//               <Link
//                 to={`/item/${product.product_id}`}
//                 key={product.product_id}
//                 className="item-card"
//               >
//                 <h2 className="product-title">{product.productName}</h2>

//                 <div className="image-container">
//                   <ImageCarousel images={product.images} alt={product.productName} />
//                 </div>

//                 <div className="product-price">₹{product.price}</div>

//                 <div className="product-description">
//                   {product.description
//                     .split("\n")
//                     .slice(0, 5)
//                     .map((line, idx) => (
//                       <div key={idx}>{line}</div>
//                     ))}
//                 </div>

//                 {/* 👇 New View Product Button */}
//                 <div className="view-product-button">View Product</div>
//               </Link>
//             ))
//           ) : (
//             <p className="no-items-message">No items available yet</p>
//           )}
//         </div>

//           <button onClick={handleSubmit} className="upload-button">
//             Upload Item
//           </button>
//       </div>
//     </div>
//   );
// }


function Dashboard() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // 🆕
  const navigate = useNavigate();
  const user = localStorage.getItem("User");

  const handleSubmit = () => {
    if (!user) {
      navigate("/user/login");
    } else {
      navigate("/user/upload/cateogry");
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/fetch");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  const filteredItems = items.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="Dashboard-container">
      <Navbar onSearch={setSearchQuery} /> {/* 🆕 */}
      <Header />
      <div className="Dashboard-items">
        <div className="Upload-item-list">
          {filteredItems.length > 0 ? (
            filteredItems.map((product) => (
              <Link
                to={`/item/${product.product_id}`}
                key={product.product_id}
                className="item-card"
              >
                <h2 className="product-title">{product.productName}</h2>

                <div className="image-container">
                  <ImageCarousel images={product.images} alt={product.productName} />
                </div>

                <div className="product-price">₹{product.price}</div>

                <div className="product-description">
                  {product.description
                    .split("\n")
                    .slice(0, 5)
                    .map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                </div>

                <div className="view-product-button">View Product</div>
              </Link>
            ))
          ) : (
            <p className="no-items-message">No items available yet</p>
          )}
        </div>

          <button onClick={handleSubmit} className="upload-button">
            Upload Item
          </button>
      </div>
    </div>
  );
}


export default Dashboard;

