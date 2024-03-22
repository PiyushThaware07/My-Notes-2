import { configureStore } from "@reduxjs/toolkit";
// Importing Reducers From CounterSlice
import counterSlice from "./slices/counterSlice";

const store = configureStore({
    // Use This When ther is only one slice.
    // reducer: counterSlice.reducer,

    /*
    Use This When there are more then one slice.
    reducer : {
        reducerName : counterSlice.reducer, // reducerName is a micro reducer.
    }
    */
    reducer: {
        micro_reducer_counter: counterSlice.reducer,
    },
})

export default store;