import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const timesClicked = useSelector(state => state.timesClicked);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Numero de cliques</h1>
      <h1>{timesClicked}</h1>
      <button onClick={() => dispatch({ type: "TIMES_CLICKED" })}>
        Clique
      </button>
    </div>
  );
}

export default App;
