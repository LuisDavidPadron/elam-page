"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CartaPagination, mapCarta } from "@/components/home/lib/carta.mapper";
import { CartaBlock } from "./types/carta.type";

export default function Carta({ id }: { id?: string }) {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [carta, setCarta] = useState<CartaPagination | null>(null);

  useEffect(() => {
    fetch(
      `https://elam-backoffice.vercel.app/api/posts/?limit=${limit}&page=${page}`,
      {
        next: { revalidate: 60 }, // ISR: revalida cada 60 segundos
      }
    )
      .then(async (res) => {
        const raw: CartaPagination = await res.json();
        console.log("Carta data:", raw);
        return raw;
      })
      .then(setCarta);
  }, [page, limit]);

  if (!carta)
    return (
      <section
        id={id}
        className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] dark:bg-dark"
      >
        <div className="text-center text-3xl font-bold text-black md:text-4xl mb-12">Cargando la carta...</div>
      </section>
    );

  return (
    <section
      id={id}
      className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] dark:bg-dark"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-black md:text-4xl mb-12">
          Nuestra Carta
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {carta.docs.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <Image
                src={
                  item.heroImage.url && item.heroImage.url.startsWith("http")
                    ? item.heroImage.url
                    : "https://elam-backoffice.vercel.app" + item.heroImage.url
                }
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white mb-4 flex-1">
                  {item.content?.root?.children?.[0]?.children?.[0]?.text ?? ""}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: carta.totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded ${carta.page === i + 1 ? "bg-yellow-700 text-white" : "bg-gray-200"}`}
              onClick={() => setPage(i + 1)}
              disabled={carta.page === i + 1}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
