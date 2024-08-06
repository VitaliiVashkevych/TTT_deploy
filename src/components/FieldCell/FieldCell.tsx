import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./FieldCell.css";

interface FieldCell {
  cell: string | null,
  index: number
}

export const FieldCell: React.FC<FieldCell> = ({ cell, index }) => {
  const { handle, win, styleComb } = useContext(AppContext) as AppContext;

  return (
    <div
      className="field__cell"
      onClick={() => {
        handle(index);
      }}
      key={index}
      style={win && styleComb.includes(index) ? { color: "red" } : {}}
    >
      {cell}
    </div>
  );
};
