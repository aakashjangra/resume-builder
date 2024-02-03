import { configureStore } from "@reduxjs/toolkit";
import resumeDataReducer from "./features/resumeData/resumeData.slice";

export const store = configureStore({
  reducer: {
    resumeData: resumeDataReducer,
  },
})