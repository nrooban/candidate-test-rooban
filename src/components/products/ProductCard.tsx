import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { IProduct } from "../../models/models";

export function ProductCard({ item }: { item: IProduct }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={`/assets/${item.imageUrl}`} alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.name}</div>
          <p className="text-gray-700 text-base">{item.description}</p>
        </div>
        <div className="flex justify-between border-b px-6 pt-4 pb-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              dispatch(addToCart({ ...item }));
            }}>
            Add to Cart
          </button>
          <h2 className="font-semibold text-2xl">Price: ${item.price}</h2>
        </div>
      </div>
    </>
  );
}
