import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import { filterProducts } from "./utils/product";
import "./App.css";

function App() {
  const shopName = "Shopmini_QuocKhanh";

  const cheapProducts = filterProducts(products, { maxPrice: 300000, sort: "asc" });
  const electronics = filterProducts(products, { category: "Điện tử" });
  // Bài tập về nhà Lab 2: Sản phẩm sắp hết hàng (1 <= stock <= 5)
  const lowStockProducts = products.filter((p) => p.stock >= 1 && p.stock <= 5);

  return (
    <>
      <Header shopName={shopName} />
      <main>
        <Banner shopName={shopName} />
        <CategoryList items={products} />
        <ProductList title="Sản phẩm nổi bật" items={products} />
        <ProductList title="Giá dưới 300.000 đ" items={cheapProducts} />
        <ProductList title="Đồ điện tử" items={electronics} />
        <ProductList title="Sản phẩm sắp hết hàng (Chỉ còn 1 - 5 món)" items={lowStockProducts} />
      </main>
      <Footer shopName={shopName} />
    </>
  );
}

export default App;
