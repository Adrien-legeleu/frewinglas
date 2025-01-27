import ProductsGrid from "../components/Products/ProductsGrid";

export default function page() {
  return (
    <div className="space-y-32">
      <div className="flex items-center h-[50vh] max-w-4xl mx-auto space-y-5 [868px]:justify-end justify-center px-10 flex-col">
        <h1 className="text-4xl text-center font-semibold tracking-wider">
          Découvrez nos produits !
        </h1>
        <p className="text-muted-foreground text-lg text-center tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quo in
          aliquid eligendi, provident sequi.
        </p>
      </div>
      <ProductsGrid />
    </div>
  );
}
