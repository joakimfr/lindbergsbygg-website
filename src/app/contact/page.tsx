import { BaseLayout } from "@/Layouts/BaseLayout/BaseLayout";
import React from "react";

export default function Contact() {
  return (
    <BaseLayout>
      <h2>Kontakta Oss</h2>
      <form>
        <div>
          <label htmlFor="name">Namn</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">E-post</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Meddelande</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit">Skicka</button>
      </form>
    </BaseLayout>
  );
}
