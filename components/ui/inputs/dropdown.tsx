'use client'

type Props = {
  categories: { id: string; title: string }[];
  selectedCategory: string
  onChangeAction: (categoryId: string) => void
}

export default function CategoryDropdown({
  categories, 
  selectedCategory, 
  onChangeAction 
}: Props) {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => onChangeAction(e.target.value)}
      className="border rounded px-2 py-1 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      aria-label="Seleccionar categoría"
    >
      <option value="">Todas las categorías</option>
      {categories.map(cat => (
        <option key={cat.id} value={cat.id}>
          {cat.title}
        </option>
      ))}
    </select>
  );
}