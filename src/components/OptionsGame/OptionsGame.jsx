import "./options.scss";
import GameCard from "../GameCard/GameCard";
import Scissors from "../../assets/icon-scissors.svg";
export default function OptionsGame(props) {
  return (
    <div className="backgroundGame">
      <GameCard
        borderColor="containerIcon--BorderScissor"
        iconCard={Scissors}
      />
    </div>
  );
}
