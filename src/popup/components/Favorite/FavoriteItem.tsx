import React from "react";
import CopySelector from "../CopySelector";
import { Separator } from "@/components/ui/separator";
import { FavoriteItemObj } from "@/utils/storage";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const FavoriteItem = ({ data }: { data: FavoriteItemObj }) => {
  return (
    <>
      {data != undefined && <Separator />}
      <div className="p-1  gap-2 flex font-medium items-center justify-between transition hover:opacity-70 hover:bg-accent cursor-pointer">
        <div className="flex items-center gap-2">
          <div className="">
            <p className="font-semibold overflow-hidden whitespace-nowrap text-ellipsis max-w-[70px]">
              {data.title}
            </p>
            <p className="font-inter text-xs text-muted-foreground">
              {data.createdAt.split(" ")[0]}
            </p>
          </div>
        </div>
        <div className="h-12 w-[170px] items-center flex">
          <MathJaxContext src="../../../mathjax/es5/tex-chtml.js">
            <MathJax dynamic className="text-xs w-full h-full overflow-scroll">
              {`$$${data.formula}$$`}
            </MathJax>
          </MathJaxContext>
        </div>
      </div>
    </>
  );
};

export default FavoriteItem;
