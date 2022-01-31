import { useDispatch } from "react-redux";
import { removeFromCart, updateItemQty } from "../../features/cartSlice";
import { ICartItem } from "../../models/models";
import { FaRegTimesCircle } from "react-icons/fa";

interface CartItemTypes {
  cartItem: ICartItem;
  index: number;
}

export function CartItem({ cartItem, index }: CartItemTypes) {
  const dispatch = useDispatch();

  return (
    <div className="p-6 mt-5 w-full max-w-xlg mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <img className="h-20 w-20" src={`/assets/${cartItem.imageUrl}`} />
      <div className="md:flex justify-between w-full">
        <div className="flex flex-col justify-center">
          <p className="text-xl font-medium text-indigo-900">{cartItem.name}</p>
          <p className="text-gray-500 text-sm">{cartItem.description}</p>
          <p className="text-gray-500 text-sm">{cartItem.itemid}</p>
          <p className="text-gray-500 text-sm">Price: ${cartItem.price}</p>
          <div className="flex justify-left w-1/8">
            <p className="text-gray-500 text-sm pr-6">Quantity:</p>
            <svg
              onClick={() => {
                dispatch(
                  updateItemQty({ id: cartItem.productid, type: "REMOVE" })
                );
              }}
              className="fill-current text-gray-600 w-3"
              viewBox="0 0 448 512">
              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>

            <p className="mx-2 border text-center w-8">{cartItem.quantity}</p>

            <svg
              onClick={() => {
                dispatch(
                  updateItemQty({ id: cartItem.productid, type: "ADD" })
                );
              }}
              className="fill-current text-gray-600 w-3"
              viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </div>
        </div>
        <div className="flex justify-left">
          <p className="flex items-center text-gray-500 mt-6 md:m-6">
            ${cartItem.totalPrice}
          </p>
          <button
            onClick={() => {
              dispatch(removeFromCart(index));
            }}>
            <FaRegTimesCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
