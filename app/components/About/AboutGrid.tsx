import Image from "next/image";
import Img from "@/public/image/frewinglas.jpg";
const content = [
  {
    title: "À Propos de Frewinglas",
    description:
      "Frewinglas incarne l’innovation et la qualité, dédiée à la menuiserie aluminium pour les professionnels en France, offrant un design extérieur et intérieur distinctif. Notre expertise depuis 2023 s’illustre par des produits sur mesure alliant isolation thermique pointue, design minimaliste et sécurité renforcée.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
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
      "Chez Frewin, notre mission est de révolutionner le secteur de la menuiserie en aluminium en introduisant des produits innovants, répondant aux normes les plus élevées de qualité et de sécurité, tout en offrant un service client inégalé réservé aux professionnels.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
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
      "Qualité Exceptionnelle : Nous nous engageons à fournir des menuiseries aluminium de la plus haute qualité, fabriquées en France, pour répondre aux besoins les plus exigeants. Innovation continue : Nous sommes passionnés par l’innovation et nous nous efforçons d’apporter en permanence de nouvelles idées et technologies à nos produits. Service Clientèle : La satisfaction de nos clients est notre priorité absolue, nous nous engageons à offrir un service professionnel et personnalisé à chaque étape de notre relation.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
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
