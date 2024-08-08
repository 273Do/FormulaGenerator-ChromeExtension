import { useState } from "react";

export interface DialogBoxProps {
  translatedText: string;
  originalText: string;
  targetLang: string;
}

export const DialogBox = (props: DialogBoxProps) => {
  const [opened, setOpened] = useState(true);

  return opened ? <div>{props.translatedText}</div> : <></>;
};
