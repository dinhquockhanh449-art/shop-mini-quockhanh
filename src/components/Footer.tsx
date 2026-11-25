type Props = {
  shopName?: string;
};

export default function Footer({ shopName = "Shopmini_QuocKhanh" }: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} {shopName} · Bài tập môn Công nghệ lập trình hiện đại</p>
        <p>Hotline: 1900 0000 · Email: quockhanh@shopmini.vn</p>
      </div>
    </footer>
  );
}
