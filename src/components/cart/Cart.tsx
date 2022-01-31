import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { getCartSummary } from "../../features/cartSlice";
import { Upsell } from "../products/Upsell";
import { CartItem } from "./CartItem";

export function Cart() {
  const cart = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartSummary());
  }, [cart, dispatch]);

  return (
    <>
      <div className="container mx-auto px-10 md:px-40">
        <h1 className="text-3xl font-bold text-indigo-900 text-left">
          My Cart
        </h1>

        {cart.items.length > 0 ? (
          <div>
            {cart.items.map((cartItem, index) => (
              <CartItem key={index} cartItem={cartItem} index={index} />
            ))}
            <Upsell />
            <div className="bg-gray-200 rounded-md mt-5 w-full self-end text-right px-12 py-4 ml-auto">
              <span className="text-xl font-bold text-black-900">
                Total: ${cart.cartTotalAmount}
              </span>
            </div>
          </div>
        ) : (
          <div className="bg-gray-200 rounded-md mt-5 w-full  px-4 py-4 ml-auto">
            Your Shopping Cart is Empty
          </div>
        )}
      </div>
    </>
  );
}
