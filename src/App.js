import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Shop } from "./Pages/shopping/Shop";
import { Cart } from "./Pages/cart/cart";
import { ShopContextProvider } from "./context/shopContext";
import { Paym } from "./Pages/check/Paym";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Paym" element={<Paym />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
