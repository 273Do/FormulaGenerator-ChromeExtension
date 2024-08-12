import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function TemplateSelector() {
  return (
    <div className="w-full h-5 flex justify-between items-center">
      <p className=" text-xs tracking-wide text-muted-foreground">
        template/title
      </p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <ChevronDown className="h-[1.2rem] w-[1.2rem] hover:opacity-70 transition-all text-muted-foreground cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="h-48 overflow-y-scroll font-inter border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <DropdownMenuItem className="cursor-pointer">Order</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            Combination
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Order</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            Combination
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Order</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            Combination
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

{
  /* <SelectLabel>
            <div className="w-full h-5 flex justify-between items-center">
              <p className=" text-xs tracking-wide text-muted-foreground">
                Order/Combination
              </p>
              <ChevronDown className="h-[1.2rem] w-[1.2rem] hover:opacity-70 transition-all text-muted-foreground cursor-pointer" />
            </div>
          </SelectLabel> */
}

//className="w-1/3 border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
