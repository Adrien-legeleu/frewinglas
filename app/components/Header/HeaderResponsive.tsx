"use client";
import React, { useState } from "react";
import { Variants } from "motion/react";
import { Button } from "@/components/ui/button";

export default function HeaderResponsive() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHeader = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <label className="flex fixed flex-col  top-5 right-5 z-[100] gap-2 w-8">
        <input className="peer hidden" type="checkbox" onClick={handleHeader} />
        <div className="rounded-2xl h-[3px] w-1/2 bg-primary duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
        <div className="rounded-2xl h-[3px] w-full bg-primary duration-500 peer-checked:-rotate-45"></div>
        <div className="rounded-2xl h-[3px] w-1/2 bg-primary duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
      </label>

      <div
        className={` fixed top-0 left-0 h-screen w-full flex-col z-[99] bg-background items-center justify-center gap-10 ${isOpen ? "flex" : "hidden"} `}
      >
        <ul className="flex flex-col gap-5 text-lg tracking-wider font-semibold items-center justify-center">
          <li className="hover:text-primary cursor-pointer">
            <a href={"/"}>Home</a>
          </li>
          <li className="hover:text-primary cursor-pointer">
            <a href={"/about"}>A propos</a>
          </li>
          <li className="hover:text-primary cursor-pointer">
            <a href={"/products"}>Produits</a>
          </li>
          <li className="hover:text-primary cursor-pointer">
            <a href={"/blog"}>Blog</a>
          </li>
        </ul>
        <Button className="p-6 rounded-2xl" variant={"secondary"}>
          Contactez-nous
        </Button>
      </div>
    </>
  );
}
