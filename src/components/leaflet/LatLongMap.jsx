import { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// eslint-disable-next-line react/prop-types
const LatLongMap = ({ latitude, longitude}) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map", {
        center: [latitude, longitude],
        zoom: 10,
      });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    } else {
      mapRef.current.setView([latitude, longitude], 10);
    }

    if (!markerRef.current) {
      markerRef.current = L.marker([latitude, longitude]).addTo(mapRef.current);
    } else {
      markerRef.current.setLatLng([latitude, longitude]);
    }
  }, [latitude, longitude]);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "100%",
        minHeight: "500px",
        marginBlock: "30px",
        borderRadius: "15px",
      }}
    />
  );
};

export default LatLongMap;

 