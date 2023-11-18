import { useMap } from "react-leaflet";
import { locate } from "leaflet.locatecontrol";

export default function MapLocation() {
  const map = useMap();
  const locateControl = L.control
    .locate({
      flyTo: true,
      showPopup: false,
      drawMarker: true,
      showCompass: true,
      icon: "locate",
      iconLoading: "loading",
      iconElementTag: "div",
      strings: {
        title: "Ukaž mi, kde jsem!",
      },
      locateOptions: {
        enableHighAccuracy: true,
      },
    })
    .addTo(map);
  //   locateControl.start();
  return null;
}
