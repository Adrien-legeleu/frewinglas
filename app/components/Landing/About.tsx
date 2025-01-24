import Image from "next/image";
import ImgFrewinglas from "@/public/image/frewinglas.jpg";
export default function About() {
  return (
    <div className="w-full h-full flex py-32 flex-col gap-10 items-center justify-center">
      <h2 className="max-w-xl text-3xl tracking-wider text-center">
        Frewinglas, Menuiserie minimaliste haut de gamme de grande taille
      </h2>
      <Image
        src={ImgFrewinglas}
        alt="Frewinglas"
        width={500}
        height={500}
        className="rounded-3xl w-1/2"
      />
    </div>
  );
}
