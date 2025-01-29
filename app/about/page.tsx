"use client";

import AboutGrid from "../components/About/AboutGrid";
import Approach from "../components/About/Approach";

export default function Page() {
  return (
    <div className="sm:space-y-32 space-y-20  max-w-[1400px] mx-auto">
      <div className="flex items-center md:pt-32 pt-16  max-w-4xl mx-auto space-y-5  px-10 flex-col">
        <h1 className="text-4xl text-center font-semibold tracking-wider">
          À propos de Frewinglas
        </h1>
        <p className="text-muted-foreground text-lg text-center tracking-wider">
          Découvrez l&apos;excellence et l&apos;innovation de la menuiserie en
          aluminium avec des produits sur mesure fabriqués en France par
          Frewinglas.
        </p>
      </div>
      <AboutGrid />
      <Approach />
    </div>
  );
}
