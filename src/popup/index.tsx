import "../global.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { proxyStore } from "../app/proxyStore";
import Popup from "./Popup";
import { ThemeProvider } from "../components/theme-provider";
import { store } from "@/redux/store";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n/config";

proxyStore.ready().then(() => {
  createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <Popup />
          </I18nextProvider>
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
});
