import React, { useContext } from "react";
import { PRODUCTS } from "../../Product";
import { ShopContext } from "../../context/shopContext";
import { CartItem } from "./CartItem";
import "./Cart.css";

import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
        {totalAmount > 0 ?
      <div className="checkout">
        <h3>Subtotal: ${totalAmount}</h3>
        <button onClick={() => navigate("/")}>Contiune Shopping</button>
        <button onClick={() => navigate("/Paym")}>Checkout</button>
        </div>
      : <h1>Your Cart Is Empty</h1>}
        </div>
  );
};
