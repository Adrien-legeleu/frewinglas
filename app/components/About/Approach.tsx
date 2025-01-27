import {
  IconEar,
  IconHeadset,
  IconRosetteDiscountCheckFilled,
} from "@tabler/icons-react";

export default function Approach() {
  return (
    <div className="md:h-screen h-full px-10 items-center justify-center flex flex-col gap-5 py-32">
      <h2 className="text-3xl  tracking-wider font-semibold text-center">
        Notre Approche Client
      </h2>
      <p className="max-w-xl text-center tracking-wide">
        Nous nous engageons � accompagner nos clients dans la r�alisation de
        leurs projets en leur offrant des solutions sur mesure et un service
        haut de gamme.
      </p>
      <div className="grid md:grid-cols-3  grid-cols-1 pt-10 gap-5 ">
        {ApproachList.map((item, index) => {
          return (
            <div className="w-full bg-[#181e2b] shadow-[0px_0px_15px_rgba(0,0,0,0.09)] lg:p-10 p-5 rounded-3xl space-y-3 relative overflow-hidden">
              <div className="w-24 h-24 bg-background brightness-[150%] rounded-full absolute -right-5 -top-7">
                <p className="absolute bottom-6 left-7 text-white text-2xl">
                  0{index + 1}
                </p>
              </div>
              <div className="text-secondary brightness-150 ">{item.icon}</div>
              <h1 className="font-bold lg:text-xl md:text-base text-lg">
                {item.title}
              </h1>
              <p className="lg:text-sm md:text-xs text-sm text-muted-foreground leading-loose">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
const ApproachList = [
  {
    title: "Écoute Active",
    desc: "Nous écoutons attentivement les besoins de nos clients pour garantir que nos solutions personnalisées répondent à leurs attentes.",
    icon: <IconEar className="w-20 h-20" />,
  },
  {
    title: "Expertise Technique",
    desc: "Des produits fabriqués en France avec les normes de qualité les plus élevées, garantissant une durabilité exceptionnelle.",
    icon: <IconRosetteDiscountCheckFilled className="w-20 h-20" />,
  },
  {
    title: "Engagement Continu",
    desc: "Nous nous engageons à accompagner nos clients tout au long du processus, en assurant un suivi continu et un service après-vente de qualité.",
    icon: <IconHeadset className="w-20 h-20" />,
  },
];
