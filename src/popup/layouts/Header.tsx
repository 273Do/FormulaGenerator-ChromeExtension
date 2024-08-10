import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "@/components/theme-provider";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const Header = () => {
  const page = useSelector((state: RootState) => state.page.value);
  // const { resolvedTheme } = useTheme();

  return (
    // <div
    //   className={`${
    //     resolvedTheme == "light" && "bg-muted"
    //   } flex p-4 pb-1 w-full h-[60px] justify-between items-center border-b border-border/40 bg-background/95 `}
    // >
    <div className="fixed flex p-4 pb-1 w-full h-[60px] justify-between items-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <p className="text-3xl tracking-wide">{page}</p>
      <ModeToggle />
    </div>
  );
};

export default Header;
