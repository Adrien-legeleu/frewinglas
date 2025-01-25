import Image from "next/image";
import Img from "@/public/image/frewinglas.jpg";

const content = [
  {
    title: "� Propos de Frewin????",
    description:
      "Frewinglas incarne l’innovation et la qualit�, d�di�e � la menuiserie aluminium pour les professionnels en France, offrant un design ext�rieur et int�rieur distinctif.Notre expertise depuis 2023 s’illustre par des produits sur mesure alliant isolation thermique pointue, design minimaliste et s�curit� renforc�e.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Img}
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Notre Mission",
    description:
      "Chez Frewin????, notre mission est de r�volutionner le secteur de la menuiserie en aluminium en introduisant des produits innovants, r�pondant aux normes les plus �lev�es de qualit� et de s�curit�, tout en offrant un service client in�gal� r�serv� au professionnels",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Img}
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Nos Valeurs Fondamentales",
    description:
      "Qualit� Exceptionnelle : Nous nous engageons � fournir des menuiseries aluminium de la plus haute qualit�, fabriqu�es en France, pour r�pondre aux besoins les plus exigeants.Innovation continue : Nous sommes passionn�s par l�innovation et nous nous effor�ons d�apporter en permanence de nouvelles id�es et technologies � nos produits.Service Client�le : La satisfaction de nos clients est notre priorit� absolue, nous nous engageons � offrir un service professionnel et personnalis� � chaque �tape de notre relation.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Img}
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export default function AboutGrid() {
  return (
    <ul className="px-10 space-y-16">
      {content.map((item, index) => (
        <li key={index}>
          <div className="grid grid-cols-2 items-center gap-10">
            <div
              className={`${index % 2 === 0 ? "order-1" : "order-2"} space-y-5`}
            >
              <h1 className="text-3xl font-bold">{item.title}</h1>
              <p className="leading-loose">{item.description}</p>
            </div>
            <div className={`${index % 2 === 0 ? "order-2" : "order-1"}`}>
              {item.content}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
