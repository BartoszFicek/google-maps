import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";

import { createStore } from "redux";

const INITIAL_STATE = {
  points: [],
  places: []
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === "ADD_POINT") {
    return { ...state, points: state.points.concat([action.payload.point]) };
  } else if (action.type === "ADD_TO_LIST") {
    state.points.map(point => point.marker.setMap(null));
    return { points: [], places: state.places.concat(action.payload.points) };
  } else if (action.type === "DELETE_FROM_LIST") {
    return {
      ...state,
      places: state.places.filter(
        item =>
          item.lat !== action.payload.lat && item.lng !== action.payload.lng
      )
    };
  }

  return state;
}

export function addPoint(point) {
  return { type: "ADD_POINT", payload: { point } };
}
export function addToList(points) {
  return { type: "ADD_TO_LIST", payload: { points } };
}
export function deleteFromList(lat, lng) {
  return { type: "DELETE_FROM_LIST", payload: { lat, lng } };
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
