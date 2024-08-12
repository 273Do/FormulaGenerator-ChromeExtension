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
import { ListX } from "lucide-react";

const AllFavoriteDelete = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <ListX className="h-[1.2rem] w-[1.2rem] mt-1 text-muted-foreground hover:opacity-70 transition-all cursor-pointer" />
        </div>
      </DialogTrigger>
      <DialogContent className="p-3 w-10/12 font-inter rounded-md border border-border/100 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/40">
        <DialogHeader className="space-y-0">
          <DialogTitle className="flex items-start flex-col gap-1">
            全削除
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
        <div>全てのお気に入りを削除します</div>
        <DialogFooter className="mt-2 flex flex-row gap-2 items-center">
          {/* <Button type="submit" variant="destructive"> */}
          {/* <Trash className="h-[1.5rem] w-[1.5rem] mt-1 text-destructive hover:opacity-70 transition-all cursor-pointer" /> */}
          {/* </Button> */}
          <Button type="submit" variant="destructive" className="w-full h-8">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AllFavoriteDelete;
