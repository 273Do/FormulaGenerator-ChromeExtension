import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pageSlice";
import formulaReducer from "./formulaSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    formula: formulaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
