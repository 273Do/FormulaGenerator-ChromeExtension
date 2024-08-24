import { setting_bucket } from "@/utils/storage";
import React, { useState } from "react";

const useTemplate = () => {
  const [templateName, setTemplateName] = useState<string>("演算子");
  const [data, setData] = useState([]);

  const saveTemplateName = async (template: string) => {
    setTemplateName(template);
    setting_bucket.set({ template });
    const response = await fetch(`/formula_data/${template}.json`);
    const template_data = await response.json();
    setData(template_data);
  };
  return { data, templateName, saveTemplateName };
};

export default useTemplate;
