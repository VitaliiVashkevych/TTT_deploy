import "./App.css";
import { Field } from "./components/Field/Field";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <div className="app">
        <h1 className="app__title">TicTacToe</h1>

        {/* <div className="gameMode">
        <p>Game Mode:</p>
        <select name="gameMode" id="gameMode" disabled>
          <option value="vsHuman">Player vs. Player</option>
          <option value="vsComputer">Player vs. Computer</option>
        </select>
      </div>

      <div className="settings">
        <p>Choose difficulty:</p>
        <select name="Choose difficulty" id="difficulty" disabled>
          <option value="Easy">Easy</option>
          <option value="Hard">Hard</option>
        </select>
      </div> */}

        <Field />
      </div>
    </AppContextProvider>
  );
}

export default App;
