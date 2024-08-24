import { ModeToggle } from "@/components/mode-toggle";
import { RootState } from "@/redux/store";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Header = () => {
  const page = useSelector((state: RootState) => state.page.value);
  const { t } = useTranslation();

  return (
    <div className="fixed flex z-50 p-4 pb-1 w-full h-[60px] justify-between items-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <p className="text-3xl tracking-wide">{t(page)}</p>
      <ModeToggle />
    </div>
  );
};

export default Header;
