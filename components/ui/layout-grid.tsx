"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: StaticImageData;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  // const handleOutsideClick = () => {
  //   setLastSelected(selected);
  //   setSelected(null);
  // };

  return (
    <div className="w-full h-full sm:p-10 p-5 grid  grid-cols-5 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              lastSelected?.id === card.id
                ? "z-40 bg-white rounded-3xl sm:h-80 [430px]:h-64 h-48  w-full"
                : "bg-white rounded-3xl sm:h-80 [430px]:h-64 h-48 w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <Image
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "object-cover   absolute inset-0 h-full w-full transition duration-200"
      )}
      alt="thumbnail"
    />
  );
};

// const SelectedCard = ({ selected }: { selected: Card | null }) => {
//   return (
//     <div className="bg-transparent h-[640px] w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
//       <motion.div
//         initial={{
//           opacity: 0,
//         }}
//         animate={{
//           opacity: 0.6,
//         }}
//         className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
//       />
//       <motion.div
//         layoutId={`content-${selected?.id}`}
//         initial={{
//           opacity: 0,
//           y: 100,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         exit={{
//           opacity: 0,
//           y: 100,
//         }}
//         transition={{
//           duration: 0.3,
//           ease: "easeInOut",
//         }}
//         className="relative px-8 pb-4 z-[70]"
//       >
//         {selected?.content}
//       </motion.div>
//     </div>
//   );
// };
