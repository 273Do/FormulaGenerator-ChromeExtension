import { formula_bucket } from "@/utils/storage";
import React, { useState } from "react";

const useSaveFormula = () => {
  const [currentValue, setCurrentValue] = useState<string>("");

  const saveFormula = (tex: string) => {
    const current_formula = tex;
    formula_bucket.set({ formula: current_formula });
    setCurrentValue(current_formula as string);
  };

  return { currentValue, setCurrentValue, saveFormula };
};

export default useSaveFormula;
