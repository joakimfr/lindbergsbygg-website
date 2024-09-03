"use client";

import "./styles.scss";
import { Footer } from "@/components/Footer/Footer";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DesktopHeader } from "@/components/Header/DesktopHeader/DesktopHeader";
import { MobileHeader } from "@/components/Header/MobileHeader/MobileHeader";
import { useWindowSize } from "@/hooks/useWindowSize";

export const PagesLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();

  const getTitle = () => {
    switch (pathname) {
      case "/service":
        return "Service";
      case "/about":
        return "Om oss";
      case "/contact":
        return "Kontakt";
      default:
        return "Kontakt";
    }
  };

  const isMobile = useWindowSize();

  return (
    <div className="layoutPages">
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      <div className="imageContainerContact">
        <Image
          src="/hero-image.webp"
          alt="Plåtslageri Företag"
          layout="fill"
          objectFit="cover"
        />
        <div className="titleContainer">
          <h2 className="title">{getTitle()}</h2>
        </div>
      </div>
      <main className="pageContent">{children}</main>
      <Footer />
    </div>
  );
};
