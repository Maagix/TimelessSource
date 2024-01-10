import { useParams } from "react-router-dom";
import { useStore } from "../contexts/ShopContext";
import { capitalizeWord, formatCurrency } from "../utils/helpers";
import Spinner from "../ui/Spinner";
import ImageSliderSingle from "../ui/ImageSliderSingle";
import ToggleComponent from "../ui/ToggleComponent";
import { useState } from "react";
import SelectSize from "../ui/SelectSize";
import SuggestionRow from "../ui/SuggestionRow";

function ProductPage() {
  const { id } = useParams();
  const {
    items,
    isLoading,
    handleWishlist,
    wishlist,
    shoppingCart,
    handleAddToCart,
  } = useStore();

  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const product = items?.find((item) => Number(item.id) === Number(id));

  // MOVE TO SUPABASE EVENTUAL
  const toggles = [
    {
      title: "Product details",
      content: product?.productDetails
        ?.split(".")
        .map((it) => <p key={it}>{it}</p>) || [""],
    },
    {
      title: "Care & Maintenance",
      content:
        "Take special care of your TIMELESS product to prolong its life. Take extra care of the precious elements so that the fibres retain their natural structure and moisture. We suggest alternating daily wear. Check the label for washing and ironing instructions. We recommend using a professional cleaning service. ",
    },
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

  const suggestions =
    product?.gender === "men"
      ? items?.filter((item) => item.gender === "men")
      : items?.filter((item) => item.gender === "women");

  if (isLoading) return <Spinner />;

  return (
    // GIVE A KEY TO THE DIV SO THE STATE RESETS
    <div className="w-full bg-white">
      <div className="mx-auto w-full bg-white md:grid md:grid-cols-[2fr_2fr] lg:w-[100%] xl:w-[80%] 2xl:w-[65%]">
        <div className="">
          <ImageSliderSingle
            imageUrls={product.image.split(",")}
            type="productPage"
          />
        </div>
        <div className="flex flex-col gap-3 px-10 py-8">
          <p className="text-3xl tracking-wide">
            {capitalizeWord(product.productName)}
          </p>
          <p className="text-xl font-medium text-main-gray/60">
            {formatCurrency(product.price)}
          </p>
          <p className="text-md border-b pb-3">
            {product.description ||
              `Description Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur quidem expedita ex aliquam consectetur vel quis qui dolorem
            laboriosam debitis.`}
          </p>

          <ToggleComponent items={toggles} />
          <button
            className="border border-main-red bg-main-red px-2 py-3 text-lg text-white hover:brightness-110"
            onClick={() => {
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
            className="border border-main-gray px-2 py-3 text-lg text-main-gray transition-all hover:bg-main-gray hover:text-white"
            onClick={() => handleWishlist(product.id)}
          >
            {wishlist.includes(product.id)
              ? "Remove from wishlist"
              : "Add to wishlist"}
          </button>
        </div>

        {isAddedToCart && (
          <SelectSize item={product} setIsAddedToCart={setIsAddedToCart} />
        )}
      </div>
      <div className="col-span-full flex flex-col gap-4 bg-main-yellow py-4">
        <p className="pt-8 text-center text-2xl italic tracking-widest md:text-3xl">
          Our recommendations
        </p>
        <SuggestionRow products={suggestions} start={0} end={3} />
      </div>
    </div>
  );
}

export default ProductPage;
