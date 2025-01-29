"use client";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import Img1 from "@/public/image/products/ASS41.jpg";
import Img2 from "@/public/image/products/ASS50.jpg";
import Img3 from "@/public/image/products/AWS 60.jpg";
import Img4 from "@/public/image/products/AWS 90 BS.SI+.jpg";
import Img5 from "@/public/image/products/AWS 90.SI+.jpg";
import Img6 from "@/public/image/products/AWS60BD.jpg";
import Img7 from "@/public/image/products/aws_60_1_schnitt.jpg";
import Img8 from "@/public/image/products/aws_75_bs.hi.jpg";

interface ProductProps {
  name: string;
  description: string;
  technicalFeatures: string;
  design: string;
  usage: string;
  durability: string;
  security: string;
  summary: string;
}

export default function ProductsGrid() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full  sm:px-10 px-5">
      <Carousel items={cards} />
    </div>
  );
}
const ProductDetails = ({ product }: { product: ProductProps }) => (
  <div className="p-5 border rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6">{product.name}</h2>
    <p className="mb-8 text-muted-foreground">{product.description}</p>

    <div className="mb-8 space-y-4">
      <h3 className="text-xl font-semibold">Caractéristiques techniques</h3>
      <ul className="list-disc list-inside text-muted-foreground">
        {product.technicalFeatures
          .trim()
          .split("\n")
          .map((feature: string, index: number) => (
            <li key={index}>{feature}</li>
          ))}
      </ul>
    </div>

    <div className="mb-8 space-y-4">
      <h3 className="text-xl font-semibold">Design</h3>
      <ul className="list-disc list-inside text-muted-foreground">
        {product.design
          .trim()
          .split("\n")
          .map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>

    <div className="mb-8 space-y-4">
      <h3 className="text-xl font-semibold">Utilisation</h3>
      <ul className="list-disc list-inside text-muted-foreground">
        {product.usage
          .trim()
          .split("\n")
          .map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>

    <div className="mb-8 space-y-4">
      <h3 className="text-xl font-semibold">Durabilité</h3>
      <ul className="list-disc list-inside text-muted-foreground">
        {product.durability
          .trim()
          .split("\n")
          .map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>

    <div className="mb-8 space-y-4">
      <h3 className="text-xl font-semibold">Sécurité</h3>
      <ul className="list-disc list-inside text-muted-foreground">
        {product.security
          .trim()
          .split("\n")
          .map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>

    <div className="mt-6 space-y-4">
      <h3 className="text-lg font-bold">Résumé</h3>
      <p className="text-muted-foreground">{product.summary}</p>
    </div>
  </div>
);

const products = [
  {
    name: "ASE 50",
    description:
      "La menuiserie Schüco ASE 50 est un système de coulissant en aluminium reconnu pour son design moderne et ses performances thermiques exceptionnelles.",
    technicalFeatures: `
      Profondeur du profilé : 50 mm
      Isolation thermique : Valeur U jusqu’à 1,4 W/m²K
      Isolation phonique : Réduction acoustique performante
      Étanchéité à l’eau : Classe 9A
      Perméabilité à l’air : Classe 4
      Résistance au vent : Classe C3/B3
    `,
    design: `
      Design minimaliste : Profils élancés pour maximiser la lumière naturelle
      Personnalisation : Large gamme de couleurs et de finitions disponibles
      Intégration discrète : Seuils plats pour une transition fluide
    `,
    usage: `
      Facilité d’utilisation : Manipulation silencieuse même avec de grands panneaux
      Flexibilité : Configurations à deux, trois ou quatre rails pour des ouvertures larges
      Accessoires : Compatibilité avec les accessoires Schüco pour la motorisation et la sécurité
    `,
    durability: `
      Matériaux de qualité : Aluminium durable et résistant aux intempéries
      Performance durable : Maintien des performances thermiques et acoustiques à long terme
    `,
    security: `
      Sécurité renforcée : Options pour vitrages anti-effraction et ferrures de sécurité
      Certifications : Conforme aux normes de sécurité européennes
    `,
    summary:
      "La Schüco ASE 50 est la solution parfaite pour les grandes ouvertures et les espaces de vie modernes, offrant élégance, performance et facilité d’utilisation.",
  },
  {
    name: "ASE 60",
    description:
      "La menuiserie Schüco ASE 60 offre un design moderne, des performances thermiques avancées et une utilisation intuitive.",
    technicalFeatures: `
      Profondeur du profilé : 60 mm
      Isolation thermique : Valeur U jusqu’à 1,3 W/m²K
      Isolation phonique : Réduction efficace des bruits extérieurs
      Étanchéité à l’eau : Classe E1200
      Perméabilité à l’air : Classe 4
      Résistance au vent : Classe C5/B5
    `,
    design: `
      Design moderne : Profils esthétiques avec vue maximale sur l’extérieur
      Personnalisation : Variété de finitions et de couleurs disponibles
      Intégration harmonieuse : Seuils bas pour une transition fluide
    `,
    usage: `
      Système coulissant performant : Facilité d’ouverture avec panneaux de grande taille
      Flexibilité de configuration : Configurations à deux, trois ou quatre rails
      Compatibilité avec accessoires : Prêt pour intégration de motorisations et systèmes de verrouillage avancés
    `,
    durability: `
      Matériaux haute qualité : Aluminium résistant aux intempéries et durable
      Longévité assurée : Maintien des performances sur le long terme
    `,
    security: `
      Protection renforcée : Options pour vitrages anti-effraction et systèmes de sécurité avancés
      Certifications : Conforme aux normes de sécurité européennes
    `,
    summary:
      "La menuiserie Schüco ASE 60 combine élégance moderne, performances thermiques élevées et sécurité accrue, parfaite pour les nouveaux bâtiments et les rénovations.",
  },
  {
    name: "AWS 60",
    description:
      "La fenêtre Schüco AWS 60 offre des performances thermiques élevées, un design moderne et une grande durabilité.",
    technicalFeatures: `
      Profondeur du profilé : 60 mm
      Isolation thermique : Valeur U jusqu’à 1,7 W/m²K
      Isolation phonique : Réduction acoustique élevée
      Étanchéité à l’eau : Classe E750
      Perméabilité à l’air : Classe 4
      Résistance au vent : Classe C5/B5
    `,
    design: `
      Design épuré : Profils fins pour maximiser la surface vitrée
      Personnalisation : Nombreuses finitions et couleurs disponibles
      Accessoires : Large gamme personnalisable
    `,
    usage: `
      Types d’ouverture : Ouvrant à la française, oscillo-battant, ouvrant à l’anglaise
      Compatibilité : Intégration avec d’autres systèmes Schüco
      Automatisation : Options pour ventilation et automatisation
    `,
    durability: `
      Matériaux : Aluminium durable, résistant à la corrosion
      Longévité : Composants de haute qualité pour une performance durable
    `,
    security: `
      Sécurité renforcée : Vitrages anti-effraction et ferrures de sécurité disponibles
      Certifications : Conforme aux normes de sécurité européennes
    `,
    summary:
      "La Schüco AWS 60 est idéale pour les bâtiments neufs et les rénovations, offrant une solution esthétique et performante.",
  },
  {
    name: "AWS 60 BD",
    description:
      "La menuiserie Schüco AWS 60 BD assure des performances élevées en isolation thermique, étanchéité et sécurité, parfaite pour une variété de projets architecturaux.",
    technicalFeatures: `
      Profondeur du profilé : 60 mm
      Isolation thermique : Valeur U jusqu’à 1,3 W/m²K
      Isolation phonique : Réduction efficace des bruits extérieurs
      Étanchéité à l’eau : Classe E1200
      Perméabilité à l’air : Classe 4
      Résistance au vent : Classe C5/B5
    `,
    design: `
      Design moderne : Profils esthétiques pour une vue maximale et luminosité accrue
      Personnalisation : Disponible dans diverses finitions et couleurs pour s’adapter à tout type d’architecture
      Intégration harmonieuse : Seuils bas pour une transition fluide entre l’intérieur et l’extérieur
    `,
    usage: `
      Types d’ouverture : Variété incluant ouvrant à la française, oscillo-battant et basculant
      Flexibilité d’installation : Adapté aux nouvelles constructions et rénovations grâce à sa polyvalence
      Technologie avancée : Prêt pour intégration de systèmes de motorisation et de sécurité avancés
    `,
    durability: `
      Matériaux de haute qualité : Aluminium robuste, résistant aux intempéries, nécessitant peu d’entretien
      Performance durable : Maintient ses performances thermiques et acoustiques à long terme
    `,
    security: `
      Protection renforcée : Options pour vitrages anti-effraction et ferrures de sécurité avancées
      Certifications : Conforme aux normes européennes pour une sécurité optimale
    `,
    summary:
      "La menuiserie Schüco AWS 60 BD est idéale pour ceux recherchant des fenêtres alliant haute performance énergétique, design moderne et sécurité renforcée, adaptées à divers projets architecturaux.",
  },
  {
    name: "AWS 75",
    description:
      "La menuiserie Schüco AWS 75 est une fenêtre en aluminium reconnue pour ses performances élevées, son design moderne et sa robustesse.",
    technicalFeatures: `
      Profondeur du profilé : 75 mm
      Isolation thermique : Valeur U jusqu’à 1,0 W/m²K
      Isolation phonique : Réduction des nuisances sonores
      Étanchéité à l’eau : Classe E900
      Perméabilité à l’air : Classe 4
      Résistance au vent : Classe C3/B3
    `,
    design: `
      Design contemporain : Profils élégants et lignes épurées
      Personnalisation : Variété de couleurs et de finitions disponibles
      Accessoires élégants : Choix de poignées et d’accessoires
    `,
    usage: `
      Types d’ouverture : Ouvrant à la française, oscillo-battant, basculant
      Flexibilité d’installation : Adapté pour nouvelles constructions et rénovations
      Automatisation : Prêt pour intégration de systèmes de ventilation et d’automatisation
    `,
    durability: `
      Matériaux haute performance : Aluminium robuste et résistant aux intempéries
      Longévité : Maintien des performances thermiques et acoustiques sur le long terme
    `,
    security: `
      Protection avancée : Options pour vitrages anti-effraction et ferrures sécurisées
      Certifications : Conforme aux normes européennes
    `,
    summary:
      "La Schüco AWS 75 offre une combinaison parfaite d’élégance, d’efficacité énergétique et de sécurité pour répondre aux exigences des projets architecturaux modernes et durables.",
  },
  {
    name: "AWS 75 BD",
    description:
      "La menuiserie Schüco AWS 75 BD offre une haute performance en matière d’isolation thermique, d’étanchéité et de sécurité, idéale pour divers projets architecturaux.",
    technicalFeatures: `
      Profondeur du profilé : 75 mm
      Isolation thermique : Valeur U jusqu’à 1,2 W/m²K
      Isolation phonique : Réduction efficace des bruits extérieurs
      Étanchéité à l’eau : Classe E1200
      Perméabilité à l’air : Classe 4
      Résistance au vent : Classe C4/B4
    `,
    design: `
      Design moderne : Profils esthétiques et robustes pour une vue maximale et une luminosité accrue
      Personnalisation : Disponible dans diverses couleurs et finitions pour s’adapter à tout type d’architecture
      Intégration harmonieuse : Seuils bas pour une transition fluide entre l’intérieur et l’extérieur
    `,
    usage: `
      Types d’ouverture : Variété incluant ouvrant à la française, oscillo-battant et basculant
      Flexibilité d’installation : Adapté aux nouvelles constructions et rénovations grâce à sa polyvalence
      Technologie avancée : Prêt pour intégration de systèmes de motorisation et de sécurité avancés
    `,
    durability: `
      Matériaux de haute qualité : Aluminium robuste, résistant aux intempéries, nécessitant peu d’entretien
      Performance durable : Maintient ses performances thermiques et acoustiques sur le long terme
    `,
    security: `
      Protection renforcée : Options pour vitrages anti-effraction et ferrures de sécurité avancées
      Certifications : Conforme aux normes européennes pour une sécurité optimale
    `,
    summary:
      "La menuiserie Schüco AWS 75 BD est la solution idéale pour ceux recherchant des fenêtres alliant performance énergétique, design moderne et sécurité renforcée, adaptées à une variété de projets architecturaux.",
  },
  {
    name: "AWS 90",
    description: "",
    technicalFeatures: `
      Profondeur du profilé : 75 mm
      Isolation thermique : Valeur U jusqu’à 1,2 W/m²K
      Isolation phonique : Réduction efficace des bruits extérieurs
      Étanchéité à l’eau : Classe E1200
      Perméabilité à l’air : Classe 4
      Résistance au vent : Classe C4/B4
    `,
    design: `
      Design moderne : Profils esthétiques et robustes pour une vue maximale et une luminosité accrue
      Personnalisation : Disponible dans diverses couleurs et finitions pour s’adapter à tout type d’architecture
      Intégration harmonieuse : Seuils bas pour une transition fluide entre l’intérieur et l’extérieur
    `,
    usage: `
      Types d’ouverture : Variété incluant ouvrant à la française, oscillo-battant et basculant
      Flexibilité d’installation : Adapté aux nouvelles constructions et rénovations grâce à sa polyvalence
      Technologie avancée : Prêt pour intégration de systèmes de motorisation et de sécurité avancés
    `,
    durability: `
      Matériaux de haute qualité : Aluminium robuste, résistant aux intempéries, nécessitant peu d’entretien
      Performance durable : Maintient ses performances thermiques et acoustiques sur le long terme
    `,
    security: `
      Protection renforcée : Options pour vitrages anti-effraction et ferrures de sécurité avancées
      Certifications : Conforme aux normes européennes pour une sécurité optimale
    `,
    summary:
      "La menuiserie  est la solution idéale pour ceux recherchant des fenêtres alliant performance énergétique, design moderne et sécurité renforcée, adaptées à une variété de projets architecturaux.",
  },
  {
    name: "AWS 90 BD",
    description:
      "La menuiserie Schüco AWS 90 BD se distingue par ses performances exceptionnelles en isolation thermique, étanchéité et sécurité, parfaitement adaptée à divers projets architecturaux.",
    technicalFeatures: `
      Profondeur du profilé : 90 mm
      Isolation thermique : Valeur U jusqu’à 0,8 W/m²K pour des économies d’énergie significatives
      Isolation phonique : Réduit efficacement les bruits extérieurs pour un confort acoustique élevé
      Étanchéité à l’eau : Classe E1050, protège contre les infiltrations d’eau même sous conditions météorologiques extrêmes
      Perméabilité à l’air : Classe 4, assure une étanchéité optimale pour un confort thermique renforcé
      Résistance au vent : Classe C5/B5, garantit une grande stabilité face aux vents forts
    `,
    design: `
      Design moderne et fonctionnel : Profils esthétiques et robustes pour une luminosité maximale et une vue panoramique
      Options de personnalisation : Disponible dans diverses finitions et couleurs pour s’adapter à différents styles architecturaux
      Intégration harmonieuse : Seuils bas pour une transition fluide entre l’intérieur et l’extérieur
    `,
    usage: `
      Types d’ouverture variés : Inclut ouvrant à la française, oscillo-battant et basculant pour répondre à divers besoins
      Flexibilité d’installation : Adapté aux nouvelles constructions et rénovations grâce à sa polyvalence et modularité
      Technologie avancée : Prêt pour l’intégration de systèmes de motorisation et sécurité avancés
    `,
    durability: `
      Matériaux de haute qualité : Aluminium robuste, résistant aux intempéries, nécessitant peu d’entretien pour une durabilité accrue
      Performance durable : Maintient ses performances thermiques et acoustiques sur le long terme
    `,
    security: `
      Protection renforcée : Options pour intégrer des vitrages anti-effraction et ferrures de sécurité avancées
      Certifications de sécurité : Conforme aux normes européennes pour une sécurité optimale contre les intrusions
    `,
    summary:
      "La menuiserie Schüco AWS 90 BD est la solution idéale pour ceux recherchant une fenêtre haut de gamme alliant performances énergétiques élevées, design moderne et sécurité renforcée, adaptée à une variété de projets architecturaux.",
  },
];
const data = [
  {
    title: "ASE 50",
    desc: "Performance et design innovants.",
    src: Img1,
    content: <ProductDetails product={products[0]} />,
  },
  {
    title: "ASE 60",
    desc: " Un saut en avant pour vos projets architecturaux.",
    src: Img2,
    content: <ProductDetails product={products[1]} />,
  },
  {
    title: "AWS 60",
    desc: "L'alliance parfaite entre esthétique et efficacité énergétique.",
    src: Img3,
    content: <ProductDetails product={products[2]} />,
  },
  {
    title: "AWS 60 BD",
    desc: "Des fenêtres de haute performance, sécurisées et esthétiques.",
    src: Img4,
    content: <ProductDetails product={products[3]} />,
  },
  {
    title: "AWS 75",
    desc: "Une solution de menuiserie alliant isolation thermique et design moderne.",
    src: Img5,
    content: <ProductDetails product={products[4]} />,
  },
  {
    title: "AWS 75 BD",
    desc: "Fenêtres haut de gamme avec sécurité renforcée et performances thermiques exceptionnelles.",
    src: Img6,
    content: <ProductDetails product={products[5]} />,
  },
  {
    title: "AWS 90",
    desc: "Excellence en isolation thermique et acoustique pour vos projets d'envergure.",
    src: Img7,
    content: <ProductDetails product={products[6]} />,
  },
  {
    title: "AWS 90 BD",
    desc: "Haute performance et sécurité avancée pour une menuiserie durable et esthétique.",
    src: Img8,
    content: <ProductDetails product={products[7]} />,
  },
];
