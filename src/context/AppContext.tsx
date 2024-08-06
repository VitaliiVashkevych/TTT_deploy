import { createContext, Dispatch, SetStateAction, useReducer, useState } from "react";

export interface AppContext {
  cells: string[] | null[];
  check: () => boolean;
  handle: (index: number) => void;
  win: boolean;
  PLAYER_X: string;
  PLAYER_O: string;
  player: string;
  setPlayer: Dispatch<SetStateAction<string>>;
  setWin: Dispatch<SetStateAction<boolean>>;
  mark: (index: number) => string[] | null[] | undefined;
  styleComb: number[];
  restart: () => void;
}

export const AppContext = createContext<AppContext | null>(null);

interface Props {
  children: React.ReactNode;
}

const cells = Array(9).fill(null);
const PLAYER_X = "X";
const PLAYER_O = "O";

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [styleComb, setStyleComb] = useState([] as number[]);
  const [win, setWin] = useState(false);
  const [player, setPlayer] = useState(PLAYER_X);
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  function check() {
    const combs = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const comb of combs) {
      if (
        cells[comb[0]] === cells[comb[1]] &&
        cells[comb[1]] === cells[comb[2]] &&
        cells[comb[0]] !== null
      ) {
        setStyleComb(comb);
        return true;
      }
    }
    return false;
  }

  function restart() {
    for (let i = 0; i < cells.length; i++) {
      cells[i] = null;
    }

    setPlayer(PLAYER_X);
    
    setWin(false);

    forceUpdate();

    return cells;
  }

  const handle = (index: number) => {
    mark(index);
    const winner = check();

    setWin(winner);
  };

  function mark(index: number) {
    if (win) {
      return;
    }

    if (!cells[index]) {
      cells[index] = player;
      if (player === PLAYER_X) {
        setPlayer(PLAYER_O);
      } else {
        setPlayer(PLAYER_X);
      }
    }

    return cells;
  }

  const contextValue = {
    cells,
    check,
    handle,
    win,
    PLAYER_X,
    PLAYER_O,
    player,
    setPlayer,
    setWin,
    mark,
    styleComb,
    restart
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
