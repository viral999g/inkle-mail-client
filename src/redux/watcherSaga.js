import { all, fork } from "redux-saga/effects";
import * as mailSagas from "./saga";

export function* watcherSaga() {
  yield all([...Object.values(mailSagas)].map(fork));
}
