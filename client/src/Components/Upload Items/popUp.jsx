// import React,{useState} from "react";
// import "./popUp.css"

// function popUp({ message , rentPrice ,onConfirm , onCancle}){
//     const[days , setDays]= useState(1);

//     const handleConfirm=()=>{
//        const totalCost = days * rentPrice;
//        onConfirm(days ,totalCost)
//     }
//     return(
//         <div className="popupContainer">
//             <div className="popup-content">
//                 <p>{message}</p>

//                 <label>Enter number of the days:</label>
//                 <input 
//                 type="number"
//                 min="1"
//                 value={days}
//                 onChange={(e)=>setDays(e.target.value)}
//                 />

//                 {/* this to show  when the  user input the number of the days  */}
//                 <p> Total Rent Price :₹{days*rentPrice}</p>
                
//                 <button onClick={handleConfirm}> confirm Rent</button>
//                 <button onClick={onCancle}>cancle</button>
//             </div>
//         </div>
//     )
// }

// export default popUp;;


// whatsup code


// import React,{useState} from "react";
// //yaha par rentprice kaise  laayege ??
// function PopUp({ message , rentprice ,onConfirm , onCancle}){
//     console.log(message , rentprice);
//     const[days , setDays]= useState(1);

//     const handleConfirm=()=>{
//        const totalCost = days * rentprice;
//        onConfirm(days ,totalCost)
//     }
//     return(
//         <div className="popupContainer">
//             <div className="popup-content">
//                 <p>{message}</p>

//                 <label>Enter number of the days:</label>
//                 <input 
//                 type="number"
//                 min="1"
//                 value={days}
//                 onChange={(e)=>setDays(e.target.value)}
//                 />

//                 {/* this to show  when the  user input the number of the days  */}
//                 <p> Total Rent Price :₹{days*rentprice}</p>
                
//                 <button onClick={handleConfirm}> confirm Rent</button>
//                 <button onClick={onCancle}>cancle</button>
//             </div>
//         </div>
//     )
// }

// export default PopUp;


//new code

// import React, { useState } from "react";
// import "./popUp.css"; // Optional: external CSS if you're using one

// function PopUp({ message, rentprice, onConfirm, onCancle }) {
//   const [days, setDays] = useState(1);

//   const handleConfirm = () => {
//     const totalCost = Number(days) * Number(rentprice);
//     onConfirm(Number(days), totalCost);
//   };

//   return (
//     <div className="popupContainer">
//       <div className="popupContent">
//         <h2>{message}</h2>

//         <label htmlFor="rent-days">Enter number of days:</label>
//         <input
//           id="rent-days"
//           type="number"
//           min="1"
//           value={days}
//           onChange={(e) => setDays(Number(e.target.value))}
//         />

//         <p className="rentPrice">
//           Total Rent Price: <strong>₹{Number(days) * Number(rentprice)}</strong>
//         </p>

//         <div className="popupButtons">
//           <button className="confirmBtn" onClick={handleConfirm}>
//             Confirm Rent
//           </button>
//           <button className="cancelBtn" onClick={onCancle}>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PopUp;


//new code 2
import React, { useState, useEffect } from "react";
import "./popUp.css";

function PopUp({ message, rentPrice, onConfirm, onCancel }) {
  const [days, setDays] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const isValidRent = !isNaN(Number(rentPrice)) && Number(rentPrice) > 0;

  useEffect(() => {
    // auto-calculate end date if start date and days are set
    if (startDate && days > 0) {
      const start = new Date(startDate);
      const calculatedEnd = new Date(start);
      calculatedEnd.setDate(start.getDate() + Number(days));
      setEndDate(calculatedEnd.toISOString().split("T")[0]);
    }
  }, [startDate, days]);

  const handleConfirm = () => {
    const totalCost = Number(days) * rentPrice;
    onConfirm({
      days: Number(days),
      totalCost,
      startDate,
      endDate
    });
  };

  return (
    <div className="popupContainer">
      <div className="popupContent">
        <h2>{message}</h2>

        <label htmlFor="rent-days">Enter number of days:</label>
        <input
          id="rent-days"
          type="number"
          min="1"
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
        />

        <div className="calendarInputs">
          <div>
            <label>From:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label>To:</label>
            <input type="date" value={endDate} readOnly />
          </div>
        </div>

        <p className="rentPrice">
          Total Rent Price:{" "}
          <strong>
            ₹{isValidRent ? Number(days) * Number(rentPrice) : "0"}
          </strong>
        </p>

        <div className="popupButtons">
          <button className="confirmBtn" onClick={handleConfirm}>
            Confirm Rent
          </button>
          <button className="cancelBtn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
