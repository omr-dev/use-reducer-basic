import "./App.scss";
import { useReducer } from "react";
const initialState = {
  number: 0,
  lastAction: "",
  numberOfClicks: 0,
  lastClick: "",
};
const reducer = (state, action) => {
 
  let result = { ...state };
  switch (action) {
    case "add":
      result.number++;
      result.lastAction = "increment";
      break;
    case "subtract":
      result.number--;
      result.lastAction = "decrement";
      break;
    case "reset":
      result.number = 0;
      result.lastAction = "reset";
      break;
    default:
      throw new Error("Unhandled action");
  }
  result.numberOfClicks++;
  result.lastClick = new Date().toLocaleString();
  return result;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>useReducer() Basic</h1>
      <h2>Number: {state.number}</h2>

      <div className="buttons">
        <button
          onClick={() => {
            dispatch("subtract");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch("add");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch("reset");
          }}
        >
          Reset
        </button>
      </div>
      <div className="result">
        <ul>
          <li>Last action: {state.lastAction}</li>
          <li>Number of clicks: {state.numberOfClicks}</li>
          <li>Last click: {state.lastClick}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
