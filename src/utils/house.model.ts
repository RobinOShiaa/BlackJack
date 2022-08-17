import { Card } from "./card.model";
import { PlaysGame } from "./playsGame.model";


export class House extends PlaysGame {
  showSecond: Boolean =  false;
  deck : Card [] = []; 

  set showTheSecond(value : Boolean) {
    this.showSecond = value;
  }
  constructor () {
    super()
  }

  
    
} 
