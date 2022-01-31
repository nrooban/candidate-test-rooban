import { Cart } from "./components/cart/Cart";
import { Products } from "./components/products/Products";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Nav } from "./components/global/nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Nav />
      <div className="min-h-screen bg-gray-100 py-20">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
