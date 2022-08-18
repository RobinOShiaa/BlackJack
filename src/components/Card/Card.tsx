import React from 'react';

export const Card : React.FC<any> = ({rank,suit}) => {
  console.log(rank,suit);
  console.log(`./cards/${rank}-${suit}.png`);
  return (
  <div className="card">
      <img src= {`./cards/${rank}-${suit}.png`} alt=""/>
  </div>
  );
}