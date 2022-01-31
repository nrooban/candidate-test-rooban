import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { IProduct } from "../../models/models";

export function UpsellCard({ item }: { item: IProduct }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={`/assets/${item.imageUrl}`} alt="" />
        <div className="px-6 py-4 flex flex-col ltr-grid">
          <div className="font-bold text-lg mb-2">{item.name}</div>
          <p className="text-gray-700 text-base">Price: {item.price}</p>
          <button
            className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              dispatch(addToCart({ ...item }));
            }}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}
