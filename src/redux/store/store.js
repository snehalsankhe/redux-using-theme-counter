import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

//store takes input as reducer
const store = createStore(rootReducer);

export default store;
