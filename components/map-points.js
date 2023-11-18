import { useMap } from "react-leaflet";

export default function MapPoints() {
  const map = useMap();
  places.map((p) => {
    const pointPopup = L.popup({
      keepInView: true,
      closeButton: false,
      className: "",
    }).setContent(`<h2 class="font-titilliumWeb font-semibold text-lg">${p.name}</h2><p class="font-titilliumWeb">${p.content}</p>`);
    L.marker([p.coords.x, p.coords.y], {
      // icon: toiletIcon,
      title: p.name,
      alt: `${p.name}`,
    })
      .addTo(map)
      .bindPopup(pointPopup)
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
      x: 50.2062919,
      y: 15.8337133,
    },
    name: "BiGy (Biskupské Gymnázium)",
    content: "",
  },
  {
    coords: {
      x: 50.2090269,
      y: 15.8334453,
    },
    name: "Nové Adalbertinum",
    content: "",
  },
  {
    coords: {
      x: 50.2069553,
      y: 15.8349681,
    },
    name: "Orlovna",
    content: "",
  },
];
