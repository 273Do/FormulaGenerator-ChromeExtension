// import { Counter } from "../app/features/counter";
import { getBucket } from "@extend-chrome/storage";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useEffect, useState } from "react";

interface MyBucket {
  targetLang: string | null;
}

const bucket = getBucket<MyBucket>("my_bucket", "sync");

const Popup = () => {
  // document.body.style.width = "20rem";
  // document.body.style.height = "20rem";

  const [lang, setLang] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const value = await bucket.get();
      if (value.targetLang) {
        setLang(value.targetLang);
      }
    })();
  }, []);

  const saveLang = (lang: string | null) => {
    bucket.set({ targetLang: lang });
    setLang(lang);
  };

  return (
    <>
      <div className="flex flex-col items-center m-2 w-80 h-80">
        <p>選択したテキストを次の言語に翻訳</p>
        <Select value={lang} onValueChange={saveLang}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="言語" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="EN">英語</SelectItem>
            <SelectItem value="KO">韓国語</SelectItem>
            <SelectItem value="ZH">中国語</SelectItem>
            <SelectItem value="JA">日本語</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* <Counter /> */}
    </>
  );
};

export default Popup;
