import {
  GET_FILTERED_DATA,
  GET_MAILS,
  SET_FILTERED_DATA,
  SET_MAILS_FAIL,
  SET_MAILS_LOADING,
  SET_MAILS_SUCCESS,
  SET_SEARCH_INPUT,
  TOGGLE_SIDEBAR,
} from "./constants";

export const getMails = () => {
  console.log("getMails");
  return { type: GET_MAILS };
};

export const setMailData = (payload) => ({
  type: SET_MAILS_SUCCESS,
  payload,
});

export const getFilteredData = (payload) => ({
  type: GET_FILTERED_DATA,
  payload,
});

export const setFilteredData = (payload) => ({
  type: SET_FILTERED_DATA,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_MAILS_LOADING,
  payload,
});

export const setError = (payload) => ({
  type: SET_MAILS_FAIL,
  payload,
});

export const setSearchInput = (payload) => ({
  type: SET_SEARCH_INPUT,
  payload,
});

export const toggleSideBar = (payload) => ({
  type: TOGGLE_SIDEBAR,
  payload,
});
