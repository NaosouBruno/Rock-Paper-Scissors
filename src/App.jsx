import { useState } from "react";
import OptionsGame from "./components/OptionsGame/OptionsGame";
import GameCard from "./components/GameCard/GameCard";
/* import Game from "./components/pages/Game";
import Home from "./components/pages/Home"; */

import Scissors from "/src/assets/icon-scissors.svg";

import Score from "./components/Score/Score";
import "./styles/game.scss";
import GameContext from "./contexts/GameContext";

function App() {
  const [letsPlay, setLetsPlay] = useState(false);
  const [gameOptions, setGameOptions] = useState({
    player: "",
    computer: "",
  });
  const handleGameOptions = () => {
    console.log(gameOptions);
  };

  return (
    <div className="main">
      <GameContext.Provider value={[gameOptions, setGameOptions]}>
        <Score />
        {gameOptions.player.length ? (
          <div className="game">
            <div className="game--Picked">
              <GameCard
                borderColor={`containerIcon--Border${gameOptions.player}`}
                iconCard={`/src/assets/icon-${gameOptions.player.toLocaleLowerCase()}.svg`}
                name={gameOptions.player}
                /* click={randleChoice} */
              />
              You Picked
            </div>
            <div>
              <GameCard
                borderColor={`containerIcon--Border${gameOptions.computer}`}
                iconCard={`/src/assets/icon-${gameOptions.computer.toLocaleLowerCase()}.svg`}
                name={gameOptions.computer}
              />
              The House Picked
            </div>
          </div>
        ) : (
          <>
            <OptionsGame /* gameChoices={handleGameOptions} */ />
          </>
        )}
      </GameContext.Provider>
    </div>
  );
}

export default App;
