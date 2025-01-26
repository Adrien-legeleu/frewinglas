"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";
import Img from "@/public/image/frewinglas.jpg";

export function ReviewResponsive() {
  return (
    <div className="flex lg:hidden   flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={reviewList} direction="right" speed="slow" />
    </div>
  );
}

const reviewList = [
  {
    name: "Florent Ghizzoni - Ikovaline",
    review:
      "Entreprise sérieuse, avec des produits de qualité. Je recommande vivement.",
    image: Img,
  },
  {
    name: "Julie Duboi",
    review:
      "Les solutions de Frewinglas offrent un équilibre parfait entre design et fonctionnalité. Une excellente expérience !",
    image: Img,
  },
  {
    name: "Marc Leroy",
    review:
      "Le service client est impeccable et les produits sont d'une qualité exceptionnelle.",
    image: Img,
  },
];
