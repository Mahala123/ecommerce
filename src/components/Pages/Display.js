import React from "react";
import "./Display.css";

const Display = (props) => {

  return (
    <React.Fragment>
      <h2>{props.title}</h2>
      <span>
        <h3>{props.releaseDate}</h3>
      
      </span>
      <li>
        <p>{props.openingdate}</p>
        <div>
          <button onClick={props.onDelete}>DELETE MOVIE</button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default Display;
