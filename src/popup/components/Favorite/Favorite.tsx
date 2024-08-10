import { Separator } from "@/components/ui/separator";
import { CircleX } from "lucide-react";
import React from "react";
import CopySelector from "../CopySelector";

const Favorite = () => {
  let data_count = 14;

  return (
    <div className="w-full h-full">
      {data_count >= 4 && <div className="h-[62px]"></div>}
      <div className="bg-muted w-full rounded-md px-2 py-1">
        <div className="w-full h-5 flex justify-between items-center">
          <p className="text-xs tracking-wide text-emerald-400">
            Favorites List
          </p>
        </div>

        {Array.from({ length: data_count }).map((_, index) => (
          // <div
          //   key={index}
          //   className="flex flex-col justify-center abg-muted abg-slate-600 w-full h-14"
          // >
          //   <div className="">
          //     <p>title</p>
          //     <p>yyyy / mm / dd</p>
          //   </div>
          //   <Separator />
          // </div>
          <div key={index}>
            {index != 0 && <Separator className="my-2" />}
            <div className="flex font-medium items-center justify-between">
              <div className="flex items-center gap-2">
                <CircleX className="h-[1.2rem] w-[1.2rem] hover:opacity-70 transition-all cursor-pointer text-destructive" />
                <div>
                  <p>test</p>
                  <p className="font-inter text-muted-foreground">
                    yyyy / mm / dd
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div>y=x/2</div>
                <CopySelector />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[70px]"></div>
    </div>
  );
};

export default Favorite;
