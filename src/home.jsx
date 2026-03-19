import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function home(){

return(

<div className="home">


<div className="content">


<h1 className="title">

MyShopNepal

</h1>


<p className="subtitle">

Simple ecommerce for daily-use products

</p>



<div className="box-row">


<div className="box">

<h2>About Us</h2>

<p>

We provide simple and easy shopping experience.

</p>

</div>



<div className="box">

<h2>Contact</h2>

<p>

Visit contact page for help and support.

</p>

</div>


</div>



<Link to="/shop">

<button className="shop-btn">

Shop

</button>

</Link>


</div>


</div>

)

}