import { takeLatest } from "redux-saga/effects";
import { getFilteredData, getMails } from "./actions";
import { GET_FILTERED_DATA, GET_MAILS } from "./constants";
import { handleFilterData, handleGetMailData } from "./handler";

export function* saga() {
  yield takeLatest(GET_MAILS, handleGetMailData);
  yield takeLatest(GET_FILTERED_DATA, handleFilterData);
}
