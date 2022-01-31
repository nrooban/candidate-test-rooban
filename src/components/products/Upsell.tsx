import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { UpsellCard } from "./UpsellCard";

export function Upsell() {
  const { products } = useSelector((state: RootState) => state.products);
  const { items } = useSelector((state: RootState) => state.cart);

  const upsellItems = products
    .filter(
      ({ productid: prodid }) =>
        !items.some(({ productid: cartId }) => prodid === cartId)
    )
    .splice(0, 3);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5 rtl-grid my-8">
        {upsellItems?.map((item) => (
          <UpsellCard key={item.productid} item={item} />
        ))}
      </div>
    </>
  );
}
