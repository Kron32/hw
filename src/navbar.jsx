import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ isLoggedIn, onLogout }) {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">MyShopNepal</Link>

      <div className="nav-middle">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>

      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>

        {isLoggedIn ? (
          <button className="login" onClick={onLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="login">Login</Link>
        )}
      </div>

    </nav>
  );
}