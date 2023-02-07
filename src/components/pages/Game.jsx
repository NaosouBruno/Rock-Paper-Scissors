import GameCard from "../GameCard/GameCard";
import Score from "../Score/Score";
import "../../styles/game.scss";
export default function Game(props) {
  const choices = () => {
    console.log("tela de vitoria");
  };
  /* receber o conteudo do player */
  return (
    <>
      {/*  <Score /> */}
      <div className="game">
        <div className="game--Picked">
          <GameCard borderColor={props.borderColor} iconCard={props.iconCard} />
          You Picked
        </div>
        <div>
          <GameCard />
          The House Picked
        </div>
      </div>
    </>
  );
}
