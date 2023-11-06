import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { SET_BANNER_DATA, setBannerDataFailure, setBannerDataSuccess } from "../actions/bannerActions";
import bannerData from "@/app/utils/bannerData";


function* fetchBannerDataSaga(): Generator {
  try {
    yield put(setBannerDataSuccess(bannerData));
  } catch (error) {
    yield put(setBannerDataFailure(''));
  }
}

function* bannerSaga(): Generator {
  yield takeEvery(SET_BANNER_DATA, fetchBannerDataSaga);
}


export default function* rootSaga() {
  yield all([bannerSaga()]);
}
