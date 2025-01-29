import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo-removebg-preview.png";

export default function Footer() {
  return (
    <div className="bg-background text-foreground p-10  max-w-[1400px] mx-auto">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <Image
            src={Logo}
            alt="Logo Frewinglass"
            width={500}
            height={500}
            className="rounded-lg w-40"
          />
          <p className="text-sm text-muted-foreground text-center lg:text-left">
            Frewinglass, spécialiste en solutions modernes et durables pour vos
            espaces de vie.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-end gap-4">
          <ul className="flex flex-col gap-3 text-lg font-medium items-center lg:items-end">
            <li className="hover:text-primary">
              <Link href="/">Accueil</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/about">À Propos</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/products">Produits</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-muted pt-6 flex gap-8 items-center justify-center text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Frewinglass. Tous droits réservés.
        </p>
        <p className="text-sm text-muted-foreground">
          <Link href="/mentions-legales" className="hover:text-primary">
            Mentions légales
          </Link>
        </p>
        <p className="text-sm text-muted-foreground">
          Par{" "}
          <a
            href="https://ikovaline.com"
            target="_blank"
            className="hover:text-primary font-semibold"
          >
            Ikovaline
          </a>
        </p>
      </div>
    </div>
  );
}
