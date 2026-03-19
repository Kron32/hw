import React, { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./navbar";
import HomePage from "./home";
import Shop, { PRODUCTS } from "./shop";
import Cart from "./cart";
import Contact from "./contact";
import Login from "./login";

export default function App() {
  const [cart, setCart] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function addToCart(productId) {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  }

  function clearCart() {
    setCart({});
  }

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  const cartItems = useMemo(() => {
    return Object.entries(cart)
      .map(([id, qty]) => {
        const p = PRODUCTS.find((x) => x.id === Number(id));
        return p ? { ...p, qty } : null;
      })
      .filter(Boolean);
  }, [cart]);

  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  }, [cartItems]);

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              total={total}
              clearCart={clearCart}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ LOGIN PAGE */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* ✅ PROTECTED PAGE */}
        <Route
          path="/admin"
          element={
            isLoggedIn ? (
              <div style={{ padding: "40px", textAlign: "center" }}>
                <h2>Welcome, myshopnepal</h2>
                <p>Login successful ✅</p>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}