import React from "react";
import FGLogo from "@/utils/images/FormulaGenerator.png";
import { SquareArrowOutUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Credit = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center">
      <img src={FGLogo} alt="" className="rounded-md w-32 p-3 pt-0" />
      <div className="-m-2 mb-3">
        <p className="text-2xl">Formula Generator</p>
        <p className="text-right font-medium -mt-2">Chrome Extension</p>
      </div>
      <div className="text-xs flex flex-col text-muted-foreground font-light gap-2 m-2">
        <div>
          <p>{t("参考元：")}</p>
          <a
            href="https://ramenhuhu.com/mathjax-commandlist"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-end"
          >
            <p className="underline">MathJax-LaTeXコマンド集【完全版】</p>
            <SquareArrowOutUpRight className="h-[0.8rem] w-[0.8rem]" />
          </a>
        </div>
        <p>{t("免責事項")}</p>
        <p>
          This software includes the work that is distributed in the Apache
          License 2.0.
        </p>
      </div>
      <a
        href="https://www.273doworks.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>273DoWorks</p>
      </a>
    </div>
  );
};

export default Credit;
