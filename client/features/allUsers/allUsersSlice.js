import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// This is the thunk that will be used to fetch the user data
export const fetchAllUsers = createAsyncThunk("users", async () => {
  try {
    const { data } = await axios.get("/api/users");
    return data;
  } catch (error) {
    console.log(error);
  }
});

// This is the slice that will be used to store the user data
const usersSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

// This is the selector that will be used to access the user data
export const selectUsers = (state) => {
    return state.users;
}

export default usersSlice.reducer;