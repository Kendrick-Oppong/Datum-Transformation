import { useRef, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export const NorthinEastinMap = ({ northings, eastings, innerHtml }) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  // Default coordinates
  const defaultLatitude = 5.774;
  const defaultLongitude = 6.48884;

  useEffect(() => {
    const numbers = innerHtml.match(/[-+]?[0-9]*\.?[0-9]+/g);
    let lat = defaultLatitude;
    let long = defaultLongitude;

    if (numbers && numbers.length >= 2) {
      [lat, long] = numbers;
    }

    if (!mapRef.current) {
      mapRef.current = L.map("map", {
        center: [lat, long],
        zoom: 10,
      });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    } else {
      mapRef.current.setView([lat, long], 10);
    }

    if (!markerRef.current) {
      markerRef.current = L.marker([lat, long]).addTo(mapRef.current);
    } else {
      markerRef.current.setLatLng([lat, long]);
    }
  }, [innerHtml]);

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

export default NorthinEastinMap;
