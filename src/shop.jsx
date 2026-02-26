import React from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";

export const PRODUCTS = [
  {
    id: 1,
    name: "Smart Watch",
    price: 3499,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&w=800",
  },
  {
    id: 2,
    name: "Analog Watch",
    price: 2499,
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&w=800",
  },
  {
    id: 3,
    name: "T-Shirt",
    price: 1299,
    image: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&w=800",
  },
  {
    id: 4,
    name: "Jeans",
    price: 2599,
    image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&w=800",
  },

  // ❌ HOODIE REMOVED

  {
    id: 6,
    name: "Sneakers",
    price: 2799,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&w=800",
  },
  {
    id: 7,
    name: "Running Shoes",
    price: 3299,
    image: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&w=800",
  },
  {
    id: 8,
    name: "Backpack",
    price: 1899,
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&w=800",
  },
  {
    id: 9,
    name: "Handbag",
    price: 1599,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&w=800",
  },
  {
    id: 10,
    name: "Headphones",
    price: 2999,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&w=800",
  },
  {
    id: 11,
    name: "Sunglasses",
    price: 999,
    image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&w=800",
  },
];

export default function Shop({ addToCart }) {
  const navigate = useNavigate();

  function handleAdd(id) {
    addToCart(id);
    navigate("/cart");
  }

  return (
    <div className="shopPage">
      <h1 className="title">Shop</h1>

      <div className="productsGrid">
        {PRODUCTS.map((p) => (
          <div className="productCard" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>Rs {p.price}</p>

            <button className="blackBtn" onClick={() => handleAdd(p.id)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}