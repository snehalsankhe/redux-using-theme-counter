import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import themeReducer from "./themeReducer";
const rootReducer = combineReducers({
  count: counterReducer,
  theme: themeReducer,
});

export default rootReducer;
