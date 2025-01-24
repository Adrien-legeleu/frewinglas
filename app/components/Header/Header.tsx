import Image from "next/image";
import Img from "@/public/image/frewinglas.jpg";
import { Button } from "@/components/ui/button";
export default function Header() {
  return (
    <div className="fixed top-2 w-auto left-1/2  z-[100] bg-background rounded-3xl -translate-x-1/2 gap-28 flex items-center justify-between p-5">
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
      <ul className="flex gap-5 items-center justify-center whitespace-nowrap">
        <li className="hover:text-primary cursor-pointer">Home</li>
        <li className="hover:text-primary cursor-pointer">A propos</li>
        <li className="hover:text-primary cursor-pointer">Gammes</li>
        <li className="hover:text-primary cursor-pointer">Blog</li>
      </ul>
      <Button className="p-5 rounded-2xl">Contactez-nous</Button>
    </div>
  );
}
