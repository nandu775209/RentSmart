// //import the css properties of the billing

// function Billing(){

//     //backend se product ki price 
//     // if user selected rent mode then that should be the price 
//     // if user selected buy mode then it should be a actual price
    
//     return(
        
//         <div className="BillingContainer">
//             <div className="PageOverview">
//                 <div className="BillingInfo">

//                     <div className="Billing">
//                         {/* price of the item */}
//                         {/* Discount */}
//                         {/* And Gst and All */}
//                     </div>
//                     <div className="SellerInfo">
//                         {/* Seller the name / company name  */}
//                         {/* seller ka address */}
//                         {/* seller ka contact number */}
//                     </div>
//                    <div className="paymentProceed">
//                     <div className="Price">
//                         {/* Yaha par price dynamically lena hai */}
//                     </div>
//                     <div className="PaymentButton">
//                         {/* yaha par button  */} 
//                         link to the  payment option  and all and here our project will end 
//                     </div>
//                    </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// export default Billing


// new code


import React from "react";
 
import { useLocation } from "react-router-dom";
import "./billing.css"; // make sure you have Billing.css for styling

function Billing() {
  const location = useLocation();
  const { price, product, mode, days } = location.state || {};

  const gstRate = 0.18; // 18% GST
  const discount = mode === "buy" ? 0.05 : 0; // 5% discount on buying
  const gstAmount = price * gstRate;
  const discountAmount = price * discount;
  const finalPrice = price + gstAmount - discountAmount;

  return (
    <div className="BillingContainer">
      <div className="PageOverview">
        <div className="BillingInfo">

          <div className="Billing">
            <h2>Billing Summary</h2>
            <p>Item Price: ₹{price?.toFixed(2)}</p>
            {discount > 0 && <p>Discount (5%): -₹{discountAmount.toFixed(2)}</p>}
            <p>GST (18%): ₹{gstAmount.toFixed(2)}</p>
            <hr />
            <h3>Total Amount: ₹{finalPrice.toFixed(2)}</h3>
            {mode === "rent" && <p>Rented for {days} day{days > 1 ? "s" : ""}</p>}
          </div>

          <div className="SellerInfo">
            <h2>Seller Information</h2>
            <p><strong>Seller Name:</strong> {product?.sellerName || "NK Mudafale"}</p>
            <p><strong>Address:</strong> {product?.sellerAddress || "106, Silicon City Indore"}</p>
            <p><strong>Contact:</strong> {product?.sellerContact || "+91 8103006948"}</p>
          </div>

          <div className="paymentProceed">
            <div className="Price">
              <h2>Final Price: ₹{finalPrice.toFixed(2)}</h2>
            </div>

            <div className="PaymentButton">
              <button className="PayNowBtn">
                Proceed to Payment
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Billing;
