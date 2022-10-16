import { LOCATION_LIST } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case LOCATION_LIST:
      return [...state, action.payload];
    default:
      return state;
  }
}
