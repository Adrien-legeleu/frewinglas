"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeaderResponsive() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHeader = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="flex fixed flex-col top-10 right-6 z-[100] gap-2 w-10 cursor-pointer"
        onClick={handleHeader}
      >
        <div
          className={`rounded-2xl h-[4px] shadow-lg w-1/2 bg-primary duration-500 transform ${
            isOpen
              ? "rotate-[225deg] origin-right -translate-x-[12px] -translate-y-[1px]"
              : ""
          }`}
        ></div>
        <div
          className={`rounded-2xl h-[4px] shadow-lg w-full bg-primary duration-500 ${
            isOpen ? "-rotate-45" : ""
          }`}
        ></div>
        <div
          className={`rounded-2xl h-[4px] shadow-2xl w-1/2 bg-primary duration-500 place-self-end transform ${
            isOpen
              ? "rotate-[225deg] origin-left translate-x-[12px] translate-y-[1px]"
              : ""
          }`}
        ></div>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-full flex-col z-[99] bg-background items-center duration-300 ease-in-out flex justify-center gap-10 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-5 text-lg tracking-wider font-semibold items-center justify-center">
          <li
            className="hover:text-primary cursor-pointer"
            onClick={handleHeader}
          >
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className="hover:text-primary cursor-pointer"
            onClick={handleHeader}
          >
            <Link href={"/about"}>A Propos</Link>
          </li>
          <li
            className="hover:text-primary cursor-pointer"
            onClick={handleHeader}
          >
            <Link href={"/products"}>Produits</Link>
          </li>
          <li
            className="hover:text-primary cursor-pointer"
            onClick={handleHeader}
          >
            <Link href={"/advice"}>Conseils</Link>
          </li>
        </ul>
        <Link href={"/contact"} onClick={handleHeader}>
          <Button className="p-6 rounded-2xl" variant={"secondary"}>
            Contactez-nous
          </Button>
        </Link>
      </div>
    </>
  );
}
