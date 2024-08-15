import { getBucket } from "@extend-chrome/storage";

interface MyBucket {
  lang: string;
  formula: string;
}

const bucket = getBucket<MyBucket>("my_bucket", "sync");

export { bucket };
