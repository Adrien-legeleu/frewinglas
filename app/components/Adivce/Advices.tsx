import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  IconRecycle,
  IconBrush,
  IconSun,
  IconShieldCheck,
  IconPalette,
  IconTrendingUp,
} from "@tabler/icons-react";
export default function Advices() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={advices} />
    </div>
  );
}

export const advices = [
  {
    title: "L'aluminium : 100% recyclable",
    description:
      "Saviez-vous que l'aluminium est entièrement recyclable sans perte de qualité ? Un choix écologique pour vos menuiseries.",

    icon: <IconRecycle className="h-full w-full text-muted-foreground " />,
  },
  {
    title: "Entretien minimal",
    description:
      "Un simple nettoyage annuel avec de l'eau savonneuse suffit pour maintenir l'éclat de vos fenêtres en aluminium.",

    icon: <IconBrush className="w-full h-full p-1 text-muted-foreground" />,
  },
  {
    title: "Profils fins pour plus de lumière",
    description:
      "Les profils en aluminium permettent d'augmenter la surface vitrée, apportant jusqu'à 20% de luminosité supplémentaire.",

    icon: <IconSun className="h-full w-full text-muted-foreground" />,
  },
  {
    title: "Durabilité exceptionnelle",
    description:
      "Les fenêtres en aluminium résistent aux intempéries et à la corrosion, assurant une longue durée de vie.",

    icon: <IconShieldCheck className="h-full w-full text-muted-foreground" />,
  },
  {
    title: "Personnalisation infinie",
    description:
      "Avec une vaste gamme de couleurs et de finitions, l'aluminium s'adapte à tous les styles architecturaux.",

    icon: <IconPalette className="h-full w-full text-muted-foreground" />,
  },
  {
    title: "Investissement rentable",
    description:
      "Bien que l'aluminium puisse être plus coûteux à l'achat, sa durabilité et sa faible maintenance en font un investissement judicieux à long terme.",

    icon: <IconTrendingUp className="h-full w-full text-muted-foreground" />,
  },
];
