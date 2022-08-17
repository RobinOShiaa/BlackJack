import React, {useState} from 'react';
import { Card } from './components/Card/Card';
import { CardModel } from './utils/card.model';
import { Game } from './utils/game';
import { Player } from './utils/player.model';


const App: React.FC = () => {
  const p1 = new Player();
  const p2 = new Player();

  const g = new Game([p1,p2]);
  return (
    <div className="App">
      <h2>Dealer:</h2>
        <div id="dealer-cards">
          <img src= "./cards/J-C.png" alt=""/>
          <img src="./cards/Back.png" alt=""/>

        </div>
        
      <h2>You: </h2>
        <div id="your-cards">
          <Card/>
          <Card/>

        </div>

      <button id="hit">Hit</button>
      <button id="stay">Stay</button>
      <p id="results"></p>
    </div>
  );
}

export default App;
