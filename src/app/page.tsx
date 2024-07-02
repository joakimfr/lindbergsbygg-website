import { BaseLayout } from "@/Layouts/BaseLayout/BaseLayout";
import Image from "next/image";

export default function Home() {
  return (
    <BaseLayout>
      <div className='imageContainer'>
        <Image
          src="/rooftop.webp"
          alt="Plåtslageri Företag"
          width={800} 
          height={600} 
        />
      </div>
    </BaseLayout>
  );
}
