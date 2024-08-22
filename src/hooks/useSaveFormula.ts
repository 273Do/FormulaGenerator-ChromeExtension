import { formula_bucket } from "@/utils/storage";
import React, { useState } from "react";

const useSaveFormula = () => {
  const [currentValue, setCurrentValue] = useState<string>("");

  const saveFormula = (ref: React.RefObject<HTMLInputElement>) => {
    const current_formula = ref.current?.value;
    formula_bucket.set({ formula: current_formula });
    setCurrentValue(current_formula as string);
  };

  return { currentValue, setCurrentValue, saveFormula };
};

export default useSaveFormula;
