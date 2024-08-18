import { setFormulaList } from "@/redux/formulaSlice";
import { updatePage } from "@/redux/pageSlice";
import { RootState } from "@/redux/store";
import { formula_bucket } from "@/utils/storage";
import { Copyright, SquareFunction, Star } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const page = useSelector((state: RootState) => state.page.value);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      const favorite_list = await formula_bucket.get("favorites");
      if (favorite_list.favorites) {
        dispatch(setFormulaList(favorite_list.favorites));
        console.log(favorite_list.favorites);
      }
    })();
  }, []);

  return (
    <div className="fixed bottom-0 z-50 w-full h-[60px] border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 font-medium">
      <div className="mx-4 my-2 h-full grid grid-cols-3 gap-2 text-[10px]">
        <div
          className={`${
            page == "Generate"
              ? "text-cyan-700 hover:opacity-100"
              : "text-muted-foreground"
          } justify-start flex flex-col items-center transition hover:opacity-70 cursor-pointer`}
          onClick={() => dispatch(updatePage("Generate"))}
        >
          <SquareFunction />
          <p>{t("Generate")}</p>
        </div>
        <div
          className={`${
            page == "Favorites"
              ? "text-cyan-700 hover:opacity-100"
              : "text-muted-foreground"
          } justify-start flex flex-col items-center transition hover:opacity-70 cursor-pointer`}
          onClick={() => dispatch(updatePage("Favorites"))}
        >
          <Star />
          <p>{t("Favorites")}</p>
        </div>
        <div
          className={`${
            page == "Credit"
              ? "text-cyan-600 hover:opacity-100"
              : "text-muted-foreground"
          } justify-start flex flex-col items-center transition hover:opacity-70 cursor-pointer`}
          onClick={() => dispatch(updatePage("Credit"))}
        >
          <Copyright />
          <p>{t("Credit")}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
