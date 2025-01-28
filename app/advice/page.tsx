import React from "react";
import Introduction from "../components/Adivce/Introduction";
import Advices from "../components/Adivce/Advices";
import FAQ from "../components/Adivce/FAQ";

export default function page() {
  return (
    <div>
      <div className="flex items-center h-[50vh] max-w-4xl mx-auto space-y-5 [868px]:justify-end justify-center px-10 flex-col">
        <h1 className="text-4xl text-center font-semibold tracking-wider">
          À propos de Frewinglas
        </h1>
      </div>
      <Introduction />
      <Advices />
      <FAQ />
    </div>
  );
}
