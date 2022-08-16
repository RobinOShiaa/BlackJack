import { Card } from "./card.model";

export class Player {
  canSplit : Boolean = false;
  hand : Card[] = [];
  bank : number = 1000;
  score : number = 0;
  isBlackJack : Boolean = false
  constructor() {
  }
}