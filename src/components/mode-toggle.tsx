import { Moon, Sun, MonitorSmartphone, Ellipsis } from "lucide-react";
import { useTheme } from "./theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Switch } from "./ui/switch";
import { useState } from "react";
import { Label } from "./ui/label";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [position, setPosition] = useState(theme);

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     {/* <Button variant="ghost" size="icon"> */}
    //     {/* <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //       <span className="sr-only">Toggle theme</span> */}
    //     <Settings className="h-[1.2rem] w-[1.2rem] m-2 hover:opacity-70 transition-all" />
    //     {/* </Button> */}
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     {/* <DropdownMenuItem onClick={() => setTheme("light")}>
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("dark")}>
    //       Dark
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("system")}>
    //       System
    //     </DropdownMenuItem> */}
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Ellipsis className="h-[1.2rem] w-[1.2rem] m-2 text-muted-foreground hover:opacity-70 transition-all cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="font-inter border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem
            value="light"
            onClick={() => setTheme("light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] mr-2 hover:opacity-70 transition-all" />
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark" onClick={() => setTheme("dark")}>
            <Moon className="h-[1.2rem] w-[1.2rem] mr-2 hover:opacity-70 transition-all" />
            Dark
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="system"
            onClick={() => setTheme("system")}
          >
            <MonitorSmartphone className="h-[1.2rem] w-[1.2rem] mr-2 hover:opacity-70 transition-all" />
            System
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex justify-center items-center space-x-2">
          <Label htmlFor="airplane-mode" className="text-sm font-light">
            日本語
          </Label>
          <Switch id="airplane-mode" />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
