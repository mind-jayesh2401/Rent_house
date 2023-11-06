import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import bannerCardData from "@/app/utils/bannerCardData";
import { SET_BANNERCARD_DATA, setBannerCardDataFailure, setBannerCardDataSuccess } from "../actions/bannerCardAcrion";


function* fetchBannerCardDataSaga(): Generator {
  try {
    yield put(setBannerCardDataSuccess(bannerCardData));
  } catch (error) {
    yield put(setBannerCardDataFailure(''));
  }
}

function* bannerCardSaga(): Generator {
  yield takeEvery(SET_BANNERCARD_DATA, fetchBannerCardDataSaga);
}


export default function* rootSaga() {
  yield all([bannerCardSaga()]);
}
