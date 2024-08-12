import React from "react";
import CopySelector from "../CopySelector";
import { Separator } from "@/components/ui/separator";

const FavoriteItem = ({ index }: { index: number }) => {
  return (
    <>
      {index != 0 && <Separator />}
      <div
        className="p-2 flex font-medium items-center justify-between transition hover:opacity-70 hover:bg-accent cursor-pointer"
        onClick={() => console.log("click")}
      >
        <div className="flex items-center gap-2">
          <div>
            <p className="font-semibold">test</p>
            <p className="font-inter text-xs text-muted-foreground">
              yyyy/mm/dd
            </p>
          </div>
        </div>
        <div className="items-center flex gap-2">
          <div>y=x/2</div>
          <CopySelector />
        </div>
      </div>
    </>
  );
};

export default FavoriteItem;
