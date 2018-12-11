import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./info.json";
import _ from 'lodash';


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards
  };

  removeCard = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const cards = this.state.cards.filter(card => card.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ cards });
  }; 

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log("Friends: ", cards);
    let newCards = _.shuffle(cards)

    console.log("Shuffle Friends: ", newCards);

    return (
      <Wrapper>
        <Title>Clicky Game</Title>

        {
        // let newCards = _.(this.state.cards)
        this.state.cards.map(card => (
          <Card
            removeFriend={this.removeCard}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            occupation={card.occupation}
            location={card.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
