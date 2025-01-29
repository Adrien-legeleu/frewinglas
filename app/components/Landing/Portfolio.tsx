"use client";
import { LayoutGrid } from "@/components/ui/layout-grid";
import Img1 from "@/public/frewinglas-img2.jpg";
import Img2 from "@/public/3136a51.jpg";
import Img3 from "@/public/frewinglas-img3.jpg";
import Img4 from "@/public/IMG_1042.png";
import Img5 from "@/public//breton.jpg";
import Img6 from "@/public/IMG_1047.png";
import { motion } from "motion/react";

export default function Portfolio() {
  return (
    <div className="h-full  w-full flex items-center justify-center flex-col">
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
    thumbnail: Img1,
  },
  {
    id: 2,
    content: <div />,
    className: "md:col-span-2 col-span-2",
    thumbnail: Img2,
  },
  {
    id: 3,
    content: <div />,
    className: "md:col-span-2 col-span-5",
    thumbnail: Img3,
  },
  {
    id: 4,
    content: <div />,
    className: "md:col-span-2 col-span-2",
    thumbnail: Img4,
  },
  {
    id: 5,
    content: <div />,
    className: "md:col-span-2 col-span-3",
    thumbnail: Img5,
  },
  {
    id: 6,
    content: <div />,
    className: "md:col-span-1 col-span-5",
    thumbnail: Img6,
  },
];
