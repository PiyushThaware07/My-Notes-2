import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Slices/CounterSlice"

const store = configureStore({
    reducer : {
        counterRoot : CounterSlice,
    },
})

export default store;