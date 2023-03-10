import "./options.scss";
import GameCard from "../GameCard/GameCard";
import Scissors from "../../assets/icon-scissors.svg";
import Rock from "../../assets/icon-rock.svg";
import Paper from "../../assets/icon-paper.svg";
import { useContext, useState } from "react";

import GameContext from "../../contexts/GameContext";
import ScoreContext from "../../contexts/ScoreContext";
export default function OptionsGame() {
  const options = ["Scissors", "Paper", "Rock"];
  const [choices, setChoices] = useContext(GameContext);
  const [counter, setCounter] = useState(0);
  const handleChoice = (e) => {
    const playerChoice = e.target.name;
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    if (gameLogic(playerChoice, computerChoice)) {
      console.log("win");
      console.log(counter);
      incrementCounter();
    }

    setChoices({
      ...choices,
      player: playerChoice,
      computer: computerChoice,
      reset: true,
    });
  };
  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
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

  return (
    <div className="backgroundGame">
      <ScoreContext.Provider value={counter}>
        <GameCard
          borderColor="containerIcon--BorderScissors"
          iconCard={Scissors}
          name="Scissors"
          click={handleChoice}
        />
        <GameCard
          borderColor="containerIcon--BorderPaper"
          iconCard={Paper}
          click={handleChoice}
          name="Paper"
        />
        <GameCard
          borderColor="containerIcon--BorderRock"
          iconCard={Rock}
          click={handleChoice}
          name="Rock"
        />
      </ScoreContext.Provider>
    </div>
  );
}
