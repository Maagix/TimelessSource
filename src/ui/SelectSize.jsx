import { HiX } from "react-icons/hi";
import { useStore } from "../contexts/ShopContext";
import Modal from "./Modal";

function SelectSize({ item, setIsAddedToCart, isAddedToCart }) {
  const sizes = ["xs", "s", "m", "l", "xl", "2xl"];
  const { handleShoppingCart } = useStore();

  return (
    <Modal
      closeFn={() => setIsAddedToCart(false)}
      scrollFn={isAddedToCart}
      styles={"animate-grow"}
    >
      <div className="mx-auto flex w-[90vw] flex-col items-center rounded-md bg-white text-xl sm:w-[80vw] md:w-[60vw] lg:w-[50vw] xl:w-[50vw] 2xl:w-[30vw]">
        <div className="flex w-full justify-between px-5 py-3 text-center text-3xl tracking-wide shadow-md">
          <p className="py-4">Select size:</p>
          <button
            className="transition-all hover:text-main-red"
            onClick={() => setIsAddedToCart(false)}
          >
            <HiX />
          </button>
        </div>
        <ul className="flex h-full w-full flex-col">
          {sizes.map((size) => (
            <li key={size} value={size} className="w-full border-main-gray">
              <button
                disabled={!item.size.includes(size)}
                className={`${
                  item.size.includes(size)
                    ? "hover:bg-main-bg-gray"
                    : "line-through"
                } w-full p-4 shadow-sm`}
                onClick={() => {
                  setIsAddedToCart(false);
                  handleShoppingCart({ id: item.id, size });
                }}
              >
                {size.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
}

export default SelectSize;
