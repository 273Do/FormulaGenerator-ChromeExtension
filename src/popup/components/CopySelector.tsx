import { Copy } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

const CopySelector = ({ className }: { className?: string }) => {
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Copy
          className={`${className} h-[1.1rem] w-[1.1rem] text-muted-foreground hover:opacity-70 transition-all cursor-pointer`}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="overflow-y-scroll font-inter border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <DropdownMenuItem className="cursor-pointer">
          {t("Texをコピー")}
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          {t("Wordへコピー")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CopySelector;
