import type { Product } from "../data/products";

type Props = {
  items: Product[];
};

export default function CategoryList({ items }: Props) {
  const categories = Array.from(new Set(items.map((p) => p.category)));

  return (
    <div className="container category-container">
      <div className="category-list">
        <span className="category-label">Danh mục:</span>
        <button className="category-pill active">Tất cả</button>
        {categories.map((cat) => (
          <button key={cat} className="category-pill">
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
