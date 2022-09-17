import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "./Productlist.css";
import Cartcontext from "./Store/Cart-context";
//import AuthContext from "./Store/Auth-Context";
const ProductList = (props) => {
  const cartctx = useContext(Cartcontext);
  //const authcntx=useContext(AuthContext);

  const Email = localStorage.getItem("Email");

  const E_mail = Email.replace("@", "").replace(".", "");
  const additemstocarthandler =() => {
    console.log(E_mail);
    let cart = cartctx.additems({ ...props, quantity: 1 });
    console.log(cart);
      fetch(`https://newecommerce-ad44d-default-rtdb.firebaseio.com/cart${E_mail}.json`,
        {
          method: 'POST',
        body:JSON.stringify({ 
          cart: cart,
          }),
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <ul className="products" id={props.id}>
        <div>
          <Link to={`/store/${props.id}`}>
            <h3> {props.title}</h3>
            <img src={props.imageurl} alt="music1"></img>
          </Link>
          <div></div>
          <div>
            <span>
              <span>{props.price}</span>
            </span>
          </div>
        </div>

        <button
          className="button"
          type="button"
          onClick={additemstocarthandler}
        >
          ADD TO CART
        </button>
      </ul>
    </React.Fragment>
  );
};

export default ProductList;
