import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-full items-center justify-center flex flex-col">
        <h1>Frewinglas</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          cumque quaerat repellendus.
        </p>
      </div>
      <div>
        <h2>
          Frewinglas, Menuiserie minimaliste haut de gamme de grande taille
        </h2>
        <Image src="" alt="Frewinglas" width={500} height={500} />
      </div>
      <div className="h-screen w-full items-center justify-center flex flex-col">
        <h2>Menuiseries de qualités</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ab,
          rerum voluptatem deleniti dolorem doloribus quidem velit maxime!
          Perferendis quibusdam quia aspernatur at laborum, ducimus veritatis
          minus cupiditate. Consequatur dolorum mollitia odio?
        </p>
        <ul>
          <li>
            <Image src="" alt="Frewinglas" width={500} height={500} />
            <h3>islotation Optimale</h3>
            <p>
              Profitez d"une isolation thermique performante pour un confort
              optimal en toutes saisons.
            </p>
          </li>
          <li>
            <Image src="" alt="Frewinglas" width={500} height={500} />
            <h3>Design Sur-Mesure</h3>
            <p>
              Personnalisez entièrement le design de vos espaces avec nos
              menuiseries aluminium uniques.
            </p>
          </li>
          <li>
            <Image src="" alt="Frewinglas" width={500} height={500} />
            <h3>Sécurité Garantie</h3>
            <p>
              Assurez la protection de vos proches et de vos biens avec nos
              produits aux caractéristiques de sécurité renforcées.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
