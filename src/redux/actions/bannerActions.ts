export const SET_BANNER_DATA = 'SET_BANNER_DATA';
export const SET_BANNER_DATA_SUCCESS = 'SET_BANNER_DATA_SUCCESS';
export const SET_BANNER_DATA_FAILURE = 'SET_BANNER_DATA_FAILURE';


export const setBannerData = (data: any) => ({
  type: SET_BANNER_DATA,
});


export const setBannerDataSuccess = (data: any) => ({
  type: SET_BANNER_DATA_SUCCESS,
  payload: data,
});

export const setBannerDataFailure = (data: any) => ({
  type: SET_BANNER_DATA_FAILURE,
});