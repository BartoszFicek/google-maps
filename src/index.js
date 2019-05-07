import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";

import { createStore } from "redux";

const INITIAL_STATE = {
  points: []
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === "ADD_POINT") {
    return { points: state.points.concat([action.payload]) };
  }

  return state;
}

export function addPoint(point) {
  return { type: "ADD_POINT", payload: { point } };
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
