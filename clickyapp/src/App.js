import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./info.json";
import _ from 'lodash';

let score = 0;
let topScore = 0;
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    score: 0,
    topScore: 0,
    cards,
  };

  shuffleCards = cards => {
    console.log("shuffle cards function: ", cards);

    //use lodash to shuffle the cards array, and set it back to cards
    //Do I need to clone the cards info, to not mess with the original?
     const shuffledCards = _.shuffle(cards)
     cards = shuffledCards
     console.log("shuffled cards: ", cards);

    // Set this.state.cards equal to the new shuffled cards array
    this.setState({ cards });
  }; 


  clickCard = id => {

    //find which card is clicked
    console.log("clicked ID: ", id)
    //find the card that was clicked
    const clickedCard = this.state.cards.filter(card =>  card.id === id );
    console.log("clicked card: ", clickedCard)

    console.log("Score: ", score);
    console.log("cards.size: ", cards.length)
    //if clicked card is true 
    if(clickedCard[0].clicked){
      console.log("clicked card is true")
            // end game
      console.log("You Lose")
    }

    else if(score < cards.length) {
      console.log("clicked card is false")
      console.log("id passed in ",id)

      const clickedCardId = id
      
      console.log("This is the card we clicked: ", clickedCard)
      console.log("This is the corresponding card in cards: " , cards[clickedCardId])
      // set Card clicked to true
      clickedCard.clicked = true;
      console.log("clicked card should now be true: " ,clickedCard.clicked)
      // increment score
      score++;
      console.log(score)

      if(score > topScore){
        // set topScore = score increment is always one behind
        topScore = score;
        console.log("Incrementing top score: ", topScore);
        this.setState({topScore})
        console.log("state topScore?: ", this.state.topScore)
      }

        //shuffle images
        this.shuffleCards(cards );
    
        //set new state for cards and score
        this.setState({score})
    }

    
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
            key={card.id}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
