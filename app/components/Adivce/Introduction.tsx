"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <div className="flex flex-col gap-10 max-w-xl mx-auto text-center items-center justify-center h-full">
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        viewport={{ amount: 0.5 }}
        className="text-muted-foreground text-lg text-center tracking-wider"
      >
        Découvrez l'excellence et l'innovation de la menuiserie en aluminium
        avec des produits sur mesure fabriqués en France par Frewinglas.
      </motion.p>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        viewport={{ amount: 0.5 }}
        className="text-muted-foreground text-lg text-center tracking-wider"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque id ex
        quis quaerat, voluptate distinctio cumque laudantium! Dolorem et,
        officia itaque omnis ipsum repellat fugit quae minus reprehenderit
        perspiciatis quod laborum praesentium.
      </motion.p>
    </div>
  );
}
