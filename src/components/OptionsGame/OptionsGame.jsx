import "./options.scss";
import GameCard from "../GameCard/GameCard";
import Scissors from "../../assets/icon-scissors.svg";
import Rock from "../../assets/icon-rock.svg";
import Paper from "../../assets/icon-paper.svg";

export default function OptionsGame(props) {
  return (
    <div className="backgroundGame">
      <GameCard
        borderColor="containerIcon--BorderScissor"
        iconCard={Scissors}
      />
      <GameCard borderColor="containerIcon--BorderPaper" iconCard={Paper} />
    </div>
  );
}
