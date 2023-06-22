import { call, put, select } from "redux-saga/effects";
import { MOCK_DATA_URL } from "../utils/constants";
import { getJson, getRequest } from "../utils/request";
import { getRandomName } from "../utils/services";
import { setError, setFilteredData, setLoading, setMailData } from "./actions";

export function* handleGetMailData({ payload }) {
  try {
    yield put(setLoading(true));
    const req = yield call(getRequest, MOCK_DATA_URL);
    const data = yield call(getJson, req);
    yield put(
      setMailData(data.map((email) => ({ ...email, name: getRandomName() })))
    );
  } catch (error) {
    yield put(setError(error.message));
  }
}

export function* handleFilterData({ payload: { tag, searchedValue = "" } }) {
  try {
    yield put(setLoading(true));
    const { data } = yield select((state) => state.mailReducer);

    const filteredMails = data
      ? data.filter((mail) => {
          return (
            (tag === "all" || mail.tag === tag) &&
            (!searchedValue ||
              mail?.subject
                ?.toLowerCase()
                .includes(searchedValue.toLowerCase()) ||
              mail?.name?.toLowerCase().includes(searchedValue.toLowerCase()) ||
              mail?.body?.toLowerCase().includes(searchedValue.toLowerCase()))
          );
        })
      : [];

    yield put(setFilteredData(filteredMails));
  } catch (error) {
    yield put(setError(error.message));
  }
}
