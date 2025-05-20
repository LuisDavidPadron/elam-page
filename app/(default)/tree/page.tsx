"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Image from "next/image";
import Logo01 from "@/public/images/LOGO_ELAM.svg";

import dynamic from 'next/dynamic';

// Cargar dinámicamente el componente del mapa
const MapComponent = dynamic(() => import('../../../components/map-component'), {
  ssr: false, // <---- Esto es clave
});

export default function LinkTree() {
  const bounds: [[number, number]] = [
    [-33.4522813, -70.6083369], // Coordenada suroeste
  ];

  return (
    <section className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-8">
      {/* Avatar */}
      <Image
        className="w-30 bg-white h-30 rounded-full border-4 border-blue-500 mb-6"
        src={Logo01}
        alt="Avatar"
      />

      {/* User Name */}
      <h1 className="text-2xl font-bold mb-2">Bienvenido a ELAM</h1>
      {/* Links */}
      <div className="w-full max-w-md space-y-4">
        <div className="link bg-gray-800 hover:bg-blue-600 transition-colors rounded-lg p-4 text-center">
          <a
            href="https://www.instagram.com/elambeergarden/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold cursor-pointer"
          >
            Instagram
          </a>
        </div>
        <div className="link bg-gray-800 hover:bg-blue-600 transition-colors rounded-lg p-4 text-center">
          <a
            href="https://maps.app.goo.gl/eGfGBa4UcoVgr47c9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold cursor-pointer"
          >
            Como llegar aqui
          </a>
        </div>
        <div className="link bg-gray-800 hover:bg-blue-600 transition-colors rounded-lg p-4 text-center">
          <a
            href="https://wokiapp.com/reservas/elam-beer-garden"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold cursor-pointer"
          >
            Reserva
          </a>
        </div>
        <div className="link bg-gray-800 hover:bg-blue-600 transition-colors rounded-lg p-4 text-center">
          <a
            href="https://drive.google.com/file/d/1x9qcR3XOR_zX9H9nRpP0YNHHLIjEO-gK/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold cursor-pointer"
          >
            Carta
          </a>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full max-w-md mt-8">
        <h2 className="text-xl font-bold mb-4">Encuéntranos aquí</h2>

        <MapComponent/>
      </div>
    </section>
  );
}