"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CartaPagination } from "@/components/home/lib/carta.mapper";

export default function Carta({ id }: { id?: string }) {
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [carta, setCarta] = useState<CartaPagination | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/carta?limit=${limit}&page=${page}`)
      .then(async (res) => {
        const raw: CartaPagination = await res.json();
        return raw;
      })
      .then(setCarta)
      .finally(() => setIsLoading(false));
  }, [page, limit]);

  if (isLoading) {
    return (
      <section
        id={id}
        className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] dark:bg-dark flex items-center justify-center min-h-[300px]"
      >
        <div className="flex flex-col items-center">
          <svg className="animate-spin h-12 w-12 text-yellow-700 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
          </svg>
          <div className="text-center text-2xl font-bold text-black md:text-3xl">Cargando la carta...</div>
        </div>
      </section>
    );
  }

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
          {carta?.docs.map((item) => (
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
          {Array.from({ length: carta?.totalPages! }, (_, i) => (
            <button
              key={i}
              className={`cursor-pointer px-3 py-1 rounded ${carta?.page === i + 1 ? "bg-yellow-700 text-white" : "bg-gray-200"}`}
              onClick={() => setPage(i + 1)}
              disabled={carta?.page === i + 1}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}