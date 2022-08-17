import { CardModel } from "./card.model";
import { Deck } from "./deck.model";
import { PlaysGame } from "./playsGame.model";

export class Player extends PlaysGame {
  bank : number = 0;
  canSplit: Boolean = false;

  constructor() {
    super();
  }


  makeBet (bet : number) {
    if((this.bank - bet) < 0) {
      console.log('ff');
    } else {
      this.bank -= bet;
    }
  }
}