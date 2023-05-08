import "./score.scss";

export default function Score(props) {
  return (
    <div className="score">
      <div className="score--describ">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <div className="score--describ score--describ__spots">
        <span className="score--spots">Score</span>
        <span className="score--scoreboard">{props.count}</span>
      </div>
    </div>
  );
}
