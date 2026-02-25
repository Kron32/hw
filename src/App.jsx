import React, { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./navbar";
import HomePage from "./home";
import Shop, { PRODUCTS } from "./shop";
import Cart from "./cart";
import Contact from "./contact";

export default function App() {
  const [cart, setCart] = useState({}); // {id: qty}

  function addToCart(productId) {
    setCart((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
  }

  function clearCart() {
    setCart({});
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
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} total={total} clearCart={clearCart} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}