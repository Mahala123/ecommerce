import { useParams,NavLink } from "react-router-dom";
import React from "react";
import './Itemdetails.css';
const productsArr = [
  {
    id: "p1",

    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 1,
    
  },

  {
    id: "p2",
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },

  {
    id: "p3",

    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },

  {
    id: "p4",

    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const ItemDetails = () => {
  const params = useParams();
  console.log(params.productId);

  //var product=productsArr.filter(prod=>{
  // return params.productId==prod.id;

  return (
    <section>

<header>
        <ul className="header">
        <li>
            <NavLink  to="/Home">HOME</NavLink>
          </li>

          <NavLink to='/store'activeClassName="active">STORE</NavLink>

          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>

          <li>
            <NavLink to="/Contactus">CONTACT US</NavLink>
          </li>
          <li>
            <NavLink to="/MOVIES">MOVIES</NavLink>
          </li>
        </ul>
        <h1>THE GENERICS</h1>
      </header>

      <h1 className="container">Product Detail</h1>
      {productsArr.map((products) => (
       <div className="container">{params.productId===products.id&&<div>
          <div>
            <h4>Title: {products.title}</h4>
          </div><br></br>
          <div>
            <img src={products.imageUrl} alt="products" />
          </div>
          <span> </span><br></br>
          <div>
            <h4>Rs.{products.price} </h4>
          </div>
        </div>}</div> 
      ))}
    </section>
  );
};

export default ItemDetails;
