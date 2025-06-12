import Image from "next/image";

const cartaItems = [
  {
    id: 1,
    nombre: "Hamburguesa de",
    descripcion: "Refrescante cerveza rubia artesanal, suave y ligera.",
    precio: "$3.500",
    imagen: "/images/portfolio-01/deluxe.jpeg",
  },
  {
    id: 2,
    nombre: "Cerveza IPA",
    descripcion: "IPA con notas cítricas y amargor equilibrado.",
    precio: "$4.000",
    imagen: "/images/portfolio-01/Pizza.jpeg",
  },
  {
    id: 3,
    nombre: "Cerveza Stout",
    descripcion: "Oscura, cremosa y con notas de café y chocolate.",
    precio: "$4.200",
    imagen: "/images/portfolio-01/torre.jpeg",
  },
  {
    id: 4,
    nombre: "Papas Fritas",
    descripcion: "Porción grande de papas fritas crujientes.",
    precio: "$2.500",
    imagen: "/images/portfolio-01/image-04.jpg",
  },
  {
    id: 5,
    nombre: "Hamburguesa Clásica",
    descripcion: "Hamburguesa de vacuno, queso cheddar y vegetales frescos.",
    precio: "$5.500",
    imagen: "/images/portfolio-01/image-05.jpg",
  },
  {
    id: 6,
    nombre: "Tabla de Quesos",
    descripcion: "Selección de quesos artesanales y frutos secos.",
    precio: "$6.000",
    imagen: "/images/portfolio-01/image-06.jpg",
  },
];

export default function Carta({ id }: { id?: string }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6 pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] dark:bg-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-black md:text-4xl mb-12">
          Nuestra Carta
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {cartaItems.map((item) => (
            <div key={item.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
              <Image
                src={item.imagen}
                alt={item.nombre}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">{item.nombre}</h3>
                <p className="text-white mb-4 flex-1">{item.descripcion}</p>
                <div className="text-right">
                  <span className="text-lg font-bold text-yellow-700">{item.precio}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}