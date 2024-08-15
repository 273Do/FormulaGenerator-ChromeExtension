import { getBucket } from "@extend-chrome/storage";

interface SettingBucket {
  lang: string;
  zoom: number;
}

interface FormulaBucket {
  formula: string;
}

const setting_bucket = getBucket<SettingBucket>("setting_bucket", "sync");
const formula_bucket = getBucket<FormulaBucket>("formula_bucket", "sync");

export { setting_bucket, formula_bucket };
