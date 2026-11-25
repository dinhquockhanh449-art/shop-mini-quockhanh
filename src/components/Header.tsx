type HeaderProps = {
  shopName?: string;
};

export default function Header({ shopName = "Shopmini_QuocKhanh" }: HeaderProps) {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="logo">
          {shopName.includes("_") ? (
            <>
              {shopName.split("_")[0]}
              <span>_{shopName.split("_")[1]}</span>
            </>
          ) : (
            <>
              Shop<span>Mini</span>
            </>
          )}
        </a>
        <nav className="nav">
          <a href="/">Trang chủ</a>
          <a href="/products">Sản phẩm</a>
          <a href="/about">Giới thiệu</a>
        </nav>
        <a href="/cart" className="cart-link">
          🛒 Giỏ hàng (0)
        </a>
      </div>
    </header>
  );
}
