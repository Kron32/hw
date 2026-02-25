import React, { useState } from "react";
import "./Cart.css";

export default function Cart({ cartItems = [], total = 0, clearCart }) {
  const [done, setDone] = useState(false);

  function placeOrder() {
    if (cartItems.length === 0) return;
    setDone(true);
    if (clearCart) clearCart();
  }

  if (done) {
    return (
      <div className="cartPage">
        <div className="completeBox">
          <h1>✅ Your order is complete</h1>
          <p>Thank you for shopping with MyShopNepal.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cartPage">
      <h1 className="title">Cart</h1>

      <div className="cartBox">
        {cartItems.length === 0 ? (
          <p className="muted">Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="item" key={item.id}>
                <span>{item.name} × {item.qty}</span>
                <span>Rs {item.price * item.qty}</span>
              </div>
            ))}

            <div className="line"></div>

            <div className="totalRow">
              <b>Total</b>
              <b>Rs {total}</b>
            </div>

            <button className="blackBtn" onClick={placeOrder}>
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
}