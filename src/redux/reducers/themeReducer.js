import { DARK_THEME, DEFAULT_THEME } from "../actions/action.constants";

const initialState = "default ";

const themeReducer = (state = initialState, action) => {
  // console.log("theme reducer called ");
  const { type } = action;
  switch (type) {
    case DARK_THEME:
      return "dark";
    case DEFAULT_THEME:
      return "default";
    default:
      return state;
  }
};

export default themeReducer;
