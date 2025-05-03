'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapComponent() {
    const bounds: [[number, number]] = [
        [-33.4522813, -70.6083369], // Coordenada suroeste
      ];
  return (
    <MapContainer bounds={bounds} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={bounds}>
        <Popup>
          Un popup en Leaflet.
        </Popup>
      </Marker>
    </MapContainer>
  );
}