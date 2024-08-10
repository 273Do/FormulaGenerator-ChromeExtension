import { Copy } from "lucide-react";
import React from "react";

const CopyToggle = () => {
  return (
    <Copy className="fixed h-[1.1rem] w-[1.1rem] mx-2 text-muted-foreground z-50 hover:opacity-70 transition-all cursor-pointer" />
  );
};

export default CopyToggle;
