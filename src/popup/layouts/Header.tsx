import { ModeToggle } from "@/components/mode-toggle";
import React from "react";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="flex bg-blue-950 w-full h-[50px] justify-between items-center">
      <p className="text-3xl font-inter font-semibold tracking-wide">{title}</p>
      <ModeToggle />
    </div>
  );
};

export default Header;
