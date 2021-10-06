import React from "react";
import "./style.css";

function Photocard(props) {
  const captionString =
    props.data.title + ", " + props.data.description + ", " + props.data.price;
  return (
    <div className="row">
      <div id="divv">
        <img id="photo" src={props.data.photo}></img>
        <p id="caption">{captionString}</p>
      </div>
    </div>
  );
}

export default Photocard;
