import { combineReducers } from "redux";
import {
  SET_FILTERED_DATA,
  SET_MAILS_FAIL,
  SET_MAILS_LOADING,
  SET_MAILS_SUCCESS,
  SET_SEARCH_INPUT,
  TOGGLE_SIDEBAR,
} from "./constants";

const initialState = {
  inputValue: "",
  data: [],
  filteredData: [],
  loading: false,
  error: "",
  isSideBarNarrow: false,
};
const mailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAILS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    case SET_MAILS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_MAILS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SET_FILTERED_DATA:
      return {
        ...state,
        filteredData: action.payload,
        loading: false,
        error: "",
      };
    case SET_SEARCH_INPUT:
      return {
        ...state,
        inputValue: action.payload,
      };

    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSideBarNarrow: !state.isSideBarNarrow,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({ mailReducer });

export default reducer;
