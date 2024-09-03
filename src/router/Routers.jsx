import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import Checkout from "../pages/Checkout";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"home"} />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<ProductDetails />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default Routers;
