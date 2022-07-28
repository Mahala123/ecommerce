import React from "react";
import ProductList from "./ProductList";
import './Productlist.css';

const productsArr = [
  {
    id: "p1",
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity:1,
  },

  {
    id: "p2",
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity:1,
  },

  {
    id: "p3",
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity:1,
  },

  {
    id: "p4",
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity:1,
  },
];

const Product = () => {
  const Productlists = productsArr.map((products) => (
    <ProductList
    key={products.id}
      id={products.id}
      title={products.title}
      price={products.price}
      imageurl={products.imageUrl}
      quantity={products.quantity}
      
      
      
    />
  ));

  return(<div>
    <h3 style={{ color:'black',textDecoration: 'underline'}}>MUSIC</h3>

    <ul className='productContainer'>{Productlists}</ul>
    </div>
  )
  
};

export default Product;
