import { useMap } from "react-leaflet";

export default function MapPoints() {
  const map = useMap();
  places.map((p) => {
    L.marker([p.coords.x, p.coords.y], {
      // icon: toiletIcon,
      title: p.name,
      alt: `${p.name}`,
    })
      .addTo(map)
      .on("click", (e) => {
        console.log(e);
      });
  });
  return null;
}

const places = [
  {
    coords: {
      x: 50.2138117,
      y: 15.8291964,
    },
    name: "Filhramonie Hradec Králové",
    content: "",
  },
  {
    coords: {
      x: 50.2087878,
      y: 15.8310917,
    },
    name: "Katedrála Svatého Ducha",
    content: "",
  },
  
  {
   coords: {
     x: 50.2087878,
     y: 15.8310917,
   },
   name: "Katedrála Svatého Ducha",
   content: "",
 },
];
