import { HiOutlineStar, HiStar } from "react-icons/hi";
import { capitalizeWord, formatCurrency } from "../utils/helpers";
import SelectSize from "./SelectSize";
import { useStore } from "../contexts/ShopContext";
import { useState } from "react";
import { Link } from "react-router-dom";

function Product({ product, type }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const { shoppingCart, handleAddToCart, wishlist, handleWishlist } =
    useStore();

  if (type === "look")
    return (
      <div className="flex gap-2 p-3 shadow-sm" key={product.id}>
        <Link to={`/shop/${product.id}`} className="w-1/2">
          <img src={product.image} className="w-full" />
        </Link>
        <div className="flex w-1/2 flex-col items-start justify-around gap-2">
          <div className="flex flex-col gap-1 p-1">
            <p className="text-2xl tracking-wide">
              {capitalizeWord(product.productName)}
            </p>
            <p className="text-xl">{formatCurrency(product.price)}</p>
          </div>
          <div className="flex w-full flex-col items-center gap-1">
            <button
              className="w-full border border-main-red bg-main-red px-2 py-2 text-lg text-white hover:brightness-110 sm:w-2/3 md:w-4/5 xl:w-2/3"
              onClick={(e) => {
                e.preventDefault();

                if (!shoppingCart.find((item2) => product.id === item2.id)) {
                  setIsAddedToCart(true);
                }
                handleAddToCart(product);
              }}
            >
              {shoppingCart.find((item2) => product.id === item2.id)
                ? "Remove from cart"
                : "Add to cart"}
            </button>
            <button
              className="w-full border border-main-gray px-2 py-2 text-lg text-main-gray transition-all hover:bg-main-gray hover:text-white sm:w-2/3 md:w-4/5 xl:w-2/3"
              onClick={() => handleWishlist(product.id)}
            >
              {wishlist.includes(product.id)
                ? "Remove from wishlist"
                : "Add to wishlist"}
            </button>
          </div>
        </div>
        {isAddedToCart && (
          <SelectSize item={product} setIsAddedToCart={setIsAddedToCart} />
        )}
      </div>
    );

  return (
    <>
      <Link
        to={`/shop/${product.id}`}
        key={product.id}
        className={`relative flex cursor-pointer flex-col tracking-wide`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="relative overflow-hidden">
          <img
            src={product.image.split(",")[0]}
            alt={product.productName}
            className="w-full transition-all duration-300 hover:scale-110"
          />

          {isHover && (
            <button
              className="absolute bottom-0 left-0 hidden w-full cursor-pointer bg-main-red/70 py-2 text-xl text-white transition-all hover:bg-main-red md:block"
              id="btn-add"
              onClick={(e) => {
                e.preventDefault();

                if (!shoppingCart.find((item2) => product.id === item2.id)) {
                  setIsAddedToCart(true);
                }
                handleAddToCart(product);
              }}
            >
              {shoppingCart.find((item2) => product.id === item2.id)
                ? "Remove from cart"
                : "Add to cart"}
            </button>
          )}
          <button
            className="text-md absolute bottom-0 left-0 w-full cursor-pointer bg-main-red/70 py-1 text-white transition-all hover:bg-main-red sm:block md:hidden"
            id="btn-add"
            onClick={(e) => {
              e.preventDefault();

              if (!shoppingCart.find((item2) => product.id === item2.id)) {
                handleAddToCart(product);
              }
              setIsAddedToCart(true);
            }}
          >
            {shoppingCart.find((item2) => product.id === item2.id)
              ? "Remove from cart"
              : "Add to cart"}
          </button>
        </div>

        <div className="flex flex-col flex-wrap justify-between">
          <div className="flex items-center justify-between">
            <p className="text-lg font-medium">
              {capitalizeWord(product.productName)}
            </p>
          </div>
          <p className="text-md text-start">{formatCurrency(product.price)}</p>
        </div>

        <button
          className={`absolute right-0 px-1 py-1 text-main-red hover:cursor-pointer xl:text-2xl ${
            type === "wishlist" ? "text-2xl" : "text-lg"
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleWishlist(product.id);
          }}
        >
          {wishlist.includes(product.id) ? <HiStar /> : <HiOutlineStar />}
        </button>
      </Link>
      {isAddedToCart && (
        <SelectSize
          item={product}
          setIsAddedToCart={setIsAddedToCart}
          isAddedToCart={isAddedToCart}
        />
      )}
    </>
  );
}

export default Product;
