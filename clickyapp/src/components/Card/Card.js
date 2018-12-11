import React, { Component } from "react";
import "./style.css";

class Card extends Component {

    state = {
        clicked: false
    }


    render() {
    return (
        <div className="card">
          <div className="img-container">
            <img alt={this.props.name} src={this.props.image} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Name:</strong> {this.props.name}
              </li>
              <li>
                <strong>Occupation:</strong> {this.props.occupation}
              </li>
              <li>
                <strong>Location:</strong> {this.props.location}
              </li>
            </ul>
          </div>
          <span onClick={() => this.props.shuffleCards(this.props.id)} className="remove">𝘅</span>
        </div>
      );
    
    }
}

export default Card;