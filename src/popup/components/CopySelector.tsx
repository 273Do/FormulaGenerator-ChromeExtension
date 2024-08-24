import { Copy } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

const CopySelector = ({
  tex,
  className,
}: {
  tex: string;
  className?: string;
}) => {
  const { t } = useTranslation();

  const texCopy = async () => {
    navigator.clipboard.writeText(tex);
  };

  const wordCopy = async () => {
    const mathmlOutput = await (window as any).MathJax.tex2mmlPromise(tex);
    navigator.clipboard.writeText(mathmlOutput);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Copy
          className={`${className} h-[1.1rem] w-[1.1rem] text-muted-foreground hover:opacity-70 transition-all cursor-pointer`}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="overflow-y-scroll font-inter border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <DropdownMenuItem className="cursor-pointer" onClick={texCopy}>
          {t("テキスト形式でコピー")}
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={wordCopy}>
          {t("MathML形式でコピー(Wordなど)")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CopySelector;
