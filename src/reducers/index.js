import { combineReducers } from "redux";
import SelectedPointsReducer from "./SelectedPointsReducer";

export default combineReducers({ points: SelectedPointsReducer });
