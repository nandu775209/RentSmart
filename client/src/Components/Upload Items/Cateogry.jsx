// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Cateogry.css"; // Ensure this file exists


// function FillDetails() {
//     const [productName, setProductName] = useState("");
//     const [description, setDescription] = useState("");
//     const [images, setImages] = useState([]);
//     const [preview, setPreview] = useState([]);
//     const [price, setPrice] = useState("");
//     const [rentPrice, setRentPrice] = useState("");
//     const [mobile, setMobile] = useState("");
//     const [address, setAddress] = useState("");

//     const navigate = useNavigate();

//     // Handling Image Selection & Preview
//     const handleFileChange = (e) => {
//         const selectedFiles = Array.from(e.target.files);
//         if (selectedFiles.length < 4 || selectedFiles.length > 12) {
//             alert("Please select between 4 to 12 images.");
//             return;
//         }

//         setImages(selectedFiles);
//         setPreview(selectedFiles.map((file) => URL.createObjectURL(file))); // Generate image previews
//     };

//     // Uploading Data to Backend
//     const handleUpload = async () => {
//         if (!productName || !description || !price || !rentPrice || images.length < 4 || !address || !mobile) {
//             alert("Please fill all the details properly.");
//             return;
//         }

//         const formData = new FormData();
//         images.forEach((image) => formData.append("photos", image)); // Fix `.ForEach()` error
//         formData.append("productName", productName);
//         formData.append("description", description);
//         formData.append("price", price);
//         formData.append("rentPrice", rentPrice);
//         formData.append("mobile", mobile);
//         formData.append("address", address);

//         try {
//             await axios.post("http://localhost:8080/api/upload", formData, {
//                 headers: { "Content-Type": "multipart/form-data" },
//             });
//             alert("Product added successfully!");
//             setTimeout(() => navigate("/"), 2000);
//         } catch (err) {
//             console.error(err);
//             alert("Upload failed. Please try again.");
//             clearForm();
//         }
//     };

//     // Clearing Form Data
//     function clearForm() {
//         setProductName("");
//         setDescription("");
//         setImages([]);
//         setPreview([]);
//         setPrice("");
//         setRentPrice("");
//         setMobile("");
//         setAddress("");
//     }

//     return (
//         <div className="FillDetailsContainer">
//             <div className="FillDetails">
//                 <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
//                 <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//                 <input type="file" multiple accept="image/*" onChange={handleFileChange} />

//                 {/* Image Preview Section */}
//                 <div className="imagePreviewContainer">
//                     {preview.map((src, index) => (
//                         <img key={index} src={src} alt="preview" />
//                     ))}
//                 </div>

//                 <input type="number" placeholder="Selling Price" value={price} onChange={(e) => setPrice(e.target.value)} />
//                 <input type="number" placeholder="Rent Price (per day)" value={rentPrice} onChange={(e) => setRentPrice(e.target.value)} />
//                 <input type="text" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
//                 <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />

//                 <div className="UploadItemButton">
//                     <button onClick={handleUpload}>Proceed</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default FillDetails;




// new code

// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Cateogry.css"; // Make sure this file exists

// function FillDetails() {
//     const [productName, setProductName] = useState("");
//     const [specifications, setSpecifications] = useState([{ key: "", value: "" }]);
//     const [images, setImages] = useState([]);
//     const [preview, setPreview] = useState([]);
//     const [price, setPrice] = useState("");
//     const [rentPrice, setRentPrice] = useState("");
//     const [mobile, setMobile] = useState("");
//     const [address, setAddress] = useState("");

//     const navigate = useNavigate();

//     // Handling Image Selection & Preview
//     const handleFileChange = (e) => {
//         const selectedFiles = Array.from(e.target.files);
//         if (selectedFiles.length < 4 || selectedFiles.length > 12) {
//             alert("Please select between 4 to 12 images.");
//             return;
//         }
//         setImages(selectedFiles);
//         setPreview(selectedFiles.map((file) => URL.createObjectURL(file)));
//     };

