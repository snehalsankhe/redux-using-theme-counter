import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";

//store takes input as reducer
const store = createStore(rootReducer);

export default store;
