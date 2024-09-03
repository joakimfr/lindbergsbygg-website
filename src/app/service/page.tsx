import { PagesLayout } from "@/app/Layouts/PagesLayout/PagesLayout";
import React from "react";
import './styles.scss'
import Image from "next/image";

export default function Service() {
  return (
    <PagesLayout>
      <div className="services">
          <h2>Snickeri</h2>
          <div className="services__image">
            <Image
              src="/deck.png"
              alt="Plåtslageri Företag"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
    </PagesLayout>
  );
}
