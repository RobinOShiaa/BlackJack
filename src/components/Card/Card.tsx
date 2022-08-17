import React from 'react';
import { CardModel, Rank, Suit } from '../../utils/card.model';

export const Card : React.FC<any> = ({rank,suit}) => {
  console.log(`./cards/${rank}-${suit}.png`);
  return (
  <div className="card">
      <img src= {`./cards/${rank}-${suit}.png`} alt=""/>
  </div>
  );
}