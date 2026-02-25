import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">MyShopNepal</Link>
      </div>

      <div className="nav-middle">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>

      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>
        <button className="login">Login</button>
      </div>
    </nav>
  );
}