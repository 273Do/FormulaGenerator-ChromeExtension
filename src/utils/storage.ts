import { getBucket } from "@extend-chrome/storage";

interface SettingBucket {
  lang: string;
  zoom: number;
  template: string;
}

interface FavoriteItemObj {
  id: string;
  title: string;
  formula: string;
  createdAt: string;
}
interface FormulaBucket {
  formula: string;
  favorites: FavoriteItemObj[];
}

const setting_bucket = getBucket<SettingBucket>("setting_bucket", "sync");
const formula_bucket = getBucket<FormulaBucket>("formula_bucket", "sync");

export { setting_bucket, formula_bucket };
export type { FavoriteItemObj };
