import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./info.json";
import _ from 'lodash';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    score: 0,
    cards,
  };

  shuffleCards = () => {
    //use lodash to shuffle the cards array, and set it back to cards
    //Do I need to clone the cards info, to not mess with the original?
    const cards = _.shuffle(this.state.cards)
    console.log(cards);
    // Set this.state.cards equal to the new shuffled cards array
    this.setState({ cards });
  }; 


  clickCard = id => {
    //find which card is clicked
    console.log("clicked: ", id)
    const clickedCard = this.state.cards.filter(card => card.id === id);

    //if clicked card is true 
      // end game

    //if clicked is false 
      //set to true

    
    
    
    // Set this.state.friends equal to the new friends array
    this.setState({ cards });
  };

  // game state
  
  

  // Map over this.state.cards and render a Card component for each card object
  render() {
    console.log("Outside The Return: ", cards);

    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {
        // let newCards = _.(this.state.cards)
        this.state.cards.map(card => (
          <Card
            clickCard = {this.clickCard}
            id={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
