import Spinner from "../ui/Spinner";
import { formatCurrency } from "../utils/helpers";
import EmptyCart from "../ui/EmptyCart";
import CartItem from "../ui/CartItem";
import { useNavigate } from "react-router-dom";
import { useStore } from "../contexts/ShopContext";
import toast from "react-hot-toast";
import ConfirmDelete from "../ui/ConfirmDelete";
import { useState } from "react";
import ToggleComponent from "../ui/ToggleComponent";

function ShoppingCart({ type }) {
  const navigate = useNavigate();
  const { shoppingCart, isLoading, cartItems, setShoppingCart } = useStore();
  const [isConfirmDelete, setIsConfirmDelete] = useState(false);

  const productCost = cartItems
    ?.map((item) => item.price * item.quantity)
    .reduce((acc, cur) => acc + cur, 0);

  const shippingCost = 0;

  function handleClearCart() {
    setShoppingCart([]);
    setIsConfirmDelete(false);
    toast.success("Your shopping cart is now empty");
  }

  const toggles = [
    {
      title: "Shipping Information",
      content: `Free shipping. 
        Within the E.U. we ship using DHL express and your order should arrive within three to five business days.`,
    },
    {
      title: "Payment Options & Security",
      content: `We accept the following payment methods:
      Credit Cards: Visa, MasterCard and American Express. Secure Payment.
      Paypal
      Alipay
      Wire Transfer
      Apple Pay
      Google Pay`,
    },
    {
      title: "Return & Exchange",
      content: "Free returns within 30 days after the products are received.",
    },
  ];

  if (!shoppingCart.length && type !== "hover") {
    return <EmptyCart />;
  }

  if (!shoppingCart.length && type === "hover") {
    return <EmptyCart type="hover" />;
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="flex w-full flex-col gap-4 px-2 py-1 lg:grid lg:grid-cols-[2fr_1fr]">
      <div
        className={`flex w-full flex-col gap-2 px-2 py-1 ${
          type === "hover" ? "col-span-full" : ""
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-300 bg-white px-2 py-2">
          <div>
            <p className="text-xl">Shopping Cart</p>
            <p>{`${shoppingCart.length} ${
              shoppingCart.length > 1 ? "products" : "product"
            } inside`}</p>
          </div>
          <button
            className="h-10 w-24 bg-main-red px-2 text-lg tracking-wide text-white"
            onClick={() => setIsConfirmDelete(true)}
          >
            Clear cart
          </button>
        </div>
        {cartItems.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
        <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-1">
            <span>Product Cost: {formatCurrency(productCost)}</span>
            <span>
              Shipping Cost:{" "}
              {shippingCost > 0
                ? formatCurrency(shippingCost)
                : "FREE SHIPPING"}
            </span>
          </div>
          <span className="text-lg font-semibold">
            Total Cost: {formatCurrency(productCost + shippingCost)}
          </span>
        </div>
      </div>

      {type !== "hover" && (
        <div className="flex w-full flex-col gap-2 self-center bg-white px-3 py-4 text-lg text-main-gray shadow-md sm:w-3/4 lg:fixed lg:right-2 lg:w-1/3 lg:self-start lg:text-xl">
          <div className="flex flex-col gap-2">
            <p className="font-bold">Order summary</p>
            <div className="flex justify-around border-b border-black">
              <span>Product Cost:</span>
              <span>{formatCurrency(productCost)}</span>
            </div>
            <div className="flex justify-around border-b border-black">
              <span>Shipping Cost:</span>
              <span>{formatCurrency(shippingCost)}</span>
            </div>
            <div className="flex justify-around border-b border-black">
              <span className="font-bold">Total Cost:</span>
              <span className="font-bold">
                {formatCurrency(productCost + shippingCost)}
              </span>
            </div>
            <button
              className="mt-2 w-full bg-main-red 
            font-semibold tracking-wide text-white transition-all hover:brightness-110 xl:py-2"
              onClick={() => navigate("/cart/checkout")}
            >
              Proceed to checkout
            </button>
          </div>

          <div className="">
            <ToggleComponent items={toggles} />
          </div>
        </div>
      )}

      {type === "hover" && (
        <button
          className="col-span-full bg-main-red py-1 text-white"
          onClick={() => navigate("/cart/checkout")}
        >
          Checkout
        </button>
      )}

      {isConfirmDelete && (
        <ConfirmDelete
          action="delete everything in your cart?"
          confirmFn={handleClearCart}
          declineFn={() => setIsConfirmDelete(false)}
          isConfirmDelete={isConfirmDelete}
        />
      )}
    </div>
  );
}

export default ShoppingCart;
