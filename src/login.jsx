import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login({ onLogin }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // 🔥 for redirect

  function handleSubmit(e) {
    e.preventDefault();

    if (userId === "myshopnepal" && password === "12345") {
      setError("");
      onLogin(); // update login state

      // 🔥 redirect to dashboard
      navigate("/admin");
    } else {
      setError("Invalid ID or Password ❌");
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        {error && <p className="error-text">{error}</p>}
      </div>
    </div>
  );
}