import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: "counter",
    initialState: { count: 10 },
    reducers: {
        incrementCountReducer: (state, action) => {
            console.log("Increment Count");
            state.count = state.count + 1
        },
        decrementCountReducer: (state, action) => {
            console.log("Decrement Count");
            state.count = state.count - action.payload
        }
    }
})

export default CounterSlice.reducer;
export const { incrementCountReducer, decrementCountReducer } = CounterSlice.actions;