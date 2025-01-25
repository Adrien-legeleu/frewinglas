"use client";
import Image from "next/image";
import Img from "@/public/image/frewinglas.jpg";
import { motion } from "framer-motion";

export default function Advantage() {
  return (
    <div className="h-screen w-full items-center px-10 py-32 gap-5 justify-center flex flex-col">
      <h2 className="text-3xl tracking-wider font-semibold">
        Avantages des Menuiseries Frewinglas
      </h2>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        viewport={{ amount: 0.5 }}
        className="max-w-2xl text-center"
      >
        Découvrez les atouts de nos menuiseries en aluminium sur mesure :
        performance, design, et sécurité. Des solutions idéales pour sublimer
        vos projets architecturaux.
      </motion.p>
      <ul className="grid grid-cols-3 gap-10 pt-10 justify-center">
        {AdvantageList.map((advantage, index) => {
          return (
            <motion.li
              initial={{ y: 40, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.3 * index,
                },
              }}
              viewport={{ amount: 0 }}
              key={index}
              className="space-y-5"
            >
              <Image
                className="rounded-3xl"
                src={advantage.src}
                alt="Frewinglas"
                width={500}
                height={500}
              />
              <div className="space-y-2">
                <h3 className="text-xl">{advantage.title}</h3>
                <p className="tracking-wider text-sm text-muted-foreground">
                  {advantage.desc}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

const AdvantageList = [
  {
    title: "Isolation Optimale",
    desc: "Profitez d'une isolation thermique de qualité supérieure pour un confort inégalé toute l'année.",
    src: Img,
  },
  {
    title: "Design Personnalisé",
    desc: "Créez des espaces uniques avec nos menuiseries aluminium sur mesure, alliant style et fonctionnalité.",
    src: Img,
  },
  {
    title: "Sécurité Renforcée",
    desc: "Garantissez la sécurité de votre habitat avec nos solutions robustes et des caractéristiques avancées de protection.",
    src: Img,
  },
];
