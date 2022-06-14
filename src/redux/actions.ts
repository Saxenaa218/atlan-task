import { store } from ".";
import {
  getResultData,
  SET_QUERY,
  SET_RECENT_QUERIES,
  SET_RESULT_DATA,
} from "../utils";

export const performSearch = (inputValue: string) => {
  if (inputValue === "") return;
  if (inputValue.trim().length === 0) return;
  store.dispatch({ type: SET_QUERY, payload: inputValue });
  const filteredRecentQueries = store
    .getState()
    .recentQueries.filter((itm: string) => itm !== inputValue.trim());
  store.dispatch({
    type: SET_RECENT_QUERIES,
    payload: [inputValue.trim(), ...filteredRecentQueries],
  });
  const tempResultData = getResultData(inputValue);
  store.dispatch({ type: SET_RESULT_DATA, payload: tempResultData });
};
