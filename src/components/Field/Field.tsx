import { useContext } from "react";
import "./Field.css";
import { FieldCell } from "../FieldCell/FieldCell";
import { AppContext } from "../../context/AppContext";


export const Field: React.FC = () => {
  const { cells, win, player, PLAYER_X, PLAYER_O, restart } = useContext(AppContext) as AppContext;

  return (
    <>
      {!win && cells.some((cell) => !cell ) && <div className="field__title">{player}'s turn</div>}

      {win && <div className="field__title">Winner: {player === PLAYER_X ? PLAYER_O : PLAYER_X} player!</div>}

      {!win && cells.every((cell) => cell !== null) && <div className="field__title">Draw!</div>}

      <div className="field">
        {cells.map((cell, index) => {
          return (
            <FieldCell cell={cell} index={index} key={index}/>
          );
        })}
      </div>

      <button onClick={restart} className="restart">Restart</button>
    </>
  );
};
