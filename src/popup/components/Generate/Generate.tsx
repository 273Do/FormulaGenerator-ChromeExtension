import { useTheme } from "@/components/theme-provider";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, Star } from "lucide-react";
import React from "react";
import TextareaAutosize from "react-autosize-textarea";
import CopySelector from "../CopySelector";
import { TemplateSelector } from "./TemplateSelector";

const Generate = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="sbg-slate-400 w-full h-full">
      <div className="bg-muted w-full h-32 rounded-md px-2 py-1">
        <div className="w-full h-5 flex justify-between items-center">
          <p className="text-xs tracking-wide text-emerald-400">Preview</p>
          <Star className="h-[1.2rem] w-[1.2rem] mt-1 text-muted-foreground hover:opacity-70 transition-all cursor-pointer" />
        </div>
        {/* <Separator className={`${resolvedTheme == "dark" && "bg-zinc-700"} `} /> */}
        <div className="bg-muted w-full h-24"></div>
      </div>
      <div className="bg-muted w-full h-6 rounded-md mt-2">
        <div className="flex items-center">
          <TextareaAutosize
            className="text-primary bg-muted w-full h-6 rounded-md font-light pr-6 pl-2 -mr-8 text-sm mt-[2px] outline-none"
            onResize={(e) => {}}
            placeholder="Enter Tex"
            maxRows={5}
          />
          <CopySelector />
        </div>
        <div>
          <p className="mt-4 text-lg">Template</p>
          <div className="bg-muted w-full rounded-md px-2 py-1">
            {/* <div className="w-full h-5 flex justify-between items-center">
              <p className=" text-xs tracking-wide text-muted-foreground">
                Order/Combination
              </p>
              <ChevronDown className="h-[1.2rem] w-[1.2rem] hover:opacity-70 transition-all text-muted-foreground cursor-pointer" />
            </div> */}
            <TemplateSelector />
            <Separator
              className={`${resolvedTheme == "dark" && "bg-zinc-700"} my-1`}
            />
            <div className="bg-muted w-full max-h-52 overflow-scroll">
              <div className="h-32"></div>
            </div>
          </div>
          <div className="h-[70px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
