import { CardModel } from "./card.model";


export class PlaysGame {
  hand : CardModel [] = [];
  isBlackJack: Boolean = false;
  points: number = 0;

  get cards(): Array<CardModel> {
    return this.hand
  }

  drawCard(card : CardModel) {
    this.hand.push(card);
  }
}
