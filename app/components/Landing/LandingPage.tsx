import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="h-screen w-full px-10 items-center pt-32 gap-10 flex flex-col bg-cover  from-black via-gray-700 to-white bg-[url(/bg-fond-mobile.jpg)] sm:bg-[url(/bg-fond.jpg)] sm:bg-center bg-left relative">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 0, 0, 0.55) 20%, rgba(0, 0, 0, 0) 80%)",
        }}
      />
      <h1 className="md:text-6xl text-5xl z-10  text-[#ffffee] font-semibold">
        Frewinglas
      </h1>
      <p className="md:text-2xl text-xl sm:text-lg [430px]:text-base z-10 text-white  font-semibold max-w-3xl leading-relaxed text-center">
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
