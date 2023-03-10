import { useState, useEffect } from "react";
import OptionsGame from "./components/OptionsGame/OptionsGame";
import GameCard from "./components/GameCard/GameCard";

import Score from "./components/Score/Score";
import "./styles/game.scss";
import GameContext from "./contexts/GameContext";

function App() {
  const [gameOptions, setGameOptions] = useState({
    player: "",
    computer: "",
    reset: false,
  });

  useEffect(() => {
    /*  console.log("teste"); */
  }, [gameOptions.reset]);

  return (
    <div className="main">
      <GameContext.Provider value={[gameOptions, setGameOptions]}>
        <Score />
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

            <button
              onClick={() => setGameOptions({ ...gameOptions, reset: false })}
            >
              Again
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
