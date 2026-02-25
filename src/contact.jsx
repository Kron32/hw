import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-page">

      <h1>Contact Us</h1>

      <p className="subtitle">
        If you have any questions, feel free to contact us.
      </p>


      <form className="contact-form">

        <input
          type="text"
          placeholder="Enter your name"
          required
        />

        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <textarea
          placeholder="Enter your message"
          rows="5"
          required
        ></textarea>


        <button type="submit">
          Send Message
        </button>

      </form>


      <div className="contact-info">

        <p>Email: myshop@gmail.com</p>

        <p>Phone: 9828040784</p>

        <p>Address: Kathmandu, Nepal</p>

      </div>


    </div>
  );
}