import "./styles.scss";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <h2>Kontakta oss</h2>
        <li>0733454342</li>
        <li>mail@hotmail.com</li>
        <li>adress 35b</li>
      </ul>
      <ul>
        <li>hem</li>
        <li>Tjänster</li>
        <li>Kontakt</li>
        <li>Om oss</li>
      </ul>
    </div>
  );
};
