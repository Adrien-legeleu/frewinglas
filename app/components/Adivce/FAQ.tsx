"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Quels sont les avantages des menuiseries en aluminium ?",
    answer:
      "L'aluminium est léger, durable et ne rouille pas. Il permet de créer des structures fines et élégantes tout en nécessitant peu d’entretien.",
  },
  {
    question: "Comment entretenir ses fenêtres et portes en aluminium ?",
    answer:
      "Un simple nettoyage à l’eau savonneuse suffit. Il est recommandé d’éviter les produits abrasifs pour préserver la finition.",
  },
  {
    question: "L’aluminium est-il un bon isolant thermique ?",
    answer:
      "Seul, l'aluminium conduit la chaleur, mais avec une rupture de pont thermique et un bon vitrage, il offre une excellente isolation.",
  },
  {
    question: "Peut-on personnaliser la couleur des menuiseries en aluminium ?",
    answer:
      "Oui, grâce au thermolaquage, l’aluminium est disponible dans une large gamme de couleurs et finitions (mat, brillant, texturé, imitation bois).",
  },
  {
    question: "L’aluminium est-il plus résistant que le PVC ?",
    answer:
      "L’aluminium est plus robuste et durable, permettant des fenêtres plus grandes et plus fines, tout en étant 100% recyclable.",
  },
  {
    question: "Comment renforcer la sécurité des ouvertures en aluminium ?",
    answer:
      "L’ajout de vitrages feuilletés, de serrures multipoints et de renforts spécifiques permet d’améliorer la sécurité.",
  },
  {
    question:
      "Les menuiseries en aluminium sont-elles adaptées aux maisons passives ?",
    answer:
      "Oui, certains modèles sont conçus pour répondre aux normes des maisons passives, garantissant une isolation thermique optimale.",
  },
];

export default function FAQ() {
  return (
    <div className="max-w-5xl py-20 space-y-12 mx-auto px-5">
      <Accordion type="single" className="gap-2 flex flex-col" collapsible>
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            viewport={{ amount: 0.5 }}
          >
            <AccordionItem
              value={`item-${index + 1}`}
              className="bg-background brightness-90 py-2 px-4 shadow-2xl shadow-[#ffffff15] "
            >
              <AccordionTrigger className="py-4 ">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
}
