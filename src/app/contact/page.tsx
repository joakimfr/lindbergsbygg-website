import { PagesLayout } from "../Layouts/PagesLayout/PagesLayout";
import React from "react";
import "./styles.scss";
import Image from "next/image";
import { Form } from "./components/Form/Form";
import { ContactDetails } from "./components/ContactDetails/ContactDetails";

export default function Contact() {
  return (
    <PagesLayout>
      <div className="contentWrapper">
        <section className="content">
          <p className="content__text">
            Om du är i behov av renovering eller att bygga nytt, tveka inte att
            kontakta oss. Maila eller ring oss så ordnar vi en kostnadsfri
            offert.
          </p>
          <Form />
        </section>
        <ContactDetails />
      </div>
    </PagesLayout>
  );
}
