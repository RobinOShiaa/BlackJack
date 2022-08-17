import { CardModel } from "./card.model";
import { PlaysGame } from "./playsGame.model";


export class House extends PlaysGame {
  constructor () {
    super()
  } 
  revealCard = () => {
    this.hand.filter((card: CardModel) => {
      if (card.hidden === true) {
        card.hidden = false;
      }
      return card;
    });
    // setDealerCards([...dealerCards])
  }  
} 
