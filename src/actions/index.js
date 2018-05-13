import { ADD_PLAYER } from "../constants/action-types";
import { REMOVE_PLAYER } from "../constants/action-types";

export const addPlayer = player => ({ type: "ADD_PLAYER", payload: player });
export const removePlayer = player => ({ type: "REMOVE_PLAYER", payload: player });