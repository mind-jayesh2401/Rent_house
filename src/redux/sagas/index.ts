import { all } from "redux-saga/effects";
import bannerSaga from "./bannerSaga";
import bannerCardSaga from "./bannerCardSaga";

export default function* rootSaga() {
  yield all([bannerSaga(), bannerCardSaga()]);
}
