import { LOCATION_LIST } from "./types";

export function addHistory(data) {
  return async function (dispatch) {
    dispatch({
      type: LOCATION_LIST,
      payload: data,
    });
  };
}
