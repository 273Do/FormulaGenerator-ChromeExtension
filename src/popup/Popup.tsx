import * as Layout from "./layouts/index";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Generate from "./components/Generate/Generate";
import Favorite from "./components/Favorite/Favorite";
import Credit from "./components/Credit/Credit";

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
      <main className="flex flex-col items-center w-[320px] h-[530px] font-inter font-semibold  overflow-y-scroll">
        <Layout.Header />
        <div className="h-[70px]"></div>
        <div className="p-3 w-full h-full">
          {page == "Generate" && <Generate />}
          {page == "Favorites" && <Favorite />}
          {page == "Credit" && <Credit />}
        </div>
        <Layout.Footer />
      </main>
    </>
  );
};

export default Popup;
