import { DECREMENT, INCREMENT,INCREMENTBY5,DECREMENTBY5,RESET,TYPECOUNT } from "../actions/action.constants";

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  const {type, payload, setValue} = action
  switch (type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCREMENTBY5:
      return state + 5;
    case DECREMENTBY5:
      return state - 5;
    case RESET:
      return (state = 0);
    case TYPECOUNT: 
      setValue("")
      return state + parseInt(payload)
    default:
      return state;
  }
};

export default counterReducer;
