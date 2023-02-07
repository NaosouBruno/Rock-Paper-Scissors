import GameCard from "../GameCard/GameCard";
import Score from "../Score/Score";
import "../../styles/game.scss";
export default function Game({ playerChoice }) {
  /* receber o conteudo do player */
  return (
    <>
      {/*  <Score /> */}
      <div className="game">
        <div className="game--Picked">
          <GameCard />
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
