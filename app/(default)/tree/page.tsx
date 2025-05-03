import Image from "next/image";
import Logo01 from "@/public/images/LOGO_ELAM.svg";

export default function LinkTree() {
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
      <p className="text-gray-400 mb-6">Bienvenid@ a mis enlaces 👇</p>

      {/* Links */}
      <div className="w-full max-w-md space-y-4">
        <div className="link bg-gray-800 hover:bg-blue-600 transition-colors rounded-lg p-4 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold"
          >
            Instagram
          </a>
        </div>
        <div className="link bg-gray-800 hover:bg-blue-600 transition-colors rounded-lg p-4 text-center">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold"
          >
            Twitter
          </a>
        </div>
        <div className="link bg-gray-800 hover:bg-blue-600 transition-colors rounded-lg p-4 text-center">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold"
          >
            YouTube
          </a>
        </div>
        <div className="link bg-gray-800 hover:bg-blue-600 transition-colors rounded-lg p-4 text-center">
          <a
            href="https://tupagina.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold"
          >
            Sitio Web Personal
          </a>
        </div>
      </div>
    </section>
  );
}