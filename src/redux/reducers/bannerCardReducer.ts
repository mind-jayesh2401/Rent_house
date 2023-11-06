import {
  SET_BANNERCARD_DATA,
  SET_BANNERCARD_DATA_FAILURE,
  SET_BANNERCARD_DATA_SUCCESS,
} from "../actions/bannerCardAcrion";

const initialState = {
  loading: false,
  banner: null,
};

const bannerCardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_BANNERCARD_DATA:
      return { ...state, loading: true };
    case SET_BANNERCARD_DATA_SUCCESS:
      return { ...state, loading: false, bannerCard: action.payload.bannerCard };
    case SET_BANNERCARD_DATA_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default bannerCardReducer;
