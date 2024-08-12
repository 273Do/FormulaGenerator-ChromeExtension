import { useTheme } from "@/components/theme-provider";
import { Separator } from "@/components/ui/separator";
import React from "react";
import TextareaAutosize from "react-autosize-textarea";
import CopySelector from "../CopySelector";
import { TemplateSelector } from "./TemplateSelector";
import CreateFavorite from "./CreateFavorite";

const Generate = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="w-full h-full">
      <div className="bg-muted w-full h-32 rounded-md px-2 py-1">
        <div className="w-full h-5 flex justify-between items-center">
          <p className="text-xs tracking-wide text-cyan-600">Preview</p>
          <CreateFavorite />
        </div>
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
          <CopySelector className="mx-2" />
        </div>
        <div>
          <p className="mt-4 text-lg">Template</p>
          <div className="bg-muted w-full rounded-md px-2 py-1">
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
