import { useMap } from "react-leaflet";
import { offline } from "leaflet.offline";

export default function MapOffline() {
  const map = useMap();
  const offline = L.tileLayer
    .offline("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      minZoom: 15,
    })
    .addTo(map);
  return null;
}
