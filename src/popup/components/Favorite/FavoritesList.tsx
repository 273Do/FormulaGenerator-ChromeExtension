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
import { FavoriteItemObj, formula_bucket } from "@/utils/storage";
import FavoriteItem from "./FavoriteItem";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { DialogClose } from "@radix-ui/react-dialog";
import { useDispatch } from "react-redux";
import { removeFormula } from "@/redux/formulaSlice";

const FavoritesList = ({ data }: { data: FavoriteItemObj[] }) => {
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation();
  const dispatch = useDispatch();

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
                  {item.createdAt.split(" ")[0]}
                </p>
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className="max-h-60 w-60 text-xs font-inter font-semibold text-center">
              <MathJaxContext src="../../../mathjax/es5/tex-chtml.js">
                <MathJax
                  dynamic
                  className="text-xs w-full h-full overflow-scroll"
                >
                  {`$$${item.formula}$$`}
                </MathJax>
              </MathJaxContext>
            </div>
            <div className="flex items-center">
              <TextareaAutosize
                className="p-1 border text-primary bg-muted w-full h-6 rounded-md font-light pr-6 pl-2 -mr-8 text-sm mt-[2px] outline-none"
                placeholder={t("Texを入力")}
                maxRows={5}
                defaultValue={item.formula}
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
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </>
  );
};

export default FavoritesList;
