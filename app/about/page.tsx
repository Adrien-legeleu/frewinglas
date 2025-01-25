"use client";

import AboutGrid from "../components/About/AboutGrid";
import Approach from "../components/About/Approach";

export default function Page() {
  return (
    <div className="space-y-32">
      <div className="flex items-center h-[50vh] max-w-4xl mx-auto space-y-5 justify-end flex-col">
        <h1 className="text-4xl text-center font-semibold tracking-wider">
          À propos de Frewinglas
        </h1>
        <p className="text-muted-foreground text-lg text-center tracking-wider">
          Découvrez l'excellence et l'innovation de la menuiserie en aluminium
          avec des produits sur mesure fabriqués en France par Frewinglas.
        </p>
      </div>
      <AboutGrid />
      <Approach />
    </div>
  );
}
