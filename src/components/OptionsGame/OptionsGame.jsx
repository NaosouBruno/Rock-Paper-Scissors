import "./options.scss";
import GameCard from "../GameCard/GameCard";
import Scissors from "../../assets/icon-scissors.svg";
import Rock from "../../assets/icon-rock.svg";
import Paper from "../../assets/icon-paper.svg";

export default function OptionsGame() {
  const randleChoice = (e) => {
    const playerChoice = e.target.name;
    console.log(playerChoice);
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
