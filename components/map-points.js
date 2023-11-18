import { useMap } from "react-leaflet";
import program from "./switcher/program.json";

export default function MapPoints() {
  const map = useMap();
  program.map((p) => {
    if (p.place !== undefined && p.place.coords !== undefined)
      L.marker([p.place.coords.x, p.place.coords.y], {
        // icon: toiletIcon,
        title: p.name,
        // alt: `Ikona typu ${toilets[id].toiletType}`,
      })
        .addTo(map)
        .on("click", (e) => {
          console.log(e);
        });
  });
  return null;
}
