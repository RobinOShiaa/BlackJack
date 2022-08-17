import React, {useState} from 'react';
import { Game } from './utils/game';
import { Player } from './utils/player.model';

const App: React.FC = () => {
  const p1 = new Player();
  const p2 = new Player();
  const p3 = new Player();


  const g = new Game([p1,p2,p3]);
  return (
    <div className="App">
    </div>
  );
}

export default App;
