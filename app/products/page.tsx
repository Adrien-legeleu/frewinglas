import ProductsGrid from "../components/Products/ProductsGrid";

export default function page() {
  return (
    <div className="py-20">
      {" "}
      <div className="flex items-center h-[50vh] justify-center flex-col">
        <h1 className="text-4xl  text-center max-w-md font-semibold tracking-wider">
          Découvrez nos produits !
        </h1>
      </div>
      <ProductsGrid />
    </div>
  );
}
