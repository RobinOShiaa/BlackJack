import { CardModel, Rank, Suit } from "./card.model";
import { House } from "./house.model";
import { Player } from "./player.model";

export class Deck {
  private RANKS : string[] =  ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  private SUITS = ["S","C","H","D"]
  _deck : CardModel [] = []; 
  constructor() {
  }
  printAllCards () {
    this._deck.forEach((card => console.log(card.aCard)));
  }

  createDeck() {
    this.RANKS.forEach((r) => {
      const rank = r as Rank;
      this.SUITS.forEach(sym => {
        const suit = sym as Suit;    
        this._deck.push(new CardModel(rank,suit));
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

  public getInitialCards = (player : Player | House): [CardModel, CardModel] => {
    const firstCard =  this._deck.pop()!;
    if(player instanceof House) {
      const secondCard : CardModel = this._deck.pop()!;
      secondCard.hidden = true;
      return [firstCard, secondCard];
    } else {
      return [firstCard, this._deck.pop()!];
    }

  }

  
  public dealCard = (): CardModel => this._deck.pop()!;
  
}