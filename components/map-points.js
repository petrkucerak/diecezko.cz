import { useMap } from "react-leaflet";

export default function MapPoints() {
  const map = useMap();
  places.map((p) => {
    const pointPopup = L.popup({
      keepInView: true,
      closeButton: false,
      className: "",
    }).setContent(
      `<h2 class="font-titilliumWeb font-bold text-lg">${p.name}</h2><ul class="font-titilliumWeb text-lg">${p.content}</ul>`
    );
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
    content:
      "<li>9:00 registrace</li><li>9:30 dopolední program</li><li>12:00 obědová pauza</li>",
  },
  {
    coords: {
      x: 50.2087878,
      y: 15.8310917,
    },
    name: "Katedrála Svatého Ducha",
    content: "<li>15:00 mše svatá</li>",
  },
  {
    coords: {
      x: 50.2062919,
      y: 15.8337133,
    },
    name: "BiGy (Biskupské Gymnázium)",
    content: "<li>12:30 přednášky, workshopy</li><li>14:00 kavárna</li>",
  },
  {
    coords: {
      x: 50.2090269,
      y: 15.8334453,
    },
    name: "Nové Adalbertinum",
    content: "<li>12:30 tvořivý workshop</li>",
  },
  {
    coords: {
      x: 50.2069553,
      y: 15.8349681,
    },
    name: "Orlovna",
    content: "<li>12:30 sportovní workshop</li>",
  },
  {
    coords: {
      x: 50.2140617,
      y: 15.8101597,
    },
    name: "Vlakové nádraží",
    content: "",
  },
  {
    coords: {
      x: 50.2165528,
      y: 15.8130483,
    },
    name: "Autobusové nádraží",
    content: "",
  },
  {
    coords: {
      x: 50.2090772,
      y: 15.8341294,
    },
    name: "Kostel Nanebevzetí Panny Marie",
    content: "<li>13:00 tichá adorace a zpověď</li>",
  },
];
