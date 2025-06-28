//import logo from './logo.svg';
import {Route, Routes} from "react-router-dom";
//import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from './Components/Register/Signup'
import Cateogry from './Components/Upload Items/Cateogry';
//import './App.css';
import LogIn from './Components/Register/Login';
import Dashboard from "./Components/HomePage/Dashboard";
//import { Router } from 'express';
import ItemInfo from './Components/Upload Items/ItemInfo';
import Aboutus from './Components/HomePage/Aboutus';

import Billing from './Components/Upload Items/Billing';



function App() {
  return (
      <>
         <Routes>
          <Route path="/user/login" element={<LogIn/>}/> 
          <Route path="/about" element={<Aboutus />} />

           <Route path="/user/signup" element={<Signup/>}  />
           <Route path="/" element={<Dashboard/>}  />
           <Route path="/user/upload/cateogry" element={<Cateogry/>}/>
           <Route path="/item/:product_id" element={<ItemInfo/>}/>
           <Route path="/billing/:product_id" element={<Billing/>}/>

         
        </Routes>
      </>
        
  );
}

export default App;


// new code

// import { Routes, Route } from "react-router-dom";

// import Signup from './Components/Register/Signup';
// import Cateogry from './Components/Upload Items/Cateogry';
// import LogIn from './Components/Register/Login';
// import Dashboard from "./Components/HomePage/Dashboard";
// import ItemInfo from './Components/Upload Items/ItemInfo';
// import Aboutus from './Components/HomePage/Aboutus';
// import Billing from './Components/Upload Items/Billing';

// import AdminLogin from "./Admin/AdminLogin";
// import AdminDashboard from "./Admin/AdminDashboard";
// import ManageUsers from "./Admin/ManageUsers";
// import ManageProducts from "./Admin/ManageProducts";
// import ProtectedAdminRoute from "./Admin/ProtectedAdminRoute";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Dashboard />} />
//       <Route path="/about" element={<Aboutus />} />
//       <Route path="/user/signup" element={<Signup />} />
//       <Route path="/user/login" element={<LogIn />} />
//       <Route path="/user/upload/cateogry" element={<Cateogry />} />
//       <Route path="/item/:product_id" element={<ItemInfo />} />
//       <Route path="/billing/:product_id" element={<Billing />} />
      
//       {/* Admin Panel Routes */}
//       <Route path="/admin/login" element={<AdminLogin />} />
      
//       <Route path="/admin/dashboard" element={
//         <ProtectedAdminRoute>
//           <AdminDashboard />
//         </ProtectedAdminRoute>
//       } />
      
//       <Route path="/admin/manage-users" element={
//         <ProtectedAdminRoute>
//           <ManageUsers />
//         </ProtectedAdminRoute>
//       } />
      
//       <Route path="/admin/manage-products" element={
//         <ProtectedAdminRoute>
//           <ManageProducts />
//         </ProtectedAdminRoute>
//       } />
//     </Routes>
//   );
// }

// export default App();