import {
  Moon,
  Sun,
  MonitorSmartphone,
  Ellipsis,
  SlidersHorizontal,
  Settings,
} from "lucide-react";
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Settings className="h-[1.2rem] w-[1.2rem] m-2 text-muted-foreground hover:opacity-70 transition-all cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="font-inter border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem
            value="light"
            onClick={() => setTheme("light")}
            className="cursor-pointer"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] mr-2 hover:opacity-70 transition-all" />
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="dark"
            onClick={() => setTheme("dark")}
            className="cursor-pointer"
          >
            <Moon className="h-[1.2rem] w-[1.2rem] mr-2 hover:opacity-70 transition-all" />
            Dark
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="system"
            onClick={() => setTheme("system")}
            className="cursor-pointer"
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
