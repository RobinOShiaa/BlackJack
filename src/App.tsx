import React, {useState} from 'react';
import BackCard from './components/BackCard/BackCard';
import { Card } from './components/Card/Card';
import { CardModel, Rank, Suit } from './utils/card.model';
import { Game } from './utils/game';
import { House } from './utils/house.model';
import { Player } from './utils/player.model';


const App: React.FC = () => {
  const player1 = new Player();
  const player2 = new House();
  const game = new Game([player1, player2]);

  enum GameState {
    bet,
    init,
    userTurn,
    dealerTurn
  }


  enum Message {
    bet = 'Place a Bet!',
    hitStand = 'Hit or Stand?',
    bust = 'Bust!',
    userWin = 'You Win!',
    dealerWin = 'Dealer Wins!',
    tie = 'Tie!'
  }

  const [deck, setDeck]: any[] = useState(game._deck!);
  const [userCards, setUserCards]: any[] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const [userCount, setUserCount] = useState(0);

  const [dealerCards, setDealerCards]: any[] = useState([]);
  const [dealerScore, setDealerScore] = useState(0);
  const [dealerCount, setDealerCount] = useState(0);


  const [balance, setBalance] = useState(player1.bank);
  const [bet, setBet] = useState(0);

  const [gameState, setGameState] = useState(GameState.bet);
  const [message, setMessage] = useState(Message.bet);
  const [buttonState, setButtonState] = useState({
    hitDisabled: false,
    standDisabled: false,
    resetDisabled: true
  });


  const placeBet = (player : Player,amount: number) => {
    setBet(amount);
    setBalance(Math.round((balance - amount) * 100) / 100);
    player.makeBet(amount);
    setGameState(GameState.init);
  }

 



  return (
    <div className="App">
      <div className="cardContainer">
        <h2>Dealer:</h2>
        <div id="dealer-cards" className="cards">
          {player2.hand.map(card => card.hidden ? <BackCard/> : <Card {...card}/>)}
        </div>
      </div>
      <div className="cardContainer">
        <h2>You: </h2>
        <div id="your-cards" className="cards">
          {player1.hand.map(card => <Card {...card}/>)}
        </div>
      </div>
      {/* <button id="hit">Hit</button>
      <button id="stay">Stay</button> */}
      <p id="results"></p>
    </div>
  );
}

export default App;
