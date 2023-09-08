import "./App.css";
import ProductDetail from "./components/ProductDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ProductDetail' element={<ProductDetail />} />
      <Route path='/Cart' element={<Cart />} />
    </Routes>
    </>
  );
}

export default App;
