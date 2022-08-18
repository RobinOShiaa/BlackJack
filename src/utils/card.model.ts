
export type Suit = 'S' | 'D' | 'H' | 'C';
export type Rank =  "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";
 
export class CardModel {
  
  get aCard() {
    return `${this.rank}-${this.suit}`
  }
  constructor 
  (
    public readonly rank : Rank,
    public readonly suit : Suit,
    public hidden: Boolean = false,
    
  ){}


  
}
