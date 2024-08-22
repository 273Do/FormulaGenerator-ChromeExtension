import { useTheme } from "@/components/theme-provider";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import React, { useRef, useState } from "react";
import TextareaAutosize from "react-autosize-textarea";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import CopySelector from "../CopySelector";
import { Button } from "@/components/ui/button";
import { FavoriteItemObj, formula_bucket } from "@/utils/storage";
import { removeFormula } from "@/redux/formulaSlice";

const EditFavorite = ({ item }: { item: FavoriteItemObj }) => {
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const title_ref = useRef<HTMLInputElement>(null);
  const [currentValue, setCurrentValue] = useState(item.formula);

  const deleteFavorite = async (id: string) => {
    const favorite_list = await formula_bucket.get("favorites");
    if (favorite_list.favorites) {
      const updatedFavorites = favorite_list.favorites.filter(
        (item: FavoriteItemObj) => item.id !== id
      );
      formula_bucket.set({ favorites: updatedFavorites });
      dispatch(removeFormula(id));
    }
  };

  const updateFavorite = () => {
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
      id: item.id,
      title: title_ref.current?.value,
      formula: currentValue,
      createdAt: date,
    };

    // 保存処理を行う
    console.log(newFavorite);
  };

  return (
    <>
      <DialogHeader className="space-y-0">
        <DialogTitle className="flex items-start flex-col gap-1">
          <input
            className="outline-none bg-muted p-1 rounded-md border"
            defaultValue={item.title}
            placeholder={t("タイトルを入力")}
            ref={title_ref}
          />
          <p className="font-inter text-xs text-muted-foreground">
            {item.createdAt.split(" ")[0]}
          </p>
        </DialogTitle>
      </DialogHeader>
      <div className="max-h-60 w-60 text-xs font-inter font-semibold text-center">
        <MathJaxContext src="../../../mathjax/es5/tex-chtml.js">
          <MathJax dynamic className="text-xs w-full h-full overflow-scroll">
            {`$$${currentValue}$$`}
          </MathJax>
        </MathJaxContext>
      </div>
      <div className="flex items-center">
        <TextareaAutosize
          className="p-1 border text-primary bg-muted w-full h-6 rounded-md font-light pr-6 pl-2 -mr-8 text-sm mt-[2px] outline-none"
          placeholder={t("Texを入力")}
          maxRows={5}
          defaultValue={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
        />
        <CopySelector className="mx-2" />
      </div>
      <DialogFooter>
        <DialogClose className="mt-2 flex flex-row gap-2 items-center">
          <Button
            type="submit"
            variant="outline"
            className={`w-full h-8 hover:bg-red-500 ${
              resolvedTheme === "light" && " hover:text-secondary"
            }`}
            onClick={() => deleteFavorite(item.id)}
          >
            {t("削除")}
          </Button>
          <Button type="submit" className="w-full h-8">
            {t("保存")}
          </Button>
        </DialogClose>
        <button onClick={updateFavorite}>確認ボタン</button>
      </DialogFooter>
    </>
  );
};

export default EditFavorite;
