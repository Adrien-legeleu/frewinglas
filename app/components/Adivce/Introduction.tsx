"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <div className="flex flex-col h-full gap-8 max-w-2xl mx-auto text-center items-center justify-center  px-5">
      <h1 className="text-4xl text-center font-semibold tracking-wider">
        À propos de Frewinglas
      </h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
        viewport={{ amount: 0.5 }}
        className="text-muted-foreground sm:text-xl text-base font-medium text-center tracking-wider leading-relaxed"
      >
        Optimisez l&apos;efficacité énergétique et la durabilité de vos fenêtres
        et portes avec des solutions de menuiserie en aluminium sur mesure.
      </motion.p>

      <motion.p
        initial={{ y: 40, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
        viewport={{ amount: 0.5 }}
        className="text-muted-foreground sm:text-xl text-base font-medium text-center tracking-wider leading-relaxed"
      >
        Découvrez nos conseils et astuces pour améliorer la performance de vos
        installations tout en réduisant vos dépenses énergétiques.
      </motion.p>
    </div>
  );
}
