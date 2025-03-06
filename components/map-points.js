import { useMap } from "react-leaflet";

export default function MapPoints({ coords }) {
  const map = useMap();
  places.map((p) => {
    const pointPopup = L.popup({
      keepInView: true,
      closeButton: false,
      className: "",
    }).setContent(
      `<h2 class="font-titilliumWeb font-bold text-lg">${p.name}</h2><ul class="font-titilliumWeb text-lg">${p.content}</ul>`
    );
    const marker = L.marker([p.coords.x, p.coords.y], {
      title: p.name,
      icon:
        p.name === "Filhramonie Hradec Králové"
          ? theatre
          : p.name === "Katedrála Svatého Ducha" ||
            p.name === "Kostel Nanebevzetí Panny Marie"
          ? church
          : p.name === "BiGy (Biskupské gymnázium)"
          ? school
          : p.name === "Nové Adalbertinum"
          ? tunel
          : p.name === "Orlovna"
          ? sport
          : p.name === "Vlakové nádraží"
          ? train
          : p.name === "Zpívající stromy"
          ? cross
          : bus,
      alt: `${p.name}`,
    })
      .addTo(map)
      .bindPopup(pointPopup);
    if (
      parseFloat(coords[0]) === p.coords.x &&
      parseFloat(coords[1]) === p.coords.y
    ) {
      marker.openPopup();
    }
  });
  return null;
}

const size = 40;

const theatre = L.icon({
  iconUrl: "/assets/images/map/theatre.svg",
  iconSize: [size, size],
  iconAnchor: [size / 2, size / 2],
  popupAnchor: [0, -10],
  className:
    "bg-[#FFD754] rounded-full border border-4 border-[#FFD754] drop-shadow-xl",
  // shadowUrl: "/asstes/icons/marker-toilet-48x84-transparent-shadows.svg",
  // shadowSize: [28.79, 50.4],
  // shadowAnchor: [2.3945, 4.19999],
});

const church = L.icon({
  iconUrl: "/assets/images/map/church.svg",
  iconSize: [size, size],
  iconAnchor: [size / 2, size / 2],
  popupAnchor: [0, -10],
  className:
    "bg-red-600 rounded-full border border-4 border-red-600 drop-shadow-xl",
  // shadowUrl: "/asstes/icons/marker-toilet-48x84-transparent-shadows.svg",
  // shadowSize: [28.79, 50.4],
  // shadowAnchor: [2.3945, 4.19999],
});

const school = L.icon({
  iconUrl: "/assets/images/map/school.svg",
  iconSize: [size, size],
  iconAnchor: [size / 2, size / 2],
  popupAnchor: [0, -10],
  className:
    "bg-lime-700 rounded-full border border-4 border-lime-700 drop-shadow-xl",
  // shadowUrl: "/asstes/icons/marker-toilet-48x84-transparent-shadows.svg",
  // shadowSize: [28.79, 50.4],
  // shadowAnchor: [2.3945, 4.19999],
});

const sport = L.icon({
  iconUrl: "/assets/images/map/sport.svg",
  iconSize: [size, size],
  iconAnchor: [size / 2, size / 2],
  popupAnchor: [0, -10],
  className:
    "bg-white rounded-full border border-4 border-white drop-shadow-xl",
  // shadowUrl: "/asstes/icons/marker-toilet-48x84-transparent-shadows.svg",
  // shadowSize: [28.79, 50.4],
  // shadowAnchor: [2.3945, 4.19999],
});

const tunel = L.icon({
  iconUrl: "/assets/images/map/tunel.svg",
  iconSize: [size, size],
  iconAnchor: [size / 2, size / 2],
  popupAnchor: [0, -10],
  className:
    "bg-blue-700 rounded-full border border-4 border-blue-700 drop-shadow-xl",
  // shadowUrl: "/asstes/icons/marker-toilet-48x84-transparent-shadows.svg",
  // shadowSize: [28.79, 50.4],
  // shadowAnchor: [2.3945, 4.19999],
});

const bus = L.icon({
  iconUrl: "/assets/images/map/bus.svg",
  iconSize: [size, size],
  iconAnchor: [size / 2, size / 2],
  popupAnchor: [0, -10],
  className:
    "bg-violet-700 rounded-full border border-4 border-violet-700 drop-shadow-xl",
  // shadowUrl: "/asstes/icons/marker-toilet-48x84-transparent-shadows.svg",
  // shadowSize: [28.79, 50.4],
  // shadowAnchor: [2.3945, 4.19999],
});

const train = L.icon({
  iconUrl: "/assets/images/map/train.svg",
  iconSize: [size, size],
  iconAnchor: [size / 2, size / 2],
  popupAnchor: [0, -10],
  className:
    "bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full border border-2 border-white drop-shadow-xl",
  // shadowUrl: "/asstes/icons/marker-toilet-48x84-transparent-shadows.svg",
  // shadowSize: [28.79, 50.4],
  // shadowAnchor: [2.3945, 4.19999],
});

const cross = L.icon({
  iconUrl: "/assets/images/map/cross.svg",
  iconSize: [size, size],
  iconAnchor: [size / 2, size / 2],
  popupAnchor: [0, -10],
  className: "rounded-full bg-amber-800 drop-shadow-xl",
  // shadowUrl: "/asstes/icons/marker-toilet-48x84-transparent-shadows.svg",
  // shadowSize: [28.79, 50.4],
  // shadowAnchor: [2.3945, 4.19999],
});

const places = [
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
      x: 50.2069553,
      y: 15.8349681,
    },
    name: "Orlovna",
    content: "<li>12:30 sportovní workshop</li>",
  },
  {
    coords: {
      x: 50.2077792,
      y: 15.8301403,
    },
    name: "Zpívající stromy",
    content: "<li>14:00 nabídka křížové cesty</li>",
  },
  {
    coords: {
      x: 50.2090772,
      y: 15.8341294,
    },
    name: "Kostel Nanebevzetí Panny Marie",
    content:
      "<li>14:00 chvály, adorace, svátost smíření či duchovní rozhovor</li>",
  },
  {
    coords: {
      x: 50.2062919,
      y: 15.8337133,
    },
    name: "BiGy (Biskupské gymnázium)",
    content: "<li>12:30 přednášky, workshopy</li><li>14:00 kavárna</li>",
  },
  {
    coords: {
      x: 50.2138117,
      y: 15.8291964,
    },
    name: "Filhramonie Hradec Králové",
    content:
      "<li>9:00 registrace</li><li>9:30 dopolední program</li><li>11:30 obědová pauza</li>",
  },
  {
    coords: {
      x: 50.2087878,
      y: 15.8310917,
    },
    name: "Katedrála Svatého Ducha",
    content: "<li>14:15 sraz ministrantů</li><li>15:00 mše svatá</li>",
  },
];


// TODO: aktualizuj mista