import "./gamecard.scss";

export default function GameCard(props) {
  return (
    <div className={`containerIcon ${props.borderColor}`}>
      <img src={props.iconCard} />
    </div>
  );
}
