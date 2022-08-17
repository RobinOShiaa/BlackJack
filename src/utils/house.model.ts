import { CardModel } from "./card.model";
import { PlaysGame } from "./playsGame.model";


export class House extends PlaysGame {
  showSecond: Boolean =  false;
  deck : CardModel [] = []; 

  set showTheSecond(value : Boolean) {
    this.showSecond = value;
  }
  constructor () {
    super()
  }

  
    
} 
