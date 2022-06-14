import { StateTypes } from "./types";
import { SET_QUERY, SET_RECENT_QUERIES, SET_RESULT_DATA } from "../utils";

const initialState: StateTypes = {
  query: "",
  recentQueries: [
    "select * from small",
    "select * from moderate",
    "select * from large",
  ],
  resultData: [],
};

const rootReducer = (state: StateTypes = initialState, action: any) => {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, query: action.payload };
    case SET_RECENT_QUERIES:
      return { ...state, recentQueries: action.payload };
    case SET_RESULT_DATA:
      return { ...state, resultData: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
