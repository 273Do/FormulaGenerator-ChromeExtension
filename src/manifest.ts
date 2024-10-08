import { defineManifest } from "@crxjs/vite-plugin";
import { version } from "../package.json";

// NOTE: do not include src/ in paths,
// vite root folder: src, public folder: public (based on the project root)
// @see ../vite.config.ts#L16

const manifest = defineManifest(async (env) => ({
  manifest_version: 3,
  name: "Formula Generator",
  description:
    "This is a Chrome extension version of the mathematical formula generation tool.",
  version,
  background: {
    service_worker: "background/index.ts",
  },
  // host_permissions: ["<all_urls>"],
  // options_ui: {
  //   page: "options/options.html",
  //   open_in_tab: false,
  // },
  // web_accessible_resources: [
  //   {
  //     resources: [
  //       // this file is web accessible; it supports HMR b/c it's declared in `rollupOptions.input`
  //       "welcome/welcome.html",
  //     ],
  //     // matches: ["<all_urls>"],
  //     matches: ["<all_urls>"],
  //   },
  // ],
  action: {
    default_popup: "popup/popup.html",
    default_icon: {
      "16": "images/FormulaGenerator_16.png",
      "32": "images/FormulaGenerator_32.png",
      "48": "images/FormulaGenerator_48.png",
      "128": "images/FormulaGenerator_128.png",
    },
  },
  icons: {
    "16": "images/FormulaGenerator_16.png",
    "32": "images/FormulaGenerator_32.png",
    "48": "images/FormulaGenerator_48.png",
    "128": "images/FormulaGenerator_128.png",
  },
  permissions: ["storage"],
  // content_security_policy: {
  //   extension_pages:
  //     "script-src 'self' https://cdnjs.cloudflare.com; object-src 'self'",
  // },
}));

export default manifest;
