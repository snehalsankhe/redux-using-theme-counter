import { DECREMENT, INCREMENT } from "../actions/action.constants";

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  // console.log("Counter reducer called ", state);
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  }
  return state;
};

export default counterReducer;
