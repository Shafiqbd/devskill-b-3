import React from "react";
import { Route, Routes } from "react-router-dom";
import WebLayout from "./components/layout/WebLayout";
import Dashboard from "./pages/admin/Dashboard";
import Orders from "./pages/admin/Orders";
import Login from "./pages/common/Login";
import CheckOut from "./pages/frontend/CheckOut";
import ProductDetails from "./pages/frontend/ProductDetails";
import Products from "./pages/frontend/Products";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<WebLayout />}>
        <Route path="/" element={<Products />}>
          <Route path=":id" element={<Products />} />
        </Route>
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path="/Checkout" element={<CheckOut />} />
      </Route>
      <Route path="admin" element={<Dashboard />}>
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
