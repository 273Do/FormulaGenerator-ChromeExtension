import { Counter } from "../app/features/counter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const Popup = () => {
  document.body.style.width = "20rem";
  document.body.style.height = "20rem";

  return (
    <>
      <div className="flex flex-col items-center m-2">
        <p>選択したテキストを次の言語に翻訳</p>
        <Select>
          <SelectTrigger className="w-[180px]">
            {/* <SelectValue placeholder="言語" /> */}
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
