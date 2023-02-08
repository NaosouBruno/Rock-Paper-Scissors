import { useState } from "react";
import OptionsGame from "./components/OptionsGame/OptionsGame";
import GameCard from "./components/GameCard/GameCard";
/* import Game from "./components/pages/Game";
import Home from "./components/pages/Home"; */
import Score from "./components/Score/Score";

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
              <GameCard />
              You Picked
              {gameOptions.player}
            </div>
            <div>
              <GameCard />
              The House Picked
            </div>
          </div>
        ) : (
          <>
            <OptionsGame /* gameChoices={handleGameOptions} */ />
            {gameOptions.player}
          </>
        )}
      </GameContext.Provider>
    </div>
  );
}

export default App;
