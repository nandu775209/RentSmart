import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PopUp from "./popUp";
import "./ItemInfo.css";

function ItemDescription() {
  const navigate = useNavigate();
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const [mode, setMode] = useState("buy");
  const [showPopup, setShowPopup] = useState(false);
  const [days, setDays] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [totalCost, setTotalCost] = useState(null);


  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/api/item/${product_id}`);
        setApiResponse(res);
        // console.log(apiResponse.data.rentPrice)
        setProduct(res.data);
        setPrice(res.data.price);
        console.log(res.data.rentPrice);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    }
    fetchProduct();
  }, [product_id]);

  const handleModeSwitch = (selectedMode) => {
    if (selectedMode === "rent") {
      setShowPopup(true);
    } else {
      setMode("buy");
      setPrice(product.price);
    }
  };

  const handleRentConfirm = ({ days: selectedDays, totalCost }) => {
    setMode("rent");
    setDays(selectedDays);         // ✅ Now `selectedDays` is a number
    setPrice(totalCost);
    setTotalCost(totalCost);
    setShowPopup(false);
  };
  

  const handleProceed = () => {
    navigate(`/billing/${product_id}`, { state: { price, product, mode, days } });
  };

  if (!product) return <p className="loading">Loading product details…</p>;

  return (
    <div className="ItemPageContainer">
      <div className="ItemCard">
        {/* Left Section */}
        <div className="ItemImages">
          <div className="MainImageWrapper">
            <img
              src={`http://localhost:8080${product.images[selectedImage]}`}
              alt="Main"
              className="MainImage"
            />
          </div>

          <div className="ThumbnailRow">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={`http://localhost:8080${img}`}
                alt={`thumb-${idx}`}
                className={`ThumbnailImage ${idx === selectedImage ? "active" : ""}`}
                onClick={() => setSelectedImage(idx)}
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="ItemDetails">
          <h1 className="ItemTitle">{product.productName}</h1>
          <div className="Divider" />
          <p className="ItemDescription">{product.description}</p>

          <p className="ItemPrice">
  {price}₹ {mode === "rent" && `(for ${days} day${days > 1 ? "s" : ""})`}
</p>

{mode === "rent" && totalCost && (
  <p className="ItemTotalCost">Total Rent Cost: ₹{totalCost}</p>
)}



          <div className="ModeSwitch">
            <button onClick={() => handleModeSwitch("buy")}>Buy</button>
            <button onClick={() => handleModeSwitch("rent")}>Rent</button>
          </div>

          <button className="ProceedButton" onClick={handleProceed}>
            Proceed to {mode === "buy" ? "Buy" : "Rent"}
          </button>
        </div>
      </div>

      {/* Popup for renting */}
      {showPopup && (
        <PopUp
          message="How many days would you like to rent?"
          rentPrice={apiResponse.data.rentPrice || 0}
          onConfirm={handleRentConfirm}
          onCancel={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default ItemDescription;




