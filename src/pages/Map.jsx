import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIconUrl from "../assets/image.png"


// Component to automatically adjust map view to fit markers
function SetViewOnMarkers({ records }) {
  const map = useMap();

  useEffect(() => {
    if (records.length > 0) {
      const bounds = L.latLngBounds(
        records.map((record) => record.location || defaultPosition)
      );
      map.fitBounds(bounds);
    }
  }, [records]);

  return null;
}

const Map = ({ records }) => {
  const defaultPosition = [5.6037, -0.187]; // Accra, Ghana
  const [isLoading, setIsLoading] = useState(true);

    const myIcon = L.icon({
      iconUrl: markerIconUrl,
      iconSize: [40, 45],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto p-4 relative z-0">
      <h1 className="text-2xl font-bold mb-4">Map</h1>

      <MapContainer
        center={defaultPosition}
        zoom={13}
        style={{ height: "500px", zIndex: -100 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <SetViewOnMarkers records={records} />

        {!isLoading &&
          records.map((record) => (
            <Marker
              key={record.id}
              position={record.location || defaultPosition}
              icon={myIcon}
            >
              <Popup>
                ID: {record.id} <br />
                Yield: {record.yield} tons <br />
                Size: {record.size} acres
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default Map;
