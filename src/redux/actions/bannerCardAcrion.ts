export const SET_BANNERCARD_DATA = 'SET_BANNERCARD_DATA';
export const SET_BANNERCARD_DATA_SUCCESS = 'SET_BANNERCARD_DATA_SUCCESS';
export const SET_BANNERCARD_DATA_FAILURE = 'SET_BANNERCARD_DATA_FAILURE';


export const setBannerCardData = (data: any) => ({
  type: SET_BANNERCARD_DATA,
});


export const setBannerCardDataSuccess = (data: any) => ({
  type: SET_BANNERCARD_DATA_SUCCESS,
  payload: data,
});

export const setBannerCardDataFailure = (data: any) => ({
  type: SET_BANNERCARD_DATA_FAILURE,
});