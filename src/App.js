import React from "react";
import "./App.css";
import Home from "./modules/home";
import Product from "./modules/Products";
import Header from "./components/header";

import CategoryProducts from "./modules/categoryProducts";
import Footer from "./components/Footer";
import Login from "./components/login"
import Signup from "./components/signup"
import { Route, Routes } from "react-router-dom";
import Pro from "./modules/Product";
import Cart from "./modules/Card";
function App() {
  return (
    <div className="text-gray-600 text-4xl">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Pro />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<><Header />
          <div> Error 404</div></>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
