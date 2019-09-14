import { combineReducers } from "redux";
import { nextLaunch } from "./nextLaunch";
import { monthLaunch } from "./monthLaunch";
import { rockets } from "./rockets";
import { missions } from "./missions";
import { companies } from "./companies";

const rootReducer = combineReducers({
  nextLaunch, 
  monthLaunch,
  rockets,
  missions,
  companies
})

export default rootReducer;