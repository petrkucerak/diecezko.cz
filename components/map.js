"use client";
import { MapConsumer, MapContainer, TileLayer } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import MapLocation from "./map-location";
import MapPoints from "./map-points";
import { isMobile } from "react-device-detect";
import { useSearchParams } from "next/navigation";
// import MapOffline from "./map-offline";

export default function Map() {
  const MAPY_API_KEY = `ySlgpLUldI28IfMftEIEfES1i5Duc2mz4Id1qvbPOd8`;

  const param = useSearchParams();
  const x = param.get("x");
  const y = param.get("y");
  let coords;
  x !== null && y !== null ? (coords = [x, y]) : (coords = [50.213, 15.832]);

  let tileSize = "";
  isMobile ? (tileSize = "256@2x") : (tileSize = "256");

  // console.log(coords);
  if (typeof window !== undefined)
    return (
      <MapContainer
        center={coords}
        zoom={16}
        minZoom={14}
        scrollWheelZoom={true}
        className="w-screen h-[70vh] diseable-map-selection z-0"
      >
        <TileLayer
          url={`https://api.mapy.cz/v1/maptiles/basic/${tileSize}/{z}/{x}/{y}?apikey=${MAPY_API_KEY}`}
          attribution='<a href="https://api.mapy.cz/copyright" target="_blank" rel="noreferrer">&copy; Seznam.cz a.s. a další</a>'
          className=""
        />
        <MapLocation />
        <MapPoints coords={[x, y]} />
        {/* TODO: offline support */}
        {/* <MapOffline /> */}
        <a
          href="http://mapy.cz/"
          target="_blank"
          rel="noreferrer nofollow"
          className="absolute z-[1000] bottom-0"
        >
          <img alt="Mapy.cz logo" src="https://api.mapy.cz/img/api/logo.svg" />
        </a>
      </MapContainer>
    );
}
