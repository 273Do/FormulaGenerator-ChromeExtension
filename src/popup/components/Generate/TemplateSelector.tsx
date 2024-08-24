import React, { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import useTemplate from "@/hooks/useTemplate";
import { setting_bucket } from "@/utils/storage";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/components/theme-provider";
import { MathJax, MathJaxContext } from "better-react-mathjax";

export function TemplateSelector() {
  const { resolvedTheme } = useTheme();
  const { data, templateName, saveTemplateName } = useTemplate();

  useEffect(() => {
    (async () => {
      const t_value = await setting_bucket.get();
      if (t_value.template) {
        saveTemplateName(t_value.template);
      }
    })();
  }, []);

  const template_list = [
    "演算子",
    "括弧",
    "分数",
    "論理",
    "集合",
    "順序_組合わせ",
    "総和_総乗",
    "根号_指数_対数",
    "複素数",
    "三角関数",
    "極限",
    "微分",
    "積分",
    "ベクトル",
    "行列",
    "空白",
    "表示形式",
    "フォント_サイズ",
    "ギリシャ文字（大文字）",
    "ギリシャ文字（小文字）",
    "特殊文字",
    "アクセント",
  ];

  console.log(data);

  return (
    <>
      <div className="w-full h-5 flex justify-between items-center">
        <p className=" text-xs tracking-wide text-muted-foreground">
          {templateName}
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
                {template}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Separator
        className={`${resolvedTheme == "dark" && "bg-zinc-700"} my-1`}
      />
      <div className="bg-muted w-full max-h-52 overflow-scroll">
        <div className="h-32">
          {Object.keys(data).map((key) => (
            <div key={key} className="mt-1 mr-2">
              <p>{key}</p>
              <div className="flex items-center gap-2">
                {Object.keys(data[key]).map((subKey) => (
                  <MathJaxContext
                    src="../../../mathjax/es5/tex-chtml.js"
                    key={subKey}
                  >
                    <MathJax
                      dynamic
                      className="overflow-scroll border p-2 rounded-md hover:bg-secondary transition-all cursor-pointer"
                    >
                      {`$$${data[key][subKey]}$$`}
                    </MathJax>
                  </MathJaxContext>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
