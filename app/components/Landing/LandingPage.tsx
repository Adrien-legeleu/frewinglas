import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="h-screen w-full px-10 items-center justify-center gap-5 flex flex-col bg-cover bg-[url(/ASS_77_PD_m_aussen_Villa_Detail-01.jpg)] bg-center">
      <h1 className="text-6xl z-10 text-shadow-sm text-shadow-blur-[50px]">
        Frewinglas
      </h1>
      <p className="text-2xl z-10 text-shadow-sm text-shadow-blur-[20px] max-w-3xl leading-relaxed text-center">
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
    </div>
  );
}
