"use client";

import "./css/style.css";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import LoadingSpinner from "@/components/ui/loading-spinner";
import Image from "next/image";
import PatronExtendido from "@/public/images/patron expandido 3-01.svg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  useEffect(() => {        
    setIsLoading(false); // Set loading to false after 2 seconds
    return;
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body
        id="myElement"
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        {/* Conditional rendering based on loading state */}
        {isLoading ? (
          <div
            id="loading-spinner"
            className="relative w-full h-screen overflow-hidden"
          >
            {/* Full background image */}
            <Image
              className="absolute inset-0 -z-10 object-cover"
              src={ PatronExtendido }
              alt="Background Pattern"
              fill // Replaces layout="fill"
            />
            {/* Loading spinner */}
            <div className="flex items-center justify-center h-full">
              <LoadingSpinner />
            </div>
          </div>
        ) : (
          <div id="content">
            <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
              {children}
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
