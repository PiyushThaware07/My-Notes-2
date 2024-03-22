import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";

const store = configureStore({
    reducer: {
        users: userSlice, // do this if you have mentioned userSlice.reducer in userSlice export default other wise you have to this like : users: userSlice.reducer not reducers ok.
    }
});

export default store;