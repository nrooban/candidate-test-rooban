import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";

export function Nav() {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex">
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
              noIssue
            </span>
          </Link>
          <div className="flex md:order-2">
            <Link
              to="/cart"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600">
              <span>
                <FaShoppingCart /> {cart.cartItems}
              </span>
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-4">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 md:p-0  dark:text-gray-400 dark:border-gray-700">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 md:p-0  dark:text-gray-400 dark:border-gray-700">
                  My Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
