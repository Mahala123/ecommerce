import React,{useContext} from "react";
import Cartitem from "./CartItem";
import './CART.css';
import Cartcontext from "../Store/Cart-context";
//import axios from "axios";

// const cartElements = [
  // {
    // title: "Colors",
// 
    // price: 100,
// 
    // imageUrl:
      // "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
// 
    // quantity: 2,
  // },
// 
  // {
    // title: "Black and white Colors",
// 
    // price: 50,
// 
    // imageUrl:
      // "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
// 
    // quantity: 3,
  // },
// 
  // {
    // title: "Yellow and Black Colors",
// 
    // price: 70,
// 
    // imageUrl:
      // "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
// 
    // quantity: 1,
  // },
// ];
// 
const Cart = (props) => {
  let cartTotal=0;

//   const Email=localStorage.getItem('Email');

//   const E_mail=Email.replace('@','').replace('.','');
//   console.log(E_mail);

//  axios.get(`https://crudcrud.com/api/e5dae6a5f1ea443ba4b167509f1aa0a2/cart${E_mail}`).then(response=>{
//   console.log(response.data[0]);
//  })
 

  const cardcntx=useContext(Cartcontext);
  
  const items = cardcntx.items.map((itemss) => (
    <Cartitem
      title={itemss.title}
      price={itemss.price}
      imageurl={itemss.imageurl}
      quantity={itemss.quantity}
       id={itemss.id}
    />
  ));
  cardcntx.items.forEach((item)=>{
    let subtotal=0
      subtotal=item.quantity*item.price;
      cartTotal=cartTotal+subtotal;
})

  return(
    <div className="cart">
    <h3 className="cartName">
      Cart 
      <button className="btn btn-primary X" onClick={props.onclick}>
        X
      </button>
    </h3>
    <div className="container">
      <div className="row Header">
        <div className="col">
          <span>Item</span>
        </div>
        <div className="col">
          <span>Price</span>
        </div>
        <div className="col">
          <span>Quantity</span>
        </div>
        <div className="col">
          Total
        </div>
      </div>
    </div>
    {items}
     
       <div className="Total">TOTAL AMOUNT={cartTotal}</div>
       {/* <button >Place Order</button> */}
         
  </div>
  )
};

export default Cart;
