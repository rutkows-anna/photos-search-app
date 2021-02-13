import { combineReducers } from "redux";
import searchReducer from "./search/reducer";
import modalReducer from "./modal/reducer";

const rootReducer = combineReducers({
  search: searchReducer,
  modal: modalReducer,
});

export default rootReducer;