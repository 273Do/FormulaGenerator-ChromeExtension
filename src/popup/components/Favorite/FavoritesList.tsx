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
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import FavoriteItem from "./FavoriteItem";
import TextareaAutosize from "react-autosize-textarea";
import CopySelector from "../CopySelector";
import { Trash } from "lucide-react";

const FavoritesList = ({ data_count }: { data_count: number }) => {
  return (
    <>
      {Array.from({ length: data_count }).map((_, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <div>
              <FavoriteItem index={index} />
            </div>
          </DialogTrigger>
          <DialogContent className="p-3 w-10/12 font-inter rounded-md border border-border/100 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/40">
            <DialogHeader className="space-y-0">
              <DialogTitle className="flex items-start flex-col gap-1">
                {/* <div className="text-2xl font-inter">y=x/2</div> */}
                {/* <p>Title</p> */}
                <input
                  className="outline-none bg-muted p-1 rounded-md border"
                  defaultValue={"Title"}
                />
                <p className="font-inter text-xs text-muted-foreground">
                  yyyy/mm/dd
                </p>
              </DialogTitle>
              <DialogDescription>
                {/* Make changes to your profile here. Click save when you're done. */}
                {/* <div className="flex items-center">
                  <TextareaAutosize
                    className=" bg-muted w-full h-6 rounded-md font-light pr-6 pl-2 -mr-8 text-sm mt-[2px] outline-none"
                    onResize={(e) => {}}
                    placeholder="Enter Tex"
                    maxRows={5}
                  />
                  <CopySelector className="mx-2" />
                </div> */}
              </DialogDescription>
              {/* <div className="text-2xl font-inter">y=x/2</div> */}
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
              {/* <Button type="submit" variant="destructive"> */}
              {/* <Trash className="h-[1.5rem] w-[1.5rem] mt-1 text-destructive hover:opacity-70 transition-all cursor-pointer" /> */}
              {/* </Button> */}
              <Button
                type="submit"
                variant="destructive"
                className="w-full h-8"
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
