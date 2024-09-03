import "./styles.scss";
import Link from "next/link";

export const DesktopHeader = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <p>Lindbergs bygg & måleri</p>
      </div>
      <ul className="navbar">
        <li><Link href="/">Hem</Link></li>
        <li><Link href="/service">Tjänster</Link></li>
        <li>
          <Link href="/contact">Kontakt</Link>
        </li>
        <li><Link href="/about">Om oss</Link></li>
      </ul>
    </div>
  );
};
