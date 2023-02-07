import { useState } from "react";
import OptionsGame from "./components/OptionsGame/OptionsGame";
import GameCard from "./components/GameCard/GameCard";
/* import Game from "./components/pages/Game";
import Home from "./components/pages/Home"; */
import Score from "./components/Score/Score";

function App() {
  const [letsPlay, setLetsPlay] = useState(false);
  const [gameOptions, setGameOptions] = useState({
    player: "",
    computer: "",
  });
  const handleGameOptions = (options) => {
    setLetsPlay(!letsPlay);
    setGameOptions({
      ...gameOptions,
      ["player"]: options.player,
      ["computer"]: options.computer,
    });
    console.log(gameOptions);
  };

  return (
    <div className="main">
      <Score />
      {letsPlay ? (
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
        <OptionsGame gameChoices={handleGameOptions} />
      )}
    </div>
  );
}

export default App;
