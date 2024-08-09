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
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Generate from "./components/Generate/Generate";
import Favorite from "./components/Favorite/Favorite";
import Copyright from "./components/Copyright/Copyright";

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
      <main className="flex flex-col items-center w-[320px] h-[570px]">
        <Layout.Header />
        <div className="p-4 w-full h-full">
          {page == "Generate" && <Generate />}
          {page == "Favorite" && <Favorite />}
          {page == "Copyright" && <Copyright />}
        </div>
        <Layout.Footer />
      </main>
    </>
  );
};

export default Popup;
