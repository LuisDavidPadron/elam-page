'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngBoundsExpression, LatLngExpression } from 'leaflet';

export default function MapComponent() {    
    const bounds: LatLngBoundsExpression = [
        [-33.4522813, -70.6083369], 
    ];
    const position: LatLngExpression = [-33.4522813, -70.6083369];
  return (
    <MapContainer bounds={bounds} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Aqui nos puedes encontrar
        </Popup>
      </Marker>
    </MapContainer>
  );
}