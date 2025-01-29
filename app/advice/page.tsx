import React from "react";
import Introduction from "../components/Adivce/Introduction";
import Advices from "../components/Adivce/Advices";
import FAQ from "../components/Adivce/FAQ";

export default function page() {
  return (
    <div className="sm:space-y-32 space-y-20  max-w-[1400px] mx-auto">
      <Introduction />
      <Advices />
      <FAQ />
    </div>
  );
}
