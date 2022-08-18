import React, {useEffect, useState} from 'react';
import { convertToObject } from 'typescript';
import BackCard from './components/BackCard/BackCard';
import { Card } from './components/Card/Card';
import { CardModel, Rank, Suit } from './utils/card.model';
import { Game } from './utils/game';
import { House } from './utils/house.model';
import { Player } from './utils/player.model';
import { PlaysGame } from './utils/playsGame.model';


const App: React.FC = () => {
  const player = new Player();
  const dealer = new House();
  const game = new Game([player,dealer]);
  
  

  

  enum Turn {
    bet,
    start,
    userTurn,
    houseTurn
  }
  enum ToDeal {
    user,
    house,
  }

  enum Message {
    bet = 'Place a Bet!',
    hitStand = 'Hit or Stand?',
    bust = 'Bust!',
    userWin = 'You Win!',
    houseWin = 'house Wins!',
    tie = 'Tie!'
  }

  const [deck, setDeck]: any[] = useState(game._deck!);
  const [playerHand, setPlayerHand]: any[] = useState(player.hand);
  const [playerScore, setPlayerScore] = useState(0);
  const [playerCardCount, setPlayerCardCount] = useState(0);
  const [houseHand, setHouseHand]: any[] = useState(dealer.hand);
  const [houseScore, setHouseScore] = useState(0);
  const [houseCount, setHouseHandCount] = useState(0);


  const [balance, setBalance] = useState(player.bank);
  const [bet, setBet] = useState(0);

  const [turn, setTurn] = useState(Turn.bet);
  const [message, setMessage] = useState(Message.bet);
  const [buttonState, setButtonState] = useState({
    hitDisabled: false,
    standDisabled: false,
    resetDisabled: true
  });

  // const getStartingCards = (player : Player | House): [CardModel, CardModel] => {
  //   const firstCard : CardModel = game.dealDeckCard()!;
  //   if(player instanceof House) {
  //     const secondCard : CardModel = game.dealDeckCard()!;
  //     secondCard.hidden = true;
  //     setDeck(game._deck)
  //     setPlayerHand([firstCard, secondCard])
  //     return [firstCard, secondCard];
  //   } else {
  //     const secondCard : CardModel = game.dealDeckCard()!;
  //     setDeck(game._deck);
  //     setHouseHand([firstCard, secondCard])
  //     return [firstCard, secondCard!];
  //   }

  // }

  // getstartialCards(player);
  // getstartialCards(house);



  useEffect(() => {
    if (turn === Turn.start) {
      setTurn(Turn.userTurn);
      setMessage(Message.hitStand);
    }
  }, [turn]);

  useEffect(() => {
    setPlayerScore(game.calculateScore(playerHand));
    setPlayerCardCount(playerCardCount + 1);
  }, [playerHand]);

  useEffect(() => {
    setPlayerScore(game.calculateScore(houseHand));
    setHouseHandCount(houseCount + 1);
  }, [houseHand]);

  useEffect(() => {
    if (turn === Turn.userTurn) {
      if (playerScore === 21) {
        buttonState.hitDisabled = true;
        setButtonState({ ...buttonState });
      }
      else if (game.isBust(playerScore)) {
        bust();
      }
    }
  }, [playerCardCount]);

  useEffect(() => {
    if (turn === Turn.houseTurn) {
      if (houseScore >= 17) {
        checkWin();
      }
      else {
        dealer.drawCard(game.dealDeckCard());
        setDeck([...deck])
        setHouseHand([...dealer.hand])
      }
    }
  }, [houseCount]);

  const reset = () => {
    console.clear();
    game.start();
    setDeck(game._deck);

    setPlayerHand([]);
    setPlayerScore(0);
    setPlayerCardCount(0);

    setHouseHand([]);
    setHouseScore(0);
    setHouseHandCount(0);

    setBet(0);

    setTurn(Turn.bet);
    setMessage(Message.bet);
    setButtonState({
      hitDisabled: false,
      standDisabled: false,
      resetDisabled: true
    });
  }





  const placeBet = (player : Player,amount: number) => {
    setBet(amount);
    setBalance(Math.round((balance - amount) * 100) / 100);
    player.makeBet(amount);
    setTurn(Turn.start);
  }


  const dealCard = (plays : PlaysGame) => {
    if(plays instanceof Player) {
      plays.drawCard(game.dealDeckCard())
      setDeck([...game._deck])
      setPlayerHand([...plays.hand])
      console.log(playerHand);
    } else {
      plays.drawCard(game.dealDeckCard());
      console.log(game._deck.length);
      setDeck([...game._deck])
      setHouseHand([...plays.hand]);
    }
  }

  const hit = () => {
    dealCard(player);
  }

  
  const stand = () => {
    buttonState.hitDisabled = true;
    buttonState.standDisabled = true;
    buttonState.resetDisabled = false;
    setButtonState({ ...buttonState });
    setTurn(Turn.houseTurn);
    // revealCard();
  }

  const bust = () => {
    buttonState.hitDisabled = true;
    buttonState.standDisabled = true;
    buttonState.resetDisabled = false;
    setButtonState({ ...buttonState });
    setMessage(Message.bust);
  }

  const checkWin = () => {
    if (playerScore > houseScore || houseScore > 21) {
      setBalance(Math.round((balance + (bet * 2)) * 100) / 100);
      setMessage(Message.userWin);
    }
    else if (houseScore > playerScore) {
      setMessage(Message.houseWin);
    }
    else {
      setBalance(Math.round((balance + (bet * 1)) * 100) / 100);
      setMessage(Message.tie);
    }
  }



  return (
    <div className="App">
      <div className="cardContainer">
        <h2>house: {`${houseScore}`}</h2>
        <div id="house-cards" className="cards">
          {/* {dealerCards.map((card : any[]) => card.hidden ? <BackCard/> : <Card {...houseHand}/>)} */}
        </div>
      </div>
      <div className="cardContainer">
        <h2>You: {`${playerScore}`}</h2>
        <div id="your-cards" className="cards">
          {playerHand.map((card : CardModel[]) => <Card {...card}/>)}
        </div>
      </div>
      <button onClick={() => hit()} disabled={buttonState.hitDisabled}>Hit</button>
      <button onClick={() => stand()} disabled={buttonState.standDisabled}>Stand</button>
      <button onClick={() => reset()} disabled={buttonState.resetDisabled}>Reset</button>
      <p id="results"></p>
    </div>
  );
}

export default App;
