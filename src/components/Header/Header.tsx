import "./styles.scss";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <p>HPAB</p>
      </div>
      <ul className="navbar">
        <li><Link href="/">Hem</Link></li>
        <li>Tjänster</li>
        <li>
          <Link href="/contact">Kontakt</Link>
        </li>
        <li>Om oss</li>
      </ul>
    </div>
  );
};
