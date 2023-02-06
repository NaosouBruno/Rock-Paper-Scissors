import { useState } from "react";
import Game from "./components/pages/Game";
import Home from "./components/pages/Home";

function App() {
  const [letsPlay, setLetsPlay] = useState(false);
  return <div className="main">{letsPlay ? <Game /> : <Home />}</div>;
}

export default App;
