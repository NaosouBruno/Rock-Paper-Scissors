import "./options.scss";
import GameCard from "../GameCard/GameCard";
import Scissors from "../../assets/icon-scissors.svg";
import Rock from "../../assets/icon-rock.svg";
import Paper from "../../assets/icon-paper.svg";
import { useState } from "react";

/* Passar para o componente APP as seguintes informações: escolha do player e escolha do computador */
export default function OptionsGame({ gameChoices }) {
  const options = ["Scissors", "Paper", "Rock"];
  const [gameOptions, setGameOptions] = useState({
    player: "",
    computer: "",
  });
  const randleChoice = (e) => {
    const playerChoice = e.target.name;
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    setGameOptions({
      ...gameOptions,
      ["player"]: playerChoice,
      ["computer"]: computerChoice,
    });
    gameChoices(gameOptions);
    /*  console.log(gameOptions); */
  };
  return (
    <div className="backgroundGame">
      <GameCard
        borderColor="containerIcon--BorderScissor"
        iconCard={Scissors}
        name="Scissors"
        click={randleChoice}
      />
      <GameCard
        borderColor="containerIcon--BorderPaper"
        iconCard={Paper}
        click={randleChoice}
        name="Paper"
      />
      <GameCard
        borderColor="containerIcon--BorderRock"
        iconCard={Rock}
        click={randleChoice}
        name="Rock"
      />
    </div>
  );
}
