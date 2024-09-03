import "./styles.scss";
import Link from "next/link";
import { useState } from "react"

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="header mobileHeader">
      <div className="logoContainer">
        <p>LBM AB</p>
      </div>
      <button className="mobileMenuButton" onClick={toggleMenu}>
        ☰
      </button>

      {isMenuOpen && (
        <ul className="mobileMenu">
          <li><Link href="/">Hem</Link></li>
          <li><Link href="/service">Tjänster</Link></li>
          <li><Link href="/contact">Kontakt</Link></li>
          <li><Link href="/about">Om oss</Link></li>
        </ul>
      )}
    </div>
  )
}