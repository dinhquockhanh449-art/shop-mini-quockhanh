type Props = {
  shopName?: string;
};

export default function Banner({ shopName = "Shopmini_QuocKhanh" }: Props) {
  return (
    <section className="banner container">
      <div className="banner-content">
        <h1>Chào mừng đến với {shopName} 🎉</h1>
        <p>
          Khám phá các sản phẩm công nghệ & thời trang hiện đại với ưu đãi ngập tràn!
        </p>
        <button className="banner-btn">Mua ngay</button>
      </div>
    </section>
  );
}
