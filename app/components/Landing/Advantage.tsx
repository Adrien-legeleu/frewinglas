"use client";
import Image from "next/image";
import Img from "@/public/image/frewinglas.jpg";
import { motion } from "framer-motion";

export default function Advantage() {
  return (
    <div className="h-screen w-full items-center px-10 py-32 gap-5 justify-center flex flex-col">
      <h2 className="text-3xl tracking-wider font-semibold">
        Menuiseries de qualités
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ab,
        rerum voluptatem deleniti dolorem doloribus quidem velit maxime!
        Perferendis quibusdam quia aspernatur at laborum, ducimus veritatis
        minus cupiditate. Consequatur dolorum mollitia odio?
      </motion.p>
      <ul className="grid grid-cols-3 gap-10 pt-10   justify-center ">
        {AdvantageList.map((advatage, index) => {
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
                src={advatage.src}
                alt="Frewinglas"
                width={500}
                height={500}
              />
              <div className="space-y-2">
                <h3 className="text-xl">{advatage.title}</h3>
                <p className="tracking-wider text-sm text-muted-foreground">
                  {advatage.desc}
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
    desc: "Profitez d'une isolation thermique performante pour un confort optimal en toutes saisons.",
    src: Img,
  },
  {
    title: "Design Sur-Mesure",
    desc: "Personnalisez entièrement le design de vos espaces avec nos menuiseries aluminium uniques.",
    src: Img,
  },
  {
    title: "Sécurité Garantie",
    desc: "Assurez la protection de vos proches et de vos biens avec nos produits aux caractéristiques de sécurité renforcées.",
    src: Img,
  },
];
