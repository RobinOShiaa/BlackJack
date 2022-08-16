import { Card,Rank,Color } from "./card.model";

export class Game {

  private RANKS : string[] =  ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  private SYMBOLS = [
    { symbol: "♠", name: "spade", colour: "black" },
    { symbol: "♣", name: "club",  colour: "black" },
    { symbol: "♥", name: "heart", colour: "red" },
    { symbol: "♦", name: "diamond", colour: "red" }];
  deck : Card [] = []; 
  inPlay : Boolean = false
  startBet : Boolean = true;
  pool : number = 0;
  tie : Boolean = false;
  houseWins : Boolean = false;
  playerWins : Boolean = false;
  houseBust : Boolean = false;
  playerBust : Boolean = false;
  blackJack : Boolean = false;

  constructor() {
    this.start()
  }

  private printAllCards () {
    this.deck.forEach((card => console.log(card.aCard)));
  }
  
  private start() {
    this.createDeck();
    this.printAllCards();
    this.shuffleDeck();
  }

  private createDeck() {
    this.RANKS.forEach((r) => {
      const rank = r as Rank;
      this.SYMBOLS.forEach(sym => {
        const {symbol,name,colour} = sym;  
        const color = colour as Color;    
        this.deck.push(new Card(rank,symbol,name,color));
      })
    })
  }

  private shuffleDeck = () => {
    let i = this.deck.length;
    let shuffled = Object.assign([], this.deck);
    while (--i > 0) {
      let rInd = Math.floor(Math.random() * (i + 1));
      [shuffled[rInd], shuffled[i]] = [shuffled[i], shuffled[rInd]];
    }
    this.deck = shuffled;
  
}
}