import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter-slice",
    initialState: 0,
    reducers: {
        incrementCounter(state, action) {
            return state + action.payload
        },
        decrementCounter(state, action) {
            return state - 1

        },
        clearCounter(state, action) {
            return state * 0
        }
    }
})

// console.log(counterSlice.actions);

export default counterSlice;
export const { incrementCounter, decrementCounter, clearCounter } = counterSlice.actions;