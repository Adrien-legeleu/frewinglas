import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="h-screen w-full px-10 items-center justify-center gap-10 flex flex-col bg-cover  from-black via-gray-700 to-white bg-[url(/bg-fond-mobile.jpg)] sm:bg-[url(/bg-fond.jpg)] sm:bg-center bg-left relative">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0) 80%)",
        }}
      />
      <h1 className="text-6xl z-10 text-shadow text-[#ffffee] font-semibold">
        Frewinglas
      </h1>
      <p className="md:text-2xl text-xl sm:text-lg z-10 text-white text-shadow backdrop-blur-[1px] rounded-3xl font-semibold max-w-3xl leading-relaxed text-center">
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
