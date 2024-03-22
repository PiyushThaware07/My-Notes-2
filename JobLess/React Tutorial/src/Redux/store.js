import rootReducer from "./combineReducers";

// imports
import { createStore } from "redux";
const store = createStore(rootReducer);

export default store;
