import { Separator } from "@/components/ui/separator";
import React from "react";
import FavoritesList from "./FavoritesList";
import { ListX } from "lucide-react";

const Favorite = () => {
  let data_count = 10;

  return (
    <div className="w-full h-full">
      {data_count >= 4 && <div className="h-[62px]"></div>}
      <div className="bg-muted w-full rounded-md px-2 py-1">
        <div className="w-full h-5 flex justify-between items-center">
          <p className="text-xs tracking-wide text-emerald-400">
            Favorites List
          </p>
          <ListX className="h-[1.2rem] w-[1.2rem] mt-1 text-muted-foreground hover:opacity-70 transition-all cursor-pointer" />
        </div>
        {data_count == 0 ? (
          <p className="m-2 text-center font-inter text-xs font-medium">
            お気に入りデータがありません
          </p>
        ) : (
          <FavoritesList data_count={data_count} />
        )}
      </div>
      <div className="h-[70px]"></div>
    </div>
  );
};

export default Favorite;
