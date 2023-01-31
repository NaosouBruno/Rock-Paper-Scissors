import "./gamecard.scss";

export default function GameCard(props) {
  return (
    <button className={`containerIcon ${props.borderColor}`}>
      <img src={props.iconCard} onClick={props.click} name={props.name} />
    </button>
  );
}
