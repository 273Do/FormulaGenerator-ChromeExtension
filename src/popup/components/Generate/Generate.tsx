import { useTheme } from "@/components/theme-provider";
import { Separator } from "@/components/ui/separator";
import TextareaAutosize from "react-autosize-textarea";
import CopySelector from "../CopySelector";
import CreateFavorite from "./CreateFavorite";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { formula_bucket, setting_bucket } from "@/utils/storage";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import useZoomSetting from "@/hooks/useZoomSetting";
import useSaveFormula from "@/hooks/useSaveFormula";
import "@/highlight/docco.css";
import useTemplate from "@/hooks/useTemplate";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const template_list = [
  "演算子",
  "括弧",
  "分数",
  "論理",
  "集合",
  "順序_組合わせ",
  "総和_総乗",
  "累乗_指数_対数",
  "複素数",
  "三角関数",
  "極限",
  "微分",
  "積分",
  "ベクトル",
  "行列",
  "スペース",
  "表示形式",
  "フォント_サイズ",
  "ギリシャ文字(大文字)",
  "ギリシャ文字(小文字)",
  "特殊文字",
  "アクセント",
];

const Generate = () => {
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation();
  const ref = useRef<HTMLTextAreaElement>(null);

  const { zoomSetting, setCurrentZoom, saveZoom } = useZoomSetting();
  const { currentValue, setCurrentValue, saveFormula } = useSaveFormula();
  const { data, templateName, saveTemplateName } = useTemplate();

  // useEffectで非同期関数を呼び出すには，関数内で非同期関数を実行する必要がある．
  // 定数を定義して呼び出すのもok．
  useEffect(() => {
    (async () => {
      const s_value = await setting_bucket.get();
      const f_value = await formula_bucket.get();
      if (s_value.zoom) {
        setCurrentZoom(s_value.zoom);
      }
      if (f_value.formula) {
        setCurrentValue(f_value.formula);
      }
      if (s_value.template) {
        saveTemplateName(s_value.template);
      } else {
        saveTemplateName("演算子");
      }
    })();
  }, []);

  const handleClick = async (formula_tex: string) => {
    const f_value = await formula_bucket.get();
    if (f_value.formula) {
      saveFormula(f_value.formula + formula_tex);
    } else {
      saveFormula(formula_tex);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="bg-muted w-full h-32 rounded-md px-2 py-1">
        <div className="w-full h-5 flex justify-between items-center">
          <p className="text-xs tracking-wide text-cyan-600">
            {t("プレビュー")}
          </p>
          <CreateFavorite currentValue={currentValue} />
        </div>
        <div className="flex flex-col items-end justify-end w-full h-24">
          <MathJaxContext src="../../../mathjax/es5/tex-chtml.js">
            <MathJax
              dynamic
              className={`${zoomSetting} w-full h-full overflow-scroll`}
              onClick={() => saveZoom()}
            >
              {`$$${currentValue}$$`}
            </MathJax>
          </MathJaxContext>
        </div>
      </div>
      <div className="bg-muted w-full h-6 rounded-md mt-2">
        <div className="flex items-center">
          <TextareaAutosize
            className="text-primary bg-muted w-full h-6 rounded-md font-light pr-6 pl-2 -mr-8 text-sm mt-[2px] outline-none"
            placeholder={t("Texを入力")}
            maxRows={5}
            onChange={() => saveFormula(ref.current?.value)}
            ref={ref}
            defaultValue={currentValue}
            value={currentValue}
          />
          <CopySelector tex={currentValue} className="mx-2" />
        </div>

        <div>
          <p className="mt-4 text-lg">{t("テンプレート")}</p>
          <div className="bg-muted w-full rounded-md px-2 py-1">
            <div className="w-full h-5 flex justify-between items-center">
              <p className="text-cyan-600 text-xs tracking-wide">
                {t(templateName)}
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <ChevronDown className="h-[1.2rem] w-[1.2rem] hover:opacity-70 transition-all text-muted-foreground cursor-pointer" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="h-48 overflow-y-scroll font-inter border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                  {template_list.map((template) => (
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => saveTemplateName(template)}
                      key={template}
                    >
                      {t(template)}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Separator
              className={`${resolvedTheme == "dark" && "bg-zinc-700"} my-1`}
            />
            <div className="bg-muted w-full max-h-72 overflow-scroll">
              <div className="h-64">
                {Object.keys(data).map((key) => (
                  <div key={key} className="mr-2">
                    <p className="mt-2 mb-1">{t(key)}</p>
                    <div className="gap-2 flex flex-col">
                      {Object.keys(data[key]).map((subKey) => (
                        <MathJaxContext
                          src="../../../mathjax/es5/tex-chtml.js"
                          key={subKey}
                        >
                          <MathJax
                            dynamic
                            className="overflow-scroll px-2 border rounded-md hover:bg-secondary transition-all cursor-pointer"
                            onClick={() => handleClick(data[key][subKey])}
                          >
                            {`$$${data[key][subKey]}$$`}
                            <p className="text-center text-muted-foreground">
                              {t(subKey)}
                            </p>
                          </MathJax>
                        </MathJaxContext>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="h-[70px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
