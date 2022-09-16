import { Link } from "react-router-dom";
import axios from "axios";
import React, { useContext } from "react";
import "./Productlist.css";
import Cartcontext from "./Store/Cart-context";
//import AuthContext from "./Store/Auth-Context";
const ProductList = (props) => {
  const cartctx = useContext(Cartcontext);
  //const authcntx=useContext(AuthContext);

  const Email = localStorage.getItem("Email");

  const E_mail = Email.replace("@", "").replace(".", "");
  const additemstocarthandler = async () => {
    console.log(E_mail);
    let cart = cartctx.additems({ ...props, quantity: 1 });

    console.log(cart);

    await axios
      .post(
        `https://crudcrud.com/api/81cd3bfff3af40238564cbbe25bd44fd/cart${E_mail}`,
        {
          cart: cart,
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
