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
import * as Layout from "./layouts/index";
import Counter from "./components/Counter/Counter";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface MyBucket {
  targetLang: string | null;
}

const bucket = getBucket<MyBucket>("my_bucket", "sync");

const Popup = () => {
  // const [lang, setLang] = useState<string | null>(null);

  // useEffect(() => {
  //   (async () => {
  //     const value = await bucket.get();
  //     if (value.targetLang) {
  //       setLang(value.targetLang);
  //     }
  //   })();
  // }, []);

  const page = useSelector((state: RootState) => state.page.value);

  // const saveLang = (lang: string | null) => {
  //   bucket.set({ targetLang: lang });
  //   setLang(lang);
  // };

  return (
    <>
      {/* <div className="flex flex-col items-center m-2 w-80 h-80">
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
      </div> */}
      {/* <Counter /> */}
      <main className="flex flex-col items-center m-4 w-[300px] h-[550px]">
        <Layout.Header title={page} />
        <div>{page}</div>
        {/* <Generate/> */}

        <Layout.Footer />
      </main>
      {/* <ModeToggle /> */}
    </>
  );
};

export default Popup;
