import { createSlice } from "@reduxjs/toolkit";
const personSlice = createSlice({
  name: "person",
  initialState: [
    {
      id: "001",
      name: "tom",
      age: 18,
    },
  ],
  reducers: {
    add_person: (state, action) => [action.payload, ...state],
  },
});

export const { add_person } = personSlice.actions;
export default personSlice.reducer;
