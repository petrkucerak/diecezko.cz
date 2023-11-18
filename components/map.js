"use client";
import { MapConsumer, MapContainer, TileLayer } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import MapLocation from "./map-location";
import MapPoints from "./map-points";
import { useSearchParams } from "next/navigation";
// import MapOffline from "./map-offline";

export default function Map() {
  const param = useSearchParams();
  const x = param.get("x");
  const y = param.get("y");
  let coords;
  x !== null && y !== null ? (coords = [x, y]) : (coords = [50.213, 15.832]);
  // console.log(coords);
  if (typeof window !== undefined)
    return (
      <MapContainer
        center={coords}
        zoom={14}
        minZoom={14}
        scrollWheelZoom={true}
        className="w-screen h-[70vh] diseable-map-selection z-0"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
        <MapLocation />
        <MapPoints coords={[x, y]} />
        {/* TODO: offline support */}
        {/* <MapOffline /> */}
      </MapContainer>
    );
}
