import "./App.css";
import ProductDetail from "./components/ProductDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path='/ProductDetail' element={<ProductDetail />} />
    </Routes>
    </>
  );
}

export default App;
