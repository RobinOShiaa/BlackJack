
export type Color = 'red' | 'black';
export type Rank =  "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";
 
export class Card {
  get aCard() {
    return `${this.rank},${this.suit},${this.name},${this.colour}`
  }
  constructor 
  (
    public readonly rank : Rank,
    public readonly suit : string,
    public readonly name : string, 
    public readonly colour : Color
  ){}
}
