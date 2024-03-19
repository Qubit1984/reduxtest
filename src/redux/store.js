import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./countSlice";
import personReducer from "./personSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    person: personReducer,
  },
});
