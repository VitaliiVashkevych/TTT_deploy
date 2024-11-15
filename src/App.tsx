import "./App.css";
import { Field } from "./components/Field/Field";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <div className="app">
        <h1 className="app__title">TicTacToe</h1>

        <Field />
      </div>
    </AppContextProvider>
  );
}

export default App;
