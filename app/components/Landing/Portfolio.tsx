"use client";
import { LayoutGrid } from "@/components/ui/layout-grid";
import Img from "@/public/image/frewinglas.jpg";
import { motion } from "motion/react";

export default function Portfolio() {
  return (
    <div className="h-full py-32 w-full flex items-center justify-center flex-col">
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        viewport={{ amount: 0.5 }}
        className="text-3xl font-semibold tracking-wider"
      >
        Notre Portfolio
      </motion.h2>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const cards = [
  {
    id: 1,
    content: <div />,
    className: "md:col-span-1 col-span-3",
    thumbnail: Img,
  },
  {
    id: 2,
    content: <div />,
    className: "md:col-span-2 col-span-2",
    thumbnail: Img,
  },
  {
    id: 3,
    content: <div />,
    className: "md:col-span-2 col-span-2",
    thumbnail: Img,
  },
  {
    id: 4,
    content: <div />,
    className: "md:col-span-2 col-span-4",
    thumbnail: Img,
  },
  {
    id: 5,
    content: <div />,
    className: "md:col-span-2 col-span-2",
    thumbnail: Img,
  },
  {
    id: 6,
    content: <div />,
    className: "md:col-span-1 col-span-3",
    thumbnail: Img,
  },
];
