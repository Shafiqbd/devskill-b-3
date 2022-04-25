import React from "react";
import { Route, Routes } from "react-router-dom";
import WebLayout from "./components/layout/WebLayout";
import AddCategory from "./pages/admin/categorys/AddCategory";
import Categories from "./pages/admin/categorys/Categories";
import EditCategory from "./pages/admin/categorys/EditCategory";
import Dashboard from "./pages/admin/Dashboard";
import OrderList from "./pages/admin/OrderList";
import AdminProduct from "./pages/admin/products/Product";
import AdminProductList from "./pages/admin/products/ProductList";
import User from "./pages/admin/users/User";
import UserList from "./pages/admin/users/UserList";
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
        <Route path="orders" element={<OrderList />} />
        <Route path="categories/*" element={<Categories />} />
        <Route path="AddCategory" element={<AddCategory />} />
        <Route path="EditCategory/:id" element={<EditCategory />} />
        <Route path="product-list" element={<AdminProductList />} />
        <Route path="product" element={<AdminProduct />}>
          <Route path=":id" element={<AdminProduct />} />
        </Route>        
        <Route path="user-list" element={<UserList />} />
        <Route path="user" element={<User />}>
          <Route path=":id" element={<User />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