//     // Handle Specification Change
//     const handleSpecificationChange = (index, field, value) => {
//         const updatedSpecs = [...specifications];
//         updatedSpecs[index][field] = value;
//         setSpecifications(updatedSpecs);
//     };

//     // Add New Specification Field
//     const addSpecification = () => {
//         setSpecifications([...specifications, { key: "", value: "" }]);
//     };

//     // Remove a Specification
//     const removeSpecification = (index) => {
//         const updatedSpecs = [...specifications];
//         updatedSpecs.splice(index, 1);
//         setSpecifications(updatedSpecs);
//     };

//     // Uploading Data to Backend
//     const handleUpload = async () => {
//         if (!productName || !price || !rentPrice || images.length < 4 || !address || !mobile) {
//             alert("Please fill all the details properly.");
//             return;
//         }

//         const formData = new FormData();
//         images.forEach((image) => formData.append("photos", image));
//         formData.append("productName", productName);

//         // Formatting Specifications
//         const formattedDescription = specifications
//             .filter(spec => spec.key && spec.value) // Only non-empty
//             .map(spec => `${spec.key}: ${spec.value}`)
//             .join("\n");

//         formData.append("description", formattedDescription);
//         formData.append("price", price);
//         formData.append("rentPrice", rentPrice);
//         formData.append("mobile", mobile);
//         formData.append("address", address);

//         try {
//             await axios.post("http://localhost:8080/api/upload", formData, {
//                 headers: { "Content-Type": "multipart/form-data" },
//             });
//             alert("Product added successfully!");
//             setTimeout(() => navigate("/"), 2000);
//         } catch (err) {
//             console.error(err);
//             alert("Upload failed. Please try again.");
//             clearForm();
//         }
//     };

//     // Clearing Form Data
//     function clearForm() {
//         setProductName("");
//         setSpecifications([{ key: "", value: "" }]);
//         setImages([]);
//         setPreview([]);
//         setPrice("");
//         setRentPrice("");
//         setMobile("");
//         setAddress("");
//     }

//     return (
//         <div className="FillDetailsContainer">
//             <div className="FillDetails">
//                 <input
//                     type="text"
//                     placeholder="Product Name"
//                     value={productName}
//                     onChange={(e) => setProductName(e.target.value)}
//                 />

//                 {/* Dynamic Specifications */}
//                 <h3>Specifications</h3>
//                 {specifications.map((spec, index) => (
//                     <div key={index} className="specificationRow">
//                         <input
//                             type="text"
//                             placeholder="Field (e.g., Model ID, Color)"
//                             value={spec.key}
//                             onChange={(e) => handleSpecificationChange(index, "key", e.target.value)}
//                         />
//                         <input
//                             type="text"
//                             placeholder="Value (e.g., Super Buds, Black)"
//                             value={spec.value}
//                             onChange={(e) => handleSpecificationChange(index, "value", e.target.value)}
//                         />
//                         {specifications.length > 1 && (
//                             <button onClick={() => removeSpecification(index)} style={{ marginLeft: "5px" }}>
//                                 Remove
//                             </button>
//                         )}
//                     </div>
//                 ))}
//                 <button onClick={addSpecification} style={{ marginTop: "10px" }}>
//                     Add More Specification
//                 </button>

//                 {/* Image Upload */}
//                 <input type="file" multiple accept="image/*" onChange={handleFileChange} />

//                 {/* Image Preview */}
//                 <div className="imagePreviewContainer">
//                     {preview.map((src, index) => (
//                         <img key={index} src={src} alt="preview" />
//                     ))}
//                 </div>

//                 {/* Price and Contact Info */}
//                 <input
//                     type="number"
//                     placeholder="Selling Price"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Rent Price (per day)"
//                     value={rentPrice}
//                     onChange={(e) => setRentPrice(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Mobile Number"
//                     value={mobile}
//                     onChange={(e) => setMobile(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Address"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                 />

