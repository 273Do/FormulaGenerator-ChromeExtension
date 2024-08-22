import { Moon, Sun, MonitorSmartphone, Settings } from "lucide-react";
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
import { useEffect, useState } from "react";
import { Label } from "./ui/label";

import { useTranslation } from "react-i18next";
import { setting_bucket } from "@/utils/storage";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [t, i18n] = useTranslation();

  const [position, setPosition] = useState(theme);

  useEffect(() => {
    (async () => {
      const value = await setting_bucket.get();
      if (value) {
        i18n.changeLanguage(value.lang);
      }
    })();
  }, []);

  const saveLang = (lang: string) => {
    setting_bucket.set({ lang: lang });
    i18n.changeLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Settings className="h-[1.2rem] w-[1.2rem] m-2 text-muted-foreground hover:opacity-70 transition-all cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="font-inter border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <DropdownMenuLabel>{t("テーマ")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem
            value="light"
            onClick={() => setTheme("light")}
            className="cursor-pointer"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] mr-2 hover:opacity-70 transition-all" />
            {t("ライト")}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="dark"
            onClick={() => setTheme("dark")}
            className="cursor-pointer"
          >
            <Moon className="h-[1.2rem] w-[1.2rem] mr-2 hover:opacity-70 transition-all" />
            {t("ダーク")}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="system"
            onClick={() => setTheme("system")}
            className="cursor-pointer"
          >
            <MonitorSmartphone className="h-[1.2rem] w-[1.2rem] mr-2 hover:opacity-70 transition-all" />
            {t("システム")}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSeparator />
        <DropdownMenuLabel>{t("言語")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex justify-center items-center space-x-2">
          <Label htmlFor="airplane-mode" className="text-sm font-light">
            日本語
          </Label>
          <Switch
            id="airplane-mode"
            checked={i18n.language === "ja"}
            onCheckedChange={
              () => saveLang(i18n.language === "en" ? "ja" : "en")
              // i18n.changeLanguage(i18n.language === "en" ? "ja" : "en")
            }
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
