import { ADD_PLAYER } from "../constants/action-types";
import { REMOVE_PLAYER } from "../constants/action-types";
const initialState = {
  players: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
    return { ...state, players: [...state.players, action.payload] };
    case REMOVE_PLAYER:
      return Object.assign({}, state, {
        players: [
          ...(state.players.filter(players => (players.id !== action.payload.id))), 
        ]});
    default:
      return state;
  }
};
export default rootReducer;