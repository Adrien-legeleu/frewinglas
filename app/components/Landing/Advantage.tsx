"use client";
import Image from "next/image";
import Img1 from "@/public/advantage (6).png";
import Img2 from "@/public/advantage (4).png";
import Img3 from "@/public/advantage (5).png";
import { motion } from "framer-motion";

export default function Advantage() {
  return (
    <div className=" h-full w-full items-center sm:px-10 px-5 py-20  gap-5 justify-center flex flex-col">
      <h2 className="text-3xl tracking-wider text-center font-semibold">
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
      <ul className="grid md:grid-cols-3 grid-cols-1 lg:gap-10 gap-8pt-10 md:justify-center">
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
              className="md:space-y-5 max-sm:mb-5 max-md:grid max-md:grid-cols-2 max-[430px]:grid-cols-1 max-md:gap-10 max-[430px]:gap-2 items-center"
            >
              <Image
                className="rounded-3xl max-[430px]:px-10 lg:w-52 [430px]:w-40 w-52 pb-5 mx-auto    max-md:order-2 max-[430px]:order-1"
                src={advantage.src}
                alt="Frewinglas"
                width={500}
                height={500}
              />
              <div className="space-y-2 max-[430px]:order-2 ">
                <h3 className="text-base sm:text-lg md:text-xl max-[430px]:text-lg max-[430px]:text-center">
                  {advantage.title}
                </h3>
                <p className="tracking-wider sm:text-sm text-xs text-muted-foreground max-[430px]:text-sm  max-[430px]:text-center">
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
    src: Img2,
  },
  {
    title: "Design Personnalisé",
    desc: "Créez des espaces uniques avec nos menuiseries aluminium sur mesure, alliant style et fonctionnalité.",
    src: Img3,
  },
  {
    title: "Sécurité Renforcée",
    desc: "Garantissez la sécurité de votre habitat avec nos solutions robustes et des caractéristiques avancées de protection.",
    src: Img1,
  },
];
