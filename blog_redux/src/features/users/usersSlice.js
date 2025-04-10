import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Neel" },
  { id: "2", name: "Charan" },
  { id: "3", name: "John" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
