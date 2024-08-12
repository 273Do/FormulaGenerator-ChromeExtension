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
import { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { useTranslation } from "react-i18next";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enJson from "@/utils/locales/en.json";
import jaJson from "@/utils/locales/ja.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enJson },
    ja: { translation: jaJson },
  },
  // lng: "en",
  // fallbackLng: "en",
  // interpolation: { escapeValue: false },
});

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [t, i18n] = useTranslation();

  const [lang, setLang] = useState("en");
  const [position, setPosition] = useState(theme);
  console.log(lang);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

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
        <DropdownMenuLabel>{t("言語")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex justify-center items-center space-x-2">
          <Label htmlFor="airplane-mode" className="text-sm font-light">
            日本語
          </Label>
          <Switch
            id="airplane-mode"
            checked={lang === "ja"}
            onCheckedChange={() => setLang(lang === "en" ? "ja" : "en")}
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
