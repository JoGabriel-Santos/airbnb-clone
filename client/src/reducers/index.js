import { combineReducers } from "redux";

import authData from "./auth";
import rooms from "./rooms";

export const reducers = combineReducers({ authData, rooms });