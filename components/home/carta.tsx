"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  CartaPagination,
  CategoryPagination,
} from "@/components/home/lib/carta.mapper";
import CategoryDropdown from "../ui/inputs/dropdown";

export default function Carta({ id }: { id?: string }) {
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [carta, setCarta] = useState<CartaPagination | null>(null);
  const [category, setCategory] = useState<CategoryPagination | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectCategory, setSelectCategory] = useState("");

  useEffect(() => {
    setIsLoading(true);
    // Fetch the carta data from the API
    // Adjust the URL as per your API endpoint

    fetch(`/api/categories`)
      .then(async (res) => {
        const raw: CategoryPagination = await res.json();
        
        return raw;
      })
      .then(setCategory)
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setCategory(null);
      });

    // Construye la query string según si hay categoría seleccionada
    const categoryQuery = selectCategory
      ? `where[categories][equals]=${selectCategory}`
      : "";

    fetch(`/api/carta?limit=${limit}&page=${page}&category=${categoryQuery}`)
      .then(async (res) => {
        const raw: CartaPagination = await res.json();
        console.log("carta fetched:", raw);
        return raw;
      })
      .then(setCarta)
      .finally(() => setIsLoading(false));
  }, [page, limit, selectCategory]);

  if (isLoading) {
    return (
      <section
        id={id}
        className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] dark:bg-dark flex items-center justify-center min-h-[300px]"
      >
        <div className="flex flex-col items-center">
          <svg
            className="animate-spin h-12 w-12 text-yellow-700 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            ></path>
          </svg>
          <div className="text-center text-2xl font-bold text-black md:text-3xl">
            Cargando la carta...
          </div>
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

        {category?.docs?.length! > 0 && (
          <>
            <div className="mb-8 flex justify-center">
              <p className="text-gray-600 text-lg mr-4">
                Filtrar por categoría
              </p>
              <CategoryDropdown
                selectedCategory={selectCategory}
                onChangeAction={(categoryId) => setSelectCategory(categoryId)}
                categories={
                  category?.docs.map((cat) => ({
                    id: cat.id,
                    title: cat.title,
                  })) || []
                }
              />
            </div>
            <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {carta?.docs.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
                >
                  <Image
                    src={
                      item.heroImage.url &&
                      item.heroImage.url.startsWith("http")
                        ? item.heroImage.url
                        : "https://elam-backoffice.vercel.app" +
                          item.heroImage.url
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
                      {item.content?.root?.children?.[0]?.children?.[0]?.text ??
                        ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center gap-2">
              { carta?.docs?.length! > 0 && Array.from({ length: carta?.totalPages! }, (_, i) => (
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
          </>
        )}
        {carta?.docs?.length! == 0 && (
          <>
            <div className="mb-8 flex justify-center">
              <p className="text-gray-600 text-lg mr-4">
                Sin resultados para la categoría seleccionada.
              </p>              
            </div>            
          </>
        )}
        {category && category!.totalDocs == category!.totalPages && (
          <> 
            <div className="text-center text-gray-600">
              No hay categorías disponibles.
            </div>          
          </>
        )}
      </div>
    </section>
  );
}
