import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import MapLocation from "./map-location";

export default function Map() {
  return (
    <MapContainer
      center={[50.213, 15.832]}
      zoom={16}
      scrollWheelZoom={true}
      className="w-screen h-[70vh] diseable-map-selection"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
      <MapLocation />
    </MapContainer>
  );
}
