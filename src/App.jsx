import { useState, useEffect, useRef } from "react";
import OptionsGame from "./components/OptionsGame/OptionsGame";
import GameCard from "./components/GameCard/GameCard";

import Score from "./components/Score/Score";
import "./styles/game.scss";
import GameContext from "./contexts/GameContext";

const initialState = {
  player: "",
  computer: "",
  reset: false,
};

function App() {
  const [gameOptions, setGameOptions] = useState(initialState);
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (
      gameLogic(gameOptions.player, gameOptions.computer) &&
      countRef.current === 0
    ) {
      setCount((count) => count + 1);
      countRef.current = 1;
    }
  }, [gameOptions.reset]);

  const gameLogic = (player, computer) => {
    if (player === computer) {
      return false;
    } else if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleReset = () => {
    setGameOptions(initialState);
    countRef.current = 0;
  };

  return (
    <div className="main">
      <GameContext.Provider value={[gameOptions, setGameOptions]}>
        <Score count={count} />
        {gameOptions.reset ? (
          <>
            <div className="game">
              <div className="game--Typography game--Picked">
                <GameCard
                  borderColor={`containerIcon--Border${gameOptions.player} 
                  containerIcon--Border${gameOptions.player}__gameBattle`}
                  iconCard={`/src/assets/icon-${gameOptions.player.toLocaleLowerCase()}.svg`}
                  name={gameOptions.player}
                />
                You Picked
              </div>
              <div className="game--Typography game--Picked">
                <GameCard
                  borderColor={`containerIcon--Border${gameOptions.computer} 
                  containerIcon--Border${gameOptions.computer}__gameBattle`}
                  iconCard={`/src/assets/icon-${gameOptions.computer.toLocaleLowerCase()}.svg`}
                  name={gameOptions.computer}
                />
                The House Picked
              </div>
            </div>

            <button className="game--playAgain" onClick={handleReset}>
              Play Again
            </button>
          </>
        ) : (
          <>
            <OptionsGame />
          </>
        )}
      </GameContext.Provider>
      <button className="game--Typography game--Rules">Rules</button>
    </div>
  );
}

export default App;
