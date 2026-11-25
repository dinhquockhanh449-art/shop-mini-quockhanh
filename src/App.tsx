import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import "./App.css";

function App() {
  const shopName = "Shopmini_QuocKhanh";

  return (
    <>
      <Header shopName={shopName} />
      <main>
        <Banner shopName={shopName} />
        <CategoryList items={products} />
        <ProductList title="Sản phẩm nổi bật" items={products} />
      </main>
      <Footer shopName={shopName} />
    </>
  );
}

export default App;
