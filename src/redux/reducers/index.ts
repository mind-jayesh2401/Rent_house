import { combineReducers } from "redux";
import bannerReducer from "./bannerReducer";
import bannerCardReducer from "./bannerCardReducer";

const rootReducer = combineReducers({
  bannerReducer,
  bannerCardReducer,
});

export default rootReducer;
