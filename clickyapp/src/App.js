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

  shuffleCards = id => {
    //use lodash to shuffle the cards array, and set it back to cards
    //Do I need to clone the cards info, to not mess with the original?

    const cards = _.shuffle(this.state.cards)
    console.log(cards);
    // Set this.state.cards equal to the new shuffled cards array
    this.setState({ cards });
  }; 

  // Map over this.state.cards and render a Card component for each card object
  render() {
    // console.log("Cards: ", cards);


    return (
      <Wrapper>
        <Title>Clicky Game</Title>

        {
        // let newCards = _.(this.state.cards)
        this.state.cards.map(card => (
          <Card
            shuffleCards={this.shuffleCards}
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
