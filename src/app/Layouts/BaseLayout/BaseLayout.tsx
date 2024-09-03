"use client";

import { Footer } from "@/components/Footer/Footer";
import './styles.scss'
import { DesktopHeader } from "@/components/Header/DesktopHeader/DesktopHeader";
import { MobileHeader } from "@/components/Header/MobileHeader/MobileHeader";
import { useWindowSize } from "@/hooks/useWindowSize";

export const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isMobile = useWindowSize ();

  return (
    <div className="layout">
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      <main className="m">{children}</main>
      <Footer />
    </div>
  );
};

