import React from "react";
import "./style.css";

const Card = props => (

        <div className="card">
          <div className="img-container">
            <img alt={props.name} src={props.image} />
          </div>
          <span onClick={() => props.clickCard(props.id)} className="remove">𝘅</span>
        </div>
);

export default Card;