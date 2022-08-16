import { Card } from "./card.model";

class House {
  showSecond: Boolean =  false;
  deck : Card [] = []; 
  hand : Card [] = []; 
  score: number = 0;
  isBlackJack: Boolean = false;
  constructor () {
  }
}