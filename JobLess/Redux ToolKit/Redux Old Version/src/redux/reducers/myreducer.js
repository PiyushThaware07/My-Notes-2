import { INCREMENT_TYPE, DECREMENT_TYPE } from "../constant";

const initialState = 60;
function myReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_TYPE:
            return state + action.payload;
        case DECREMENT_TYPE:
            return state - 1;
        default:
            return state;
    }
}

export default myReducer;