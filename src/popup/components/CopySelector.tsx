import { Copy } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CopySelector = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Copy className="h-[1.1rem] w-[1.1rem] mx-2 text-muted-foreground z-50 hover:opacity-70 transition-all cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="overflow-y-scroll font-inter border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <DropdownMenuItem>Tex Copy</DropdownMenuItem>
        <DropdownMenuItem>Word Copy</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CopySelector;
