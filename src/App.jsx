import "./App.css";
import ProductDetail from "./components/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NavbarCart from "./components/NavbarCart";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <>
      <NavbarCart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
