import { Button } from "@/components/ui/button";
import Img1 from "@/public/breton.jpg";
import Img2 from "@/public/IMG_1042.png";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="h-screen w-full px-10 items-center justify-center gap-5 flex flex-col bg-cover bg-top">
      <h1 className="text-6xl z-10 text-shadow text-shadow-blur-4">
        Frewinglas
      </h1>
      <p className="text-2xl z-10 text-shadow-sm text-shadow-blur-8 max-w-3xl leading-relaxed text-center">
        Spécialisé dans la fabrication de produits métalliques sur mesure,
        Frewinglas offre des solutions durables et esthétiques pour tous vos
        projets architecturaux.
      </p>
      <div className="flex gap-5 z-10">
        <Button className="text p-6 rounded-2xl" variant={"secondary"}>
          Nous contacter
        </Button>
        <Button className="text p-6 rounded-2xl" variant={"secondary"}>
          Notre portfolio
        </Button>
      </div>
      <Image
        src={Img1}
        alt="Fabrication métallique Frewinglas"
        height={500}
        width={500}
        className="absolute rounded-3xl brightness-[80%] object-cover md:top-[22%] top-[5%] lg:h-4/5 md:h-1/2 sm:h-64 h-52 w-64 md:w-72 lg:w-80 xl:w-96 lg:left-20 left-10"
      />
      <Image
        src={Img2}
        alt="Produits métalliques sur mesure Frewinglas"
        height={500}
        width={500}
        className="absolute rounded-3xl brightness-[80%] object-cover md:top-1/3 bottom-[5%] lg:h-3/4 md:h-1/2 sm:h-64 h-52 w-64 md:w-72 lg:w-80 xl:w-96 lg:right-20 right-10"
      />
    </div>
  );
}
