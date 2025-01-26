"use client";
import Image from "next/image";
import Img from "@/public/image/frewinglas.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderResponsive from "./HeaderResponsive";
export default function Header() {
  const [isResponsive, setIsResponsive] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 868) {
      setIsResponsive(false);
    } else {
      setIsResponsive(true);
    }
  }, []);

  return (
    <>
      {isResponsive ? (
        <HeaderResponsive />
      ) : (
        <div className="fixed top-2 w-auto left-1/2  z-[100] bg-background rounded-3xl -translate-x-1/2 gap-28 flex items-center justify-between p-5">
          <Link href={"/"} className="cursor-pointer">
            <div className="flex items-center gap-2">
              <Image
                src={Img}
                alt="frewinglas logo"
                width={30}
                height={30}
                className="rounded-full h-8 w-8"
              />
              <span className="text-xl">Frewinglas</span>
            </div>
          </Link>
          <ul className="flex gap-5 items-center justify-center whitespace-nowrap">
            <li className="hover:text-primary cursor-pointer">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <Link href={"/about"}> A propos</Link>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <Link href={"/products"}>Produits</Link>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <Link href={"/blog"}>Blog</Link>
            </li>
          </ul>
          <Link href={"/contact"}>
            {" "}
            <Button className="p-5 rounded-2xl">Contactez-nous</Button>
          </Link>
        </div>
      )}
    </>
  );
}
