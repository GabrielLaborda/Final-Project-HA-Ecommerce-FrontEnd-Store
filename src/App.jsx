import './App.css';
import ProductDetail from './components/ProductDetail';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import About from './components/About';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
