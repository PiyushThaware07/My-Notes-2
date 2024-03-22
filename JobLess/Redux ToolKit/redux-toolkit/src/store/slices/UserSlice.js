import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            // Logic for adding a user
            state.push(action.payload)
        },

        removeUser(state, action) {
            // Logic for removing a user
            state.splice(action.payload, 1)  // In JavaScript, the splice() method is used to add or remove elements from an array. splie(item to be deleed , no of data you want to delete i/e suppose 2 then it will delete the current data as well as next upcoming data item as well. )
        },

        clearUsers(state, action) {
            // Logic for clearing users
            return [];
        },
    }
});

console.log("Display Action Creators or Types : ", userSlice.actions);
export const { addUser, removeUser, clearUsers } = userSlice.actions;
export default userSlice.reducer;
