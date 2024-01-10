import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { LuCircleDot, LuCircle } from "react-icons/lu";

function ImageSliderSingle({ imageUrls, type }) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    if (imageIndex === imageUrls.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex((index) => index + 1);
    }
  }

  function showPrevImage() {
    if (imageIndex === 0) {
      setImageIndex(imageUrls.length - 1);
    } else {
      setImageIndex((index) => index - 1);
    }
  }

  return (
    <div className="w-full p-2">
      <div
        className={`relative m-auto flex w-full overflow-hidden md:w-1/2  xl:w-2/5 ${
          type === "productPage" ? "w-full md:w-full lg:w-[85%] xl:w-full" : ""
        }`}
      >
        <div className="relative flex">
          {imageUrls.map((img) => (
            <img
              src={type === "productPage" ? img : img.image}
              key={type === "productPage" ? img : img.image}
              style={{
                translate: `${-100 * imageIndex}%`,
                transition: "all 0.3s ease-in-out",
              }}
            />
          ))}
        </div>
        <button
          className="absolute left-0 top-[50%] h-full -translate-y-1/2 px-2 text-2xl text-black transition-all hover:bg-black/30 focus:bg-black/30"
          onClick={showPrevImage}
        >
          <HiArrowLeft />
        </button>
        <button
          className="absolute right-0 top-[50%] h-full -translate-y-1/2 px-2 text-2xl text-black transition-all hover:bg-black/30 focus:bg-black/30"
          onClick={showNextImage}
        >
          <HiArrowRight />
        </button>
        <div className="absolute bottom-1 right-1/2 flex translate-x-1/2 gap-1 px-1 py-1">
          {imageUrls.map((_, i) => (
            <button
              key={i}
              onClick={() => setImageIndex(i)}
              className="h-full w-full rounded-full hover:scale-125"
            >
              {i === imageIndex ? (
                <LuCircleDot stroke="white" fill="black" />
              ) : (
                <LuCircle stroke="white" fill="black" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSliderSingle;
