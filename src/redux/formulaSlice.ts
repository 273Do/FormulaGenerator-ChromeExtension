import { createSlice } from "@reduxjs/toolkit";
import { set } from "lodash-es";

// interface FormulaState {
//   formula_list: FavoriteItemObj[];
// }

// const initialState: FormulaState = {
//   formula_list: [],
// };

export const formulaSlice = createSlice({
  name: "formula",
  //   initialState,
  initialState: {
    formula_list: [],
  },
  reducers: {
    setFormulaList: (state, action) => {
      state.formula_list = action.payload;
    },
    addFormulaList: (state, action) => {
      //   state.formula_list = action.payload;
      state.formula_list.push(action.payload);
    },
    updateFormula: (state, action) => {
      const index = state.formula_list.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.formula_list[index] = action.payload;
      }
    },
    removeFormula: (state, action) => {
      state.formula_list = state.formula_list.filter(
        (item) => item.id !== action.payload
      );
    },
    clearFormulaList: (state) => {
      state.formula_list = [];
    },
  },
});

export const {
  setFormulaList,
  addFormulaList,
  removeFormula,
  clearFormulaList,
} = formulaSlice.actions;
export default formulaSlice.reducer;
