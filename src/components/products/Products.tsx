import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ProductCard } from "./ProductCard";

export function Products() {
  const { products } = useSelector((state: RootState) => state.products);

  return (
    <>
      <div className="container mx-auto px-10 md:px-40">
        <h1 className="text-3xl font-bold text-indigo-900 text-left">
          Products
        </h1>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {products?.map((item) => (
            <ProductCard key={item.productid} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
