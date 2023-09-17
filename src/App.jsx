import "./App.css";
import ProductDetail from "./components/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Footer from "./components/Footer";
import About from "./components/About";
import ProductCategories from "./components/ProductCategories";
import Login from "./components/Login";
import AllProducts from "./components/AllProducts";
import Navbar from "./components/Navbar";
import Account from "./components/Account";
import Register from "./components/Register";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditAccount from "./components/EditAcount";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products/:categorySlug/:productSlug"
          element={<ProductDetail />}
        />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:categorySlug" element={<ProductCategories />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<EditAccount />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
