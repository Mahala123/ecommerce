import React, { useContext } from "react";
import "./CartItem.css";
import Cartcontext from "../Store/Cart-context";
const Cartitem = (props) => {
  const cardcntx = useContext(Cartcontext);

  const removefromcart = () => {
    cardcntx.deleteitems(props.id);
  };
  const itemTotal = props.price * props.quantity;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <span>{props.title}</span>
          <img src={props.imageurl} alt="products" className="item"/>
        </div>
        <div className="col">
          <span>{props.price}</span>
        </div>
        <div className="col">
          <span>{props.quantity}</span>
        </div>
        <div className="col">
          <span>{itemTotal}</span>
          <button onClick={removefromcart}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
