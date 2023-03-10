import React, { createContext } from "react";

const GameContext = createContext({
  player: "",
  computer: "",
  reset: false,
});

export default GameContext;
