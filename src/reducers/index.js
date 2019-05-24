import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED } from "../actions/types";

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionExpanded: false
};

const rootReducer = (state = DEFAULT_SETTINGS, action) => {
  console.log("state", state, "action", action);

  switch (action.type) {
    case SET_GAME_STARTED:
      return { ...state, gameStarted: action.gameStarted };
    case SET_INSTRUCTIONS_EXPANDED:
      return { ...state, instructionExpanded: action.instructionExpanded };
    default:
      return state;
  }
};

export default rootReducer;
