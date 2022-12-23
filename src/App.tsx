import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/products/Products";
import Box from "@mui/material/Box";
import Cart from "./components/cart/Cart";
import ProductDetails from "./components/productDetails/ProductDetails";

const App = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <Cart />
      <Box sx={{ paddingTop: "4rem" }}>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:id" element={<ProductDetails />} />
        </Routes>
      </Box>
    </div>
  );
};

export default App;
