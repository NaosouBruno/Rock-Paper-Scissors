import { useState } from "react";
import OptionsGame from "./components/OptionsGame/OptionsGame";
import Game from "./components/pages/Game";
import Home from "./components/pages/Home";
import Score from "./components/Score/Score";

function App() {
  const [letsPlay, setLetsPlay] = useState(false);
  const handleGameOptions = (options) => {
    console.log(options);
  };
  /* return <div className="main">{letsPlay ? <Game /> : <Home />}</div>; */
  return (
    <div className="main">
      <Score />
      {letsPlay ? <Game /> : <OptionsGame gameChoices={handleGameOptions} />}
    </div>
  );
}

export default App;
