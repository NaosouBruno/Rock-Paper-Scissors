import React, { createContext } from "react";

const GameContext = createContext({
  player: "",
  computer: "",
});

export default GameContext;
