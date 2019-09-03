import React from "react";
import reducers from "./reducers/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Teste</h1>
      </div>
    </Provider>
  );
}

export default App;
