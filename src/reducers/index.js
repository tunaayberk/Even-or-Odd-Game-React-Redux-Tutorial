import { combineReducers } from "redux";
import settingsReducer from "./settings";
import deckReducer from "./deck";

export default combineReducers({
  settings: settingsReducer,
  deck: deckReducer
});
