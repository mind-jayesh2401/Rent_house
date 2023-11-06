import { SET_BANNER_DATA, SET_BANNER_DATA_FAILURE, SET_BANNER_DATA_SUCCESS } from "@/redux/actions/bannerActions";

const initialState = {
  loading: false,
  banner: null,
};

const bannerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_BANNER_DATA:
      return { ...state, loading: true};
    case SET_BANNER_DATA_SUCCESS:
      return { ...state, loading: false, banner: action.payload.banner};
    case SET_BANNER_DATA_FAILURE:
      return { ...state, loading: false};
    default:
      return state;
  }
};

export default bannerReducer;
