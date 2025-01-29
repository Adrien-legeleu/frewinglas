"use client";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function About2() {
  return (
    <div className="flex items-center gap-5 flex-col max-w-xl mx-auto px-10 text-center ">
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        viewport={{ amount: 0.5 }}
        className="text-3xl font-semibold tracking-wider text-center"
      >
        À propos
      </motion.h2>

      <TextAnimate
        animation="blurInUp"
        by="word"
        delay={0}
        className="tracking-wide text-muted-foreground sm:text-lg "
      >
        Frewinglas incarne l&apos;innovation et l&apos;excellence dans la
        menuiserie aluminium pour les professionnels en France, en proposant des
        designs minimalistes particulièrement prisés par les architectes et les
        spécialistes du bâtiment.
      </TextAnimate>

      <TextAnimate
        animation="blurInUp"
        by="word"
        delay={3}
        className="tracking-wide text-muted-foreground sm:text-lg "
      >
        Grâce à notre expertise, nous concrétisons des projets uniques,
        qu&apos;ils soient modestes ou ambitieux, tout en maintenant une qualité
        irréprochable.
      </TextAnimate>

      <ul className="flex flex-col text-muted-foreground max-sm:text-sm items-center gap-2 mx-auto max-w-auto">
        <motion.li
          initial={{ y: 40, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          viewport={{ amount: 0.5 }}
          className="flex items-center gap-2"
        >
          <IconCircleCheckFilled className="text-[#ACD634]" />
          Isolation Thermique de Pointe
        </motion.li>

        <motion.li
          initial={{ y: 40, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          viewport={{ amount: 0.5 }}
          className="flex items-center gap-2"
        >
          <IconCircleCheckFilled className="text-[#ACD634]" />
          Sécurité Optimale et Personnalisée
        </motion.li>
        <motion.li
          initial={{ y: 40, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          viewport={{ amount: 0.5 }}
          className="flex items-center gap-2"
        >
          <IconCircleCheckFilled className="text-[#ACD634]" />
          Design Minimaliste Apprécié
        </motion.li>
      </ul>
      <Button className="p-5 rounded-2xl mt-5">
        Prenez contact dès maintenant !
      </Button>
    </div>
  );
}