//                 {/* Upload Button */}
//                 <div className="UploadItemButton">
//                     <button onClick={handleUpload}>Proceed</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default FillDetails;

// new code 2

// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Cateogry.css"; // Make sure this exists

// function FillDetails() {
//     const [details, setDetails] = useState("");
//     const [images, setImages] = useState([]);
//     const [preview, setPreview] = useState([]);
//     const [price, setPrice] = useState("");
//     const [rentPrice, setRentPrice] = useState("");
//     const [mobile, setMobile] = useState("");
//     const [address, setAddress] = useState("");

//     const navigate = useNavigate();

//     const handleFileChange = (e) => {
//         const selectedFiles = Array.from(e.target.files);
//         if (selectedFiles.length < 4 || selectedFiles.length > 12) {
//             alert("Please select between 4 to 12 images.");
//             return;
//         }
//         setImages(selectedFiles);
//         setPreview(selectedFiles.map(file => URL.createObjectURL(file)));
//     };

//     const handleUpload = async () => {
//         if (!details || !price || !rentPrice || images.length < 4 || !mobile || !address) {
//             alert("Please fill all the details properly.");
//             return;
//         }

//         const formData = new FormData();
//         images.forEach(image => formData.append("photos", image));
//         formData.append("details", details);
//         formData.append("price", price);
//         formData.append("rentPrice", rentPrice);
//         formData.append("mobile", mobile);
//         formData.append("address", address);

//         try {
//             await axios.post("http://localhost:8080/api/upload", formData, {
//                 headers: { "Content-Type": "multipart/form-data" },
//             });
//             alert("Product added successfully!");
//             setTimeout(() => navigate("/"), 2000);
//         } catch (err) {
//             console.error(err);
//             alert("Upload failed. Please try again.");
//             clearForm();
//         }
//     };

//     function clearForm() {
//         setDetails("");
//         setImages([]);
//         setPreview([]);
//         setPrice("");
//         setRentPrice("");
//         setMobile("");
//         setAddress("");
//     }

//     return (
//         <div className="FillDetailsContainer">
//             <div className="FillDetails">

//                 <h2>Enter Complete Product Details</h2>
//                 <textarea
//                     placeholder={`Product Name: \nPurchase Date: \nModel No.: \nAvailability: \nOwner Name: \nOwner Address: \nOwner Phone No:`}
//                     value={details}
//                     onChange={(e) => setDetails(e.target.value)}
//                     rows={10}
//                     style={{ resize: "vertical" }}
//                 />

//                 <input type="file" multiple accept="image/*" onChange={handleFileChange} />
//                 <div className="imagePreviewContainer">
//                     {preview.map((src, index) => (
//                         <img key={index} src={src} alt="preview" />
//                     ))}
//                 </div>

//                 <input type="number" placeholder="Selling Price" value={price} onChange={(e) => setPrice(e.target.value)} />
//                 <input type="number" placeholder="Rent Price (per day)" value={rentPrice} onChange={(e) => setRentPrice(e.target.value)} />
//                 <input type="text" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
//                 <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />

//                 <div className="UploadItemButton">
//                     <button onClick={handleUpload}>Proceed</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default FillDetails;


// new code 3

// import React, { useState } from "react";
//  // Optional if you want separate styling
// import "./Cateogry.css";
// function ProductDetails() {
//   const defaultDetails = `Product Name: 
// Purchase Date: 
// Model No.: 
// Availability: 
// Owner Name: 
// Owner Address: 
// Owner Phone No: `;

//   const [details, setDetails] = useState(defaultDetails);

