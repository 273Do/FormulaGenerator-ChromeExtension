import { setting_bucket } from "@/utils/storage";
import { useState } from "react";

let zoomSettingList = [
  "text-sm  cursor-zoom-in",
  "text-base  cursor-zoom-in",
  "text-xl  cursor-zoom-in",
  "text-2xl  cursor-zoom-in",
  "text-3xl  cursor-zoom-out",
];

const useZoomSetting = () => {
  const [currentZoom, setCurrentZoom] = useState<number>(0);

  const saveZoom = () => {
    let new_zoom = currentZoom + 1;
    if (new_zoom > 4) {
      new_zoom = 0;
    }
    setting_bucket.set({ zoom: new_zoom });
    setCurrentZoom(new_zoom);
  };

  const zoomSetting = zoomSettingList[currentZoom];

  return { zoomSetting, setCurrentZoom, saveZoom };
};

export default useZoomSetting;
