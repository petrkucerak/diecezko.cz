import { MapConsumer, MapContainer, TileLayer } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import MapLocation from "./map-location";
import MapPoints from "./map-points";
// import MapOffline from "./map-offline";

export default function Map() {
  if (typeof window !== undefined)
    return (
      <MapContainer
        center={[50.213, 15.832]}
        zoom={16}
        minZoom={15}
        scrollWheelZoom={true}
        className="w-screen h-[70vh] diseable-map-selection z-0"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
        <MapLocation />
        <MapPoints />
        {/* TODO: offline support */}
        {/* <MapOffline /> */}
      </MapContainer>
    );
}
