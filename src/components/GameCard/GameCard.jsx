import "./gamecard.scss";

export default function GameCard(props) {
  return (
    <button className={`containerIcon ${props.borderColor} ${props.class}`}>
      <img
        src={props.iconCard}
        className={props.imgClass}
        onClick={props.click}
        name={props.name}
      />
    </button>
  );
}
