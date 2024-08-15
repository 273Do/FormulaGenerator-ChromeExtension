import { useTheme } from "@/components/theme-provider";
import { Separator } from "@/components/ui/separator";
import TextareaAutosize from "react-autosize-textarea";
import CopySelector from "../CopySelector";
import { TemplateSelector } from "./TemplateSelector";
import CreateFavorite from "./CreateFavorite";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { bucket } from "@/utils/storage";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Maximize2 } from "lucide-react";

const Generate = () => {
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation();
  const ref = useRef<HTMLTextAreaElement>(null);

  const [currentValue, setCurrentValue] = useState<string>("");

  const saveFormula = () => {
    const current_formula = ref.current?.value;
    bucket.set({ formula: current_formula });
    setCurrentValue(current_formula as string);
  };

  // useEffectで非同期関数を呼び出すには，関数内で非同期関数を実行する必要がある．
  // 定数を定義して呼び出すのもok．
  useEffect(() => {
    (async () => {
      const value = await bucket.get();
      if (value.formula) {
        setCurrentValue(value.formula);
      }
    })();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="bg-muted w-full h-32 rounded-md px-2 py-1">
        <div className="w-full h-5 flex justify-between items-center">
          <p className="text-xs tracking-wide text-cyan-600">
            {t("プレビュー")}
          </p>
          <div className="flex gap-1">
            <Maximize2 className="h-[1.0rem] w-[1.0rem] text-muted-foreground hover:opacity-70 transition-all cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center ajustify-center w-full h-24">
          <CreateFavorite currentValue={currentValue} />
        </div>
      </div>
      <div className="bg-muted w-full h-6 rounded-md mt-2">
        <div className="flex items-center">
          <TextareaAutosize
            className="text-primary bg-muted w-full h-6 rounded-md font-light pr-6 pl-2 -mr-8 text-sm mt-[2px] outline-none"
            placeholder={t("Texを入力")}
            maxRows={5}
            onChange={() => saveFormula()}
            ref={ref}
            defaultValue={currentValue}
          />
          <CopySelector className="mx-2" />
        </div>
        <div>
          <p className="mt-4 text-lg">{t("テンプレート")}</p>
          <div className="bg-muted w-full rounded-md px-2 py-1">
            <TemplateSelector />
            <Separator
              className={`${resolvedTheme == "dark" && "bg-zinc-700"} my-1`}
            />
            <div className="bg-muted w-full max-h-52 overflow-scroll">
              <div className="h-32"></div>
            </div>
          </div>
          <div className="h-[70px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
