"use client";
import Image from "next/image";
import ImgFrewinglas from "@/public/bg-fond.jpg";
import { motion } from "motion/react";
export default function About() {
  return (
    <div className="w-full h-full flex flex-col gap-10 px-10 items-center justify-center">
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        viewport={{ amount: 0.5 }}
        className="max-w-xl font-semibold text-3xl tracking-wider text-center"
      >
        Frewinglas, Menuiserie minimaliste haut de gamme de grande taille
      </motion.h2>
      <Image
        src={ImgFrewinglas}
        alt="Frewinglas"
        width={500}
        height={500}
        className="rounded-3xl md:w-3/4 w-full lg:h-[500px] h-[400px] object-cover shadow-xl"
      />
    </div>
  );
}
