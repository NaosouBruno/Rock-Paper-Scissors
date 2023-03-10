import "./options.scss";
import GameCard from "../GameCard/GameCard";
import Scissors from "../../assets/icon-scissors.svg";
import Rock from "../../assets/icon-rock.svg";
import Paper from "../../assets/icon-paper.svg";
import { useContext, useState } from "react";

import GameContext from "../../contexts/GameContext";
export default function OptionsGame() {
  const options = ["Scissors", "Paper", "Rock"];
  const [choices, setChoices] = useContext(GameContext);
  const [counter, setCounter] = useState(0);
  const handleChoice = (e) => {
    const playerChoice = e.target.name;
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    setChoices({
      ...choices,
      player: playerChoice,
      computer: computerChoice,
      reset: true,
    });
  };

  return (
    <div className="backgroundGame">
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
    </div>
  );
}
