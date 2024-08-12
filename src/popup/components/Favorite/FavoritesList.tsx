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
import FavoriteItem from "./FavoriteItem";
import TextareaAutosize from "react-autosize-textarea";
import CopySelector from "../CopySelector";
import { useTheme } from "@/components/theme-provider";

const FavoritesList = ({ data_count }: { data_count: number }) => {
  const { resolvedTheme } = useTheme();
  return (
    <>
      {Array.from({ length: data_count }).map((_, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div>
              <FavoriteItem index={index} />
            </div>
          </DialogTrigger>
          <DialogContent className="p-3 w-10/12 font-inter rounded-md border border-border/100 bg-background/95 supports-[backdrop-filter]:bg-background/100">
            <DialogHeader className="space-y-0">
              <DialogTitle className="flex items-start flex-col gap-1">
                <input
                  className="outline-none bg-muted p-1 rounded-md border"
                  defaultValue={"Title"}
                  placeholder="Enter Title"
                />
                <p className="font-inter text-xs text-muted-foreground">
                  yyyy/mm/dd
                </p>
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className="text-2xl font-inter font-semibold w-full text-center">
              y=x/2
            </div>
            <div className="flex items-center">
              <TextareaAutosize
                className="p-1 border text-primary bg-muted w-full h-6 rounded-md font-light pr-6 pl-2 -mr-8 text-sm mt-[2px] outline-none"
                onResize={(e) => {}}
                placeholder="Enter Tex"
                maxRows={5}
                defaultValue={"y=x/2"}
              />
              <CopySelector className="mx-2" />
            </div>
            <DialogFooter className="mt-2 flex flex-row gap-2 items-center">
              <Button
                type="submit"
                variant="outline"
                className={`w-full h-8 hover:bg-red-500 ${
                  resolvedTheme === "light" && " hover:text-secondary"
                }`}
              >
                Delete
              </Button>
              <Button type="submit" className="w-full h-8">
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </>
  );
};

export default FavoritesList;
