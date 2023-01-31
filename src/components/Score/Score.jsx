import "./score.scss";

export default function Score() {
  return (
    <div className="score">
      <div className="score--describ">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <div className="score--spots">
        <span>Score</span>
        <span>12</span>
      </div>
    </div>
  );
}
