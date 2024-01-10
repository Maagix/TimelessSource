import { useState } from "react";
import { capitalizeWord, formatCurrency } from "../utils/helpers";
import { Link } from "react-router-dom";

function SliderItem({ item, imageIndex, transitionX, i }) {
  const [isHover, setIsHover] = useState(false);
  const images = item.image.split(",");

  return (
    <div
      style={{
        translate: `${transitionX * imageIndex}%`,
        transition: "all 0.3s ease-in-out",
      }}
      className="min-w-[50%] px-2 md:min-w-[33.34%] md:px-5"
      tabIndex={
        i === imageIndex || i === imageIndex + 1 || i === imageIndex + 2
          ? 0
          : -1
      }
    >
      <div
        className="relative cursor-pointer overflow-hidden"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Link to={`/shop/${item.id}`}>
          <img
            src={images[images.length - 1]}
            className="object-contain transition-all duration-300 hover:scale-110"
          />
        </Link>

        {isHover && (
          <Link
            to={`/shop/${item.id}`}
            className="absolute bottom-0 left-0 flex w-full justify-between bg-main-red/70 p-2 text-lg font-medium text-white transition-all duration-300 hover:bg-main-red"
          >
            <p>{capitalizeWord(item.productName)}</p>
            <p>{formatCurrency(item.price)}</p>
          </Link>
        )}
      </div>
    </div>
  );
}

export default SliderItem;
