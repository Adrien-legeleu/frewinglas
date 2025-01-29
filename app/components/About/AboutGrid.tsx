import Image from "next/image";
import Img from "@/public/3136a51.jpg";
import Img2 from "@/public/bg-fond.jpg";
import Img3 from "@/public/frewinglas-img-4.jpeg";

const content = [
  {
    title: "À Propos de Frewinglas",
    description: (
      <div className="space-y-4">
        <p>
          Frewinglas incarne l&apos;innovation et la qualité, dédiée à la
          menuiserie aluminium pour les professionnels en France, offrant un
          design extérieur et intérieur distinctif.
        </p>
        <p>
          Notre expertise depuis 2023 s&apos;illustre par des produits sur
          mesure alliant isolation thermique pointue, design minimaliste et
          sécurité renforcée.
        </p>
      </div>
    ),

    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <div className="relative  image-mask-container md:w-[550px] w-96  md:h-[550px] sm:h-96 h-80">
          <Image
            src={Img}
            width={800}
            height={800}
            alt="Base Image"
            className="base-image"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Notre Mission",
    description: (
      <div className="space-y-4">
        <p>
          Chez Frewinglas, notre mission est de révolutionner le secteur de la
          menuiserie en aluminium en introduisant des produits innovants,
          répondant aux normes les plus élevées de qualité et de sécurité, tout
          en offrant un service client inégalé réservé aux professionnels.
        </p>
      </div>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <div className="relative  image-mask-container md:w-[550px] w-96  md:h-[550px] sm:h-96 h-80">
          <Image
            src={Img3}
            width={500}
            height={500}
            alt="Base Image"
            className="base-image-2"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Nos Valeurs Fondamentales",
    description: (
      <div className="space-y-4">
        <p>
          <span className="font-medium"> Qualité Exceptionnelle :</span> Nous
          nous engageons à fournir des menuiseries aluminium de la plus haute
          qualité, fabriquées en France, pour répondre aux besoins les plus
          exigeants.
        </p>
        <p>
          <span className="font-medium"> Innovation continue :</span> Nous
          sommes passionnés par l&apos;innovation et nous nous efforçons
          d&apos;apporter en permanence de nouvelles idées et technologies à nos
          produits.
        </p>
        <p>
          <span className="font-medium"> Service Clientèle :</span> La
          satisfaction de nos clients est notre priorité absolue, nous nous
          engageons à offrir un service professionnel et personnalisé à chaque
          étape de notre relation.
        </p>
      </div>
    ),

    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <div className="relative  image-mask-container md:w-[550px] w-96  md:h-[550px] sm:h-96 h-80">
          <Image
            src={Img2}
            width={500}
            height={500}
            alt="Base Image"
            className="base-image-3"
          />
        </div>
      </div>
    ),
  },
];

export default function AboutGrid() {
  return (
    <ul className="px-10 space-y-16 ">
      {content.map((item, index) => (
        <li key={index}>
          <div className="grid  md:grid-cols-2 grid-cols-1 max-sm:text-center items-center md:gap-10 gap-5">
            <div
              className={`${index % 2 === 0 ? "order-1" : "md:order-2"} space-y-8`}
            >
              <h1 className="md:text-3xl text-2xl font-bold">{item.title}</h1>
              <div className="leading-loose  text-sm md:text-base">
                {item.description}
              </div>
            </div>
            <div
              className={`${index % 2 === 0 ? "order-2" : "md:order-1"} relative`}
            >
              {item.content}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
