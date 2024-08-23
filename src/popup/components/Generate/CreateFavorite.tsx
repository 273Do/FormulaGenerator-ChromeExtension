import React, { useRef } from "react";
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
import { DialogClose } from "@radix-ui/react-dialog";
import { formula_bucket } from "@/utils/storage";
import { useDispatch } from "react-redux";
import { addFormulaList } from "@/redux/formulaSlice";

const CreateFavorite = ({ currentValue }: { currentValue: string }) => {
  const { t } = useTranslation();
  const ref = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const handleClick = async () => {
    const favorite_list = await formula_bucket.get("favorites");

    if (ref.current?.value) {
      const nowDate = new Date();
      const date =
        nowDate.getFullYear() +
        "/" +
        ("0" + (nowDate.getMonth() + 1)).slice(-2) +
        "/" +
        ("0" + nowDate.getDate()).slice(-2) +
        " " +
        ("0" + nowDate.getHours()).slice(-2) +
        ":" +
        ("0" + nowDate.getMinutes()).slice(-2) +
        ":" +
        ("0" + nowDate.getSeconds()).slice(-2) +
        "." +
        nowDate.getMilliseconds();

      const newFavorite = {
        id: crypto.randomUUID(),
        title: ref.current.value,
        formula: currentValue,
        createdAt: date,
      };

      // 保存処理
      if (favorite_list.favorites) {
        favorite_list.favorites.push(newFavorite);
        formula_bucket.set({ favorites: favorite_list.favorites });
      } else {
        formula_bucket.set({ favorites: [newFavorite] });
      }

      dispatch(addFormulaList(newFavorite));
    }
  };

  const test = async () => {
    const favorite_list = await formula_bucket.get("favorites");
    // console.log(favorite_list.favorites);
    // formula_bucket.remove("favorites");
    // console.log(formula_list);
    console.log(favorite_list.favorites);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Plus
          className={`${
            currentValue
              ? "cursor-pointer"
              : "pointer-events-none cursor-not-allowed"
          } h-[1.2rem] w-[1.2rem] mt-1 text-muted-foreground hover:opacity-70 transition-all`}
        />
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
              {`$$${currentValue}$$`}
            </MathJax>
          </MathJaxContext>
        </div>
        <DialogFooter className="mt-2 flex flex-row gap-2 items-center">
          <input
            className="outline-none bg-muted p-1 rounded-md font-light w-10/12 text-sm border"
            placeholder={t("タイトルを入力")}
            ref={ref}
          />
          <DialogClose asChild>
            <Button type="submit" className="h-7" onClick={handleClick}>
              {t("追加")}
            </Button>
          </DialogClose>
          <button onClick={test}>確認</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateFavorite;
