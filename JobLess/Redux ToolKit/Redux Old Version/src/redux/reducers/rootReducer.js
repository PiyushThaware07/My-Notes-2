import { combineReducers } from "redux";
// Import Deducers
import myReducer from "./myreducer";

const rootReducer = combineReducers({ myReducer })

export default rootReducer;