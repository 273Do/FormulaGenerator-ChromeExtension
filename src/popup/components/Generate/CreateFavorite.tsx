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
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const CreateFavorite = ({ currentValue }: { currentValue: string }) => {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Plus className="h-[1.2rem] w-[1.2rem] mt-1 text-muted-foreground hover:opacity-70 transition-all cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="p-3 w-10/12 font-inter rounded-md border border-border/100 bg-background/95 supports-[backdrop-filter]:bg-background/100">
        <DialogHeader className="space-y-0">
          <DialogTitle className="flex items-start flex-col gap-1">
            {t("お気に入り追加")}
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className=" overflow-scroll h-24 text-2xl font-inter font-semibold w-full text-center">
          {/* y=x/2 */}
          <MathJaxContext src="../../../mathjax/es5/tex-chtml.js">
            <MathJax
              dynamic
              // className={`${zoomSetting} w-full h-full overflow-scroll`}
              className={`text-base w-full pointer-events-none`}
              // onClick={() => saveZoom()}
            >
              {`$$
              \\begin{aligned}
              ${currentValue}
              \\end{aligned}
              $$`}
            </MathJax>
          </MathJaxContext>
        </div>
        <DialogFooter className="mt-2 flex flex-row gap-2 items-center">
          <input
            className="outline-none bg-muted p-1 rounded-md font-light w-10/12 text-sm border"
            placeholder={t("タイトルを入力")}
          />
          <Button type="submit" className="h-7">
            {t("追加")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateFavorite;
