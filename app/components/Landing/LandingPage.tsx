import { Button } from "@/components/ui/button";
import Img from "@/public/image/frewinglas.jpg";
import Image from "next/image";
export default function LandingPage() {
  return (
    <div className="h-screen w-full items-center justify-center gap-5 flex flex-col bg-cover bg-top  ">
      <h1 className="text-6xl z-10 text-shadow text-shadow-blur-4">
        Frewinglas
      </h1>
      <p className="text-2xl z-10 text-shadow text-shadow-blur-4 max-w-3xl text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
        cumque quaerat repellendus.
      </p>
      <div className="flex gap-5 z-10">
        <Button className="text p-5 rounded-2xl" variant={"secondary"}>
          Nous contacter
        </Button>
        <Button className="text p-5 rounded-2xl" variant={"secondary"}>
          Notre portfolio
        </Button>
      </div>
      <Image
        src={Img}
        alt="frewinglas"
        height={500}
        width={500}
        className="absolute rounded-3xl object-cover top-[22%] h-4/5 w-96 left-20"
      />
      <Image
        src={Img}
        alt="frewinglas"
        height={500}
        width={500}
        className="absolute rounded-3xl object-cover top-1/3 h-3/4 w-96 right-20"
      />
    </div>
  );
}
