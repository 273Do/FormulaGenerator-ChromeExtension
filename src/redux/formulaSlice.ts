import { FavoriteItemObj } from "@/utils/storage";
import { createSlice } from "@reduxjs/toolkit";

export const formulaSlice = createSlice({
  name: "formula",
  //   initialState,
  initialState: {
    formula_list: [] as FavoriteItemObj[],
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
        (item: FavoriteItemObj) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.formula_list[index] = action.payload as FavoriteItemObj;
      }
    },
    removeFormula: (state, action) => {
      state.formula_list = state.formula_list.filter(
        (item: FavoriteItemObj) => item.id !== action.payload
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
  updateFormula,
  removeFormula,
  clearFormulaList,
} = formulaSlice.actions;
export default formulaSlice.reducer;
