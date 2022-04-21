import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar,Footer } from "../components";
import { HomePage,ProductDetails,Login,Registeration,Profile,Cart,Checkout,Shipping,WrapPayment
 } from "../Screens";


const AppRoutes = () => {
  
 
  
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path="" element={<HomePage/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Registeration/>} />
        <Route path="/me" element={<Profile/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/shipping" element={<Shipping/>} />
        <Route path="/payment" element={<WrapPayment/>} />
          
        
       
      </Routes>
      
      <Footer/>
    </div>
  );
};

export default AppRoutes;
