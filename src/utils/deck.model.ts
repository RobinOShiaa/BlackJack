import { Card, Color, Rank } from "./card.model";

export class Deck {
  private RANKS : string[] =  ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  private SYMBOLS = [
    { symbol: "♠", name: "spade", colour: "black" },
    { symbol: "♣", name: "club",  colour: "black" },
    { symbol: "♥", name: "heart", colour: "red" },
    { symbol: "♦", name: "diamond", colour: "red" }];
  _deck : Card [] = []; 
  constructor() {
  }
  printAllCards () {
    this._deck.forEach((card => console.log(card.aCard)));
  }

  createDeck() {
    this.RANKS.forEach((r) => {
      const rank = r as Rank;
      this.SYMBOLS.forEach(sym => {
        const {symbol,name,colour} = sym;  
        const color = colour as Color;    
        this._deck.push(new Card(rank,symbol,name,color));
      })
    })
  }

  shuffleDeck = () => {
    let i = this._deck.length;
    let shuffled = Object.assign([], this._deck);
    while (--i > 0) {
      let rInd = Math.floor(Math.random() * (i + 1));
      [shuffled[rInd], shuffled[i]] = [shuffled[i], shuffled[rInd]];
    }
    this._deck = shuffled;
  }

  public getInitialCards = (): [Card, Card] => [
    this._deck.pop()!,
    this._deck.pop()!
  ];

  public dealCard = (): Card => this._deck.pop()!;

}