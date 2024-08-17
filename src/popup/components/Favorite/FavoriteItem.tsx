import React from "react";
import CopySelector from "../CopySelector";
import { Separator } from "@/components/ui/separator";
import { FavoriteItemObj } from "@/utils/storage";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const FavoriteItem = ({ data }: { data: FavoriteItemObj }) => {
  return (
    <>
      {data != undefined && <Separator />}
      <div
        className="p-1 flex font-medium items-center justify-between transition hover:opacity-70 hover:bg-accent cursor-pointer"
        // onClick={() => console.log("click")}
      >
        <div className="flex items-center gap-2">
          <div>
            <p className="font-semibold">{data.title}</p>
            <p className="font-inter text-xs text-muted-foreground">
              {data.createdAt}
            </p>
          </div>
        </div>
        <div className="h-12 w-44 items-center flex gap-2">
          <MathJaxContext src="../../../mathjax/es5/tex-chtml.js">
            <MathJax dynamic className="text-xs w-full h-full overflow-scroll">
              {`$$
              \\begin{aligned}
              ${data.formula}
              \\end{aligned}
              $$`}
            </MathJax>
          </MathJaxContext>
          <CopySelector className="" />
        </div>
      </div>
    </>
  );
};

export default FavoriteItem;
