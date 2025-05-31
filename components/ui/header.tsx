"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-black before:bg-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Mobile menu button */}
          <button
            className="block md:hidden text-gray-800 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop sign in links */}
          <ul className="hidden md:flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="#quienes-somos"
                className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
              >
                Quienes somos
              </Link>
            </li>
            <li>
              <Link
                href="#faqs"
                className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
              >
                Preguntas frecuentes
              </Link>
            </li>
            <li>
              <Link
                href="#contacto"
                className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
              >
                Contactanos
              </Link>
            </li>
            <li>
              <Link
                href="#carta"
                className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
              >
                Carta
              </Link>
            </li>
            <li>
              <Link
                href="#reserva"
                className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
              >
                Reserva
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
            <ul className="flex flex-col items-center gap-3 py-4">
              <li>
                <Link
                  href="#quienes-somos"
                  className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Quienes somos
                </Link>
              </li>
              <li>
                <Link
                  href="#faqs"
                  className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                >
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contactanos
                </Link>
              </li>
              <li>
                <Link
                  href="#carta"
                  className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Carta
                </Link>
              </li>

              <li>
                <Link
                  href="#reserva"
                  className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Reserva
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
