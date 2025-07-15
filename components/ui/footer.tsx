import Link from "next/link";
import Logo from "./logo";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="hidden md:flex justify-center mt-6 max-w-6xl mx-auto">
        <ul className="flex gap-8 w-full justify-center pb-7">
          <li>
            <Link
              className="text-white transition hover:text-gray-600"
              href="https://wa.link/rzisr6"
              target="_blank"
              aria-label="Whatsapp"
            >
              <FaWhatsapp size={50} />
            </Link>
          </li>
          <li>
            <Link
              className="text-white transition hover:text-gray-600"
              href="https://wa.link/rzisr6"
              target="_blank"
              aria-label="TikTok"
            >
              <FaTiktok size={50} />
            </Link>
          </li>
          <li>
            <Link
              className="text-white transition hover:text-gray-600"
              href="https://www.instagram.com/elambeergarden/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram size={50} />
            </Link>
          </li>
        </ul>
      </div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-8 py-6 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="sm:justify-center space-y-2 sm:col-span-12 lg:col-span-4 text-center sm:text-center">
            <div>
              <Logo />
            </div>            
          </div>

          {/* Other blocks */}
          <div className="text-center sm:col-span-12 lg:col-span-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-center">
            {/* Product */}
            <div>              
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    className="text-white transition hover:text-gray-600"
                    href="#quienes-somos"
                  >
                    Quienes somos
                  </Link>
                </li>              
              </ul>
            </div>

            {/* Company */}
            <div>              
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    className="text-white transition hover:text-gray-600"
                    href="#faqs"
                  >
                    Preguntas frecuentes
                  </Link>
                </li>                
              </ul>
            </div>

            {/* Resources */}
            <div>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    className="text-white transition hover:text-gray-600"
                    href="#contacto"
                  >
                    Contactanos
                  </Link>
                </li>
              </ul>
            </div> 

            {/* Resources */}
            <div>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    className="text-white transition hover:text-gray-600"
                    href="#carta"
                  >
                    Carta
                  </Link>
                </li>
              </ul>
            </div> 

            {/* Social */}
            <div className="sm:hidden">
              
              <ul className="flex justify-center sm:justify-start gap-4">
                <li>
                  <Link
                    className="text-white transition hover:text-gray-600"
                    href="https://wa.link/rzisr6"
                    target="_blank"
                    aria-label="Whatsapp"
                  >                   
                    <FaWhatsapp size={20} />                   
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-gray-600"
                    href="https://wa.link/rzisr6"
                    target="_blank"
                    aria-label="TikTok"
                  >                   
                    <FaTiktok size={20}/>
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-gray-600"
                    href="https://www.instagram.com/elambeergarden/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20}/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className="text-sm text-white text-center">
          &copy; Elambeergarden.cl - Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}