//   const handleSubmit = () => {
//     console.log("Submitted Details:\n", details);
//     alert("Details submitted successfully!");
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Enter Complete Product Details</h2>
//       <textarea
//         value={details}
//         onChange={(e) => setDetails(e.target.value)}
//         rows={10}
//         style={styles.textarea}
//       />
//       <button onClick={handleSubmit} style={styles.button}>
//         Submit
//       </button>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     maxWidth: "600px",
//     margin: "auto",
//     padding: "20px",
//     borderRadius: "10px",
//     backgroundColor: "#f9f9f9",
//     boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//     textAlign: "center",
//     fontFamily: "sans-serif"
//   },
//   title: {
//     marginBottom: "15px",
//     color: "#333"
//   },
//   textarea: {
//     width: "100%",
//     fontFamily: "monospace",
//     whiteSpace: "pre",
//     padding: "12px",
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//     fontSize: "14px",
//     resize: "vertical",
//     outline: "none",
//     minHeight: "200px",
//     marginBottom: "20px"
//   },
//   button: {
//     padding: "10px 20px",
//     border: "none",
//     background: "linear-gradient(to right, #00c6ff, #0072ff)",
//     color: "white",
//     fontWeight: "bold",
//     fontSize: "16px",
//     borderRadius: "6px",
//     cursor: "pointer"
//   }
// };

// export default ProductDetails;


//new code 4

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Cateogry.css";

function FillDetails() {
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState(`Product Name: 
Purchase Date: 
Model No.: 
Availability: 
Owner Name: 
Owner Address: 
Owner Phone No: `);
    const [images, setImages] = useState([]);
    const [preview, setPreview] = useState([]);
    const [price, setPrice] = useState("");
    const [rentPrice, setRentPrice] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");

    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (selectedFiles.length < 4 || selectedFiles.length > 12) {
            alert("Please select between 4 to 12 images.");
            return;
        }
        setImages(selectedFiles);
        setPreview(selectedFiles.map((file) => URL.createObjectURL(file)));
    };

    const handleUpload = async () => {
        if (!productName || !description || !price || !rentPrice || images.length < 4 || !address || !mobile) {
            alert("Please fill all the details properly.");
            return;
        }

        const formData = new FormData();
        images.forEach((image) => formData.append("photos", image));
        formData.append("productName", productName);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("rentPrice", rentPrice);
        formData.append("mobile", mobile);
        formData.append("address", address);

        try {
            await axios.post("http://localhost:8080/api/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert("Product added successfully!");
            setTimeout(() => navigate("/"), 2000);
        } catch (err) {
            console.error(err);
            alert("Upload failed. Please try again.");
            clearForm();
        }
    };

    function clearForm() {
        setProductName("");
        setDescription(`Product Name: 
Purchase Date: 
Model No.: 
Availability: 
Owner Name: 
Owner Address: 
Owner Phone No: `);
        setImages([]);
        setPreview([]);
        setPrice("");
        setRentPrice("");
        setMobile("");
        setAddress("");
    }

    return (
        <div className="FillDetailsContainer">
            <div className="FillDetails">
                <input
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />

                <h3 style={{ marginBottom: "5px" }}>Enter Complete Product Details</h3>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={10}
                    style={{
                        width: "100%",
                        padding: "10px",
                        fontFamily: "monospace",
                        borderRadius: "5px",
                        marginBottom: "10px",
                        border: "1px solid #ccc",
                        whiteSpace: "pre"
                    }}
                />

                <input type="file" multiple accept="image/*" onChange={handleFileChange} />
                <div className="imagePreviewContainer">
                    {preview.map((src, index) => (
                        <img key={index} src={src} alt="preview" />
                    ))}
                </div>

                <input type="number" placeholder="Selling Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="number" placeholder="Rent Price (per day)" value={rentPrice} onChange={(e) => setRentPrice(e.target.value)} />
                <input type="text" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />

                <div className="UploadItemButton">
                    <button onClick={handleUpload}>Proceed</button>
                </div>
            </div>
        </div>
    );
}

export default FillDetails;

