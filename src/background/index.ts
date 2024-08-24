import browser from "webextension-polyfill";
import { getBucket } from "@extend-chrome/storage";

// show welcome page on new install
browser.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === "install") {
    //show the welcome page
    const url = browser.runtime.getURL("welcome/welcome.html");
    await browser.tabs.create({ url });
  }
});

interface MyBucket {
  targetLang: string;
}

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.contextMenus.create({
//     id: "Favorites",
//     title: "お気に入りを確認",
//     contexts: ["all"],
//   });
//   chrome.contextMenus.create({
//     id: "translation",
//     title: "選択したテキストをお気に入りに追加",
//     contexts: ["selection"],
//   });
// });

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (tab !== undefined) {
    //   switch (info.menuItemId) {
    //     case "translation": {
    //       const selectedText =
    //         info.selectionText !== undefined ? info.selectionText : "";
    //       const value = await bucket.get();
    //       const userTargetLang = value.targetLang ?? "JA";
    //       const translatedText = await translate(selectedText, userTargetLang);
    //       console.log(translatedText);
    //       break;
    //     }
    //   }
  }
});

export {};
