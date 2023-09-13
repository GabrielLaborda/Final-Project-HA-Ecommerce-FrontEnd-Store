import "./App.css";
import ProductDetail from "./components/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NavbarCart from "./components/NavbarCart";
import Footer from "./components/Footer";
import About from "./components/About";
import CompletesList from "./components/CompletesList";
import Login from "./components/Login";

function App() {
  return (
    <>
      <NavbarCart />
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products/:categorySlug/:productSlug"
          element={<ProductDetail />}
        />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/completes" element={<CompletesList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
