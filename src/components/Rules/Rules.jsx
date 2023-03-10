import "./rules.scss";
import RulesImg from "../../assets/image-rules.svg";
import IconClose from "../../assets/icon-close.svg";
export default function Rules(props) {
  const handleCloseRules = () => {
    props.onCloseModal();
  };
  return (
    <div className="rulesContainer">
      <div>
        <h2 className="rulesContainer--title">Rules</h2>
      </div>
      <div>
        <img src={RulesImg} />
      </div>
      <div>
        <button
          onClick={handleCloseRules}
          className="rulesContainer--buttonClose"
        >
          <img src={IconClose} />
        </button>
      </div>
    </div>
  );
}
