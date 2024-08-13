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
import { useTheme } from "@/components/theme-provider";
import { useTranslation } from "react-i18next";

const AllFavoriteDelete = () => {
  const { resolvedTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <ListX className="h-[1.2rem] w-[1.2rem] mt-1 text-muted-foreground hover:opacity-70 transition-all cursor-pointer" />
        </div>
      </DialogTrigger>
      <DialogContent className="p-3 w-10/12 font-inter rounded-md border border-border/100 bg-background/95 supports-[backdrop-filter]:bg-background/100">
        <DialogHeader className="space-y-0">
          <DialogTitle className="flex items-start flex-col gap-1">
            {t("全削除")}
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>{t("全てのお気に入りを削除します。")}</div>
        <DialogFooter className="mt-2 flex flex-row gap-2 items-center">
          <Button
            type="submit"
            variant="outline"
            className={`w-full h-8 hover:bg-red-500 ${
              resolvedTheme === "light" && " hover:text-secondary"
            }`}
          >
            {t("削除")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AllFavoriteDelete;
