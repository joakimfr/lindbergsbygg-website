import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import './styles.scss'

export const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="m">{children}</main>
      <Footer />
    </div>
  );
};

