import { combineReducers } from "redux";
import location from "./location";

const rootReducer = combineReducers({
  locationList: location,
});

export default rootReducer;
