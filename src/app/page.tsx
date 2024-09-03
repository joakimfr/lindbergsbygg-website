import { BaseLayout } from "@/app/Layouts/BaseLayout/BaseLayout";
import Image from "next/image";
import "./styles.scss";

export default function Home() {
  return (
    <BaseLayout>
      <div className="imageContainer">
        <Image
          src="/hero-image.webp"
          alt="Plåtslageri Företag"
          layout="fill"
          objectFit="cover"
        />
        <div className="circleContainer">
          <h2>Lindbergs</h2>
          <button className="contactButton">Kontakta oss</button>
        </div>
      </div>
      <section className="contentContainer">
        <h2>Välkommen till Lindbergs Bygg & Måleri AB</h2>
        <div className="content">
          <article className="textContent">
            <p>
              Vi är en pålitlig byggfirma i Jönköping som specialiserar oss på
              allt inom bygg, måleri och våtrum. Oavsett om du behöver renovera
              ditt badrum, måla om ditt hem eller genomföra större byggprojekt,
              är vi här för att hjälpa dig. Vårt team av erfarna hantverkare
              garanterar högsta kvalitet och personlig service för att
              förverkliga dina visioner. Låt oss ta hand om ditt nästa projekt –
              stora som små!
            </p>
          </article>
          <div className="slideshow">
            <Image
              src="/deck.png"
              alt="Plåtslageri Företag"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
      <section className="servicesContainer">
        <div className="cardsWrapper">
          <div className="card">
            <div className="top">
              <Image
                className="cardImage"
                src="/build-image.png"
                alt="Plåtslageri Företag"
                width={85}
                height={85}
              />
              <h3>Bygg</h3>
            </div>
            <p>
              Vi utför all sorts byggnationer från mindre till större projekt.
              Våra erfarna hantverkare garanterar högsta kvalitet och
              noggrannhet i varje detalj.
            </p>
            <button className="cardButton">Se mer</button>
          </div>
          <div className="card">
            <div className="top">
              <Image
                className="cardImage"
                src="/paint-image.png"
                alt="Plåtslageri Företag"
                width={85}
                height={85}
              />
              <h3>Måleri</h3>
            </div>
            <p>
              Vi erbjuder professionella måleritjänster för både in- och
              utvändigt arbete. Oavsett om du vill fräscha upp ditt hem eller
              skapa ett helt nytt utseende, hjälper vi dig att förverkliga din
              vision.
            </p>
            <button className="cardButton">Se mer</button>
          </div>
          <div className="card">
            <div className="top">
              <Image
                className="cardImage"
                src="/bath-image.png"
                alt="Plåtslageri Företag"
                width={85}
                height={85}
              />
              <h3>Våtrum</h3>
            </div>
            <p>
              Vi specialiserar oss på våtrumsrenoveringar som badrum och
              tvättstugor. Vårt team säkerställer att alla arbeten utförs enligt
              branschstandard och med fokus på hållbarhet och estetik.
            </p>
            <button className="cardButton">Se mer</button>
          </div>
        </div>
      </section>
      <div className="contact">
        <h2 className="contact__title">
          Hör av dig om du vill ha en kostnadsfri offert eller andra frågor!
        </h2>
        <button className="contactButton">Kontakta oss</button>
      </div>
    </BaseLayout>
  );
}
