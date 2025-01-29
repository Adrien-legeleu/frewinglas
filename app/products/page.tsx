import ProductsGrid from "../components/Products/ProductsGrid";

export default function page() {
  return (
    <div className="space-y-32">
      <div className="flex items-center  max-w-4xl mx-auto space-y-5 md:pt-32 pt-16 pb-10 px-10 flex-col">
        <h1 className="text-4xl text-center font-semibold tracking-wider">
          Explorez notre sélection de produits !
        </h1>
        <p className="text-muted-foreground text-lg text-center tracking-wider">
          Découvrez des produits soigneusement sélectionnés pour répondre à vos
          besoins. Qualité, innovation et performance sont au rendez-vous.
        </p>
      </div>
      <ProductsGrid />
    </div>
  );
}
