import React from "react";
import Introduction from "../components/Adivce/Introduction";
import Advices from "../components/Adivce/Advices";
import FAQ from "../components/Adivce/FAQ";

export default function page() {
  return (
    <div className="space-y-32">
      <Introduction />
      <Advices />
      <FAQ />
    </div>
  );
}
