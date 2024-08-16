import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import TextareaAutosize from "react-autosize-textarea";
import CopySelector from "../CopySelector";
import { useTheme } from "@/components/theme-provider";
import { useTranslation } from "react-i18next";
import { FavoriteItemObj } from "@/utils/storage";
import FavoriteItem from "./FavoriteItem";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const FavoritesList = ({ data }: { data: FavoriteItemObj[] }) => {
  console.log(data);
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <>
      {data.map((item: FavoriteItemObj) => (
        <Dialog key={item.id}>
          <DialogTrigger asChild>
            <div>
              <FavoriteItem data={item} />
            </div>
          </DialogTrigger>
          <DialogContent className="p-3 w-10/12 font-inter rounded-md border border-border/100 bg-background/95 supports-[backdrop-filter]:bg-background/100">
            <DialogHeader className="space-y-0">
              <DialogTitle className="flex items-start flex-col gap-1">
                <input
                  className="outline-none bg-muted p-1 rounded-md border"
                  defaultValue={item.title}
                  placeholder={t("タイトルを入力")}
                />
                <p className="font-inter text-xs text-muted-foreground">
                  {item.createdAt}
                </p>
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className="text-xs font-inter font-semibold w-full text-center">
              <MathJaxContext src="../../../mathjax/es5/tex-chtml.js">
                <MathJax dynamic className={"w-full h-full overflow-scroll"}>
                  {`$$
              \\begin{aligned}
              ${item.formula}
              \\end{aligned}
              $$`}
                </MathJax>
              </MathJaxContext>
            </div>
            <div className="flex items-center">
              <TextareaAutosize
                className="p-1 border text-primary bg-muted w-full h-6 rounded-md font-light pr-6 pl-2 -mr-8 text-sm mt-[2px] outline-none"
                onResize={(e) => {}}
                placeholder={t("Texを入力")}
                maxRows={5}
                defaultValue={item.formula}
              />
              <CopySelector className="mx-2" />
            </div>
            <DialogFooter className="mt-2 flex flex-row gap-2 items-center">
              <Button
                type="submit"
                variant="outline"
                className={`w-full h-8 hover:bg-red-500 ${
                  resolvedTheme === "light" && " hover:text-secondary"
                }`}
              >
                {t("削除")}
              </Button>
              <Button type="submit" className="w-full h-8">
                {t("保存")}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </>
  );
};

export default FavoritesList;
