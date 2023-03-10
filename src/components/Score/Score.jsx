import "./score.scss";
import { useContext } from "react";
import ScoreContext from "../../contexts/ScoreContext";
export default function Score() {
  const counter = useContext(ScoreContext);
  return (
    <div className="score">
      <div className="score--describ">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <div className="score--describ score--describ__spots">
        <span className="score--spots">Score</span>
        <span className="score--scoreboard">{counter}</span>
      </div>
    </div>
  );
}
