import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";
import FavoritesList from "./FavoritesList";
import AllFavoriteDelete from "./AllFavoriteDelete";
import { useTranslation } from "react-i18next";
import { FavoriteItemObj, formula_bucket } from "@/utils/storage";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const Favorite = () => {
  // const [data, setData] = useState<FavoriteItemObj[]>([]);
  // const [dataLength, setDataLength] = useState<number>(0);
  const { t } = useTranslation();

  const data = useSelector((state: RootState) => state.formula.formula_list);

  // useEffect(() => {
  //   (async () => {
  //     const favorite_list = await formula_bucket.get("favorites");
  //     if (favorite_list.favorites) setData(favorite_list.favorites);
  //   })();
  // }, []);

  //Object.keys(favorite_list.favorites).length

  return (
    <div className="w-full h-full">
      {data.length >= 6 && <div className="h-[62px]"></div>}
      <div className="bg-muted w-full rounded-md px-2 py-1">
        <div className="w-full h-5 flex justify-between items-center">
          <p className="text-xs tracking-wide text-cyan-600">
            {t("お気に入りリスト")}
          </p>
          <AllFavoriteDelete />
        </div>
        {data == undefined ? (
          <p className="m-2 text-center font-inter text-xs font-medium">
            {t("お気に入りデータがありません。")}
          </p>
        ) : (
          <FavoritesList data={data} />
        )}
      </div>
      <div className="h-[70px]"></div>
    </div>
  );
};

export default Favorite;
