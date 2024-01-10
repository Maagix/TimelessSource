import { HiTrash } from "react-icons/hi";
import { capitalizeWord, formatCurrency } from "../utils/helpers";
import { useState } from "react";
import Spinner from "./Spinner";
import { useStore } from "../contexts/ShopContext";
import { Link } from "react-router-dom";

function CartItem({ item }) {
  const { items, isLoading, handleDelete, setShoppingCart, cartItems } =
    useStore();

  const [sizes, setSizes] = useState(item.selectedSize);

  const productSizes = items
    ?.find((prod) => prod.id === item.id)
    .size.split(",");

  function handleIncreaseQuantity(id) {
    const item = cartItems.find((item) => item.id === id);
    setShoppingCart((cart) =>
      cart.map((it) =>
        it.id === item.id ? { ...it, quantity: it.quantity + 1 } : { ...it },
      ),
    );
  }

  function handleDecreaseQuality(id) {
    const item = cartItems.find((item) => item.id === id);
    if (item.quantity === 1) {
      handleDelete(item.id);
    }

    setShoppingCart((cart) =>
      cart.map((it) =>
        it.id === item.id ? { ...it, quantity: it.quantity - 1 } : { ...it },
      ),
    );
  }

  function handleSizeChange(e) {
    if (item.selectedSize !== e.target.value) {
      item.selectedSize = e.target.value;
      setSizes(e.target.value);
    }
  }

  if (isLoading) return <Spinner />;

  return (
    <>
      <div className="hidden items-center justify-center gap-2 bg-white text-lg shadow-sm sm:grid sm:grid-cols-5 xl:text-lg">
        <Link to={`/shop/${item.id}`}>
          <img
            src={item.image.split(",")[0]}
            className="cursor-pointer self-start"
          />
        </Link>
        <span>{capitalizeWord(item.productName)}</span>
        <div className="px-2">
          <select onChange={handleSizeChange} value={sizes}>
            {productSizes.map((size) => (
              <option value={size} key={size}>
                {size.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <span>{formatCurrency(item.totalPrice)}</span>

        <div className="flex items-center justify-around gap-2">
          <div className="flex gap-2">
            <button
              onClick={() => {
                handleDecreaseQuality(item.id);
              }}
            >
              -
            </button>
            <button>{item.quantity}</button>
            <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
          </div>
          <button onClick={() => handleDelete(item.id)}>
            <HiTrash />
          </button>
        </div>
      </div>

      {/* Phone cart */}
      <div className="grid grid-cols-[2fr_2fr] gap-4 divide-y-2 sm:hidden">
        <Link to={`/shop/${item.id}`}>
          <img
            src={item.image.split(",")[0]}
            className="cursor-pointer self-start"
          />
        </Link>
        <div className="flex flex-col gap-3 px-2 text-lg">
          <span>{capitalizeWord(item.productName)}</span>
          <span>{formatCurrency(item.totalPrice)}</span>
          <div className="mb-6 flex gap-2 self-start">
            <p>Size:</p>
            <select onChange={handleSizeChange} value={sizes}>
              {productSizes.map((size) => (
                <option value={size} key={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-center gap-2 border border-main-red px-4">
            <div className="flex gap-2">
              <button
                onClick={() => {
                  handleDecreaseQuality(item.id);
                }}
              >
                -
              </button>
              <button>{item.quantity}</button>
              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            </div>
          </div>
          <button
            onClick={() => handleDelete(item.id)}
            className="w-full self-start bg-main-red px-3 py-1 text-center text-white"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
