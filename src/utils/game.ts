import { CardModel } from "./card.model";
import { Deck } from "./deck.model";
import { House } from "./house.model";
import { Player } from "./player.model";

export class Game extends Deck {
  constructor(public numOfPlayers : (Player | House) []) {
    super();
    this.start()
  }
  private start() {
    this.createDeck();
    this.printAllCards();
    this.shuffleDeck();
    this.numOfPlayers.forEach((player : Player | House) => {
      player.hand = this.getInitialCards(player);
      console.log(player.cards);
    })
  }
  calculateScore = (cards : CardModel[]) => {
    let aces = 0;
    let total = cards.reduce((t, card) => {
        switch(card.rank) {
            case("K"): return t + 13;
            case("Q"): return t + 12;
            case("J"): return t + 11;
            case("A"): aces+=1; return t + 1;
            default: return t + parseInt(card.rank!); 
        }
    }, 0);
    if (aces > 0 && total + 10 <= 21) total += 10;
    return total;
  }
  isBlackJack = (cards : CardModel[]) => {
    // edge case for non-initial move
    if (cards.length === 2) {
        const ranks = cards.map(card => card.rank);
        return ranks.includes("A") && ranks.filter(val => ["Q", "K"].includes(val)).length > 0
    }
    return false;
  }
  isBust = (score : number) => score > 21;
} 
