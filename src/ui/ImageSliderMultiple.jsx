import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { LuCircle } from "react-icons/lu";
import SliderItem from "./SliderItem";

function ImageSlider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    if (imageIndex === imageUrls.length - 4) {
      setImageIndex(0);
    } else {
      setImageIndex((index) => index + 1);
    }
  }

  function showPrevImage() {
    if (imageIndex === 0) {
      setImageIndex(imageUrls.length - 4);
    } else {
      setImageIndex((index) => index - 1);
    }
  }

  return (
    <div
      className="flex h-full w-full flex-col"
      role="region"
      aria-label="carousel"
    >
      {/* bigger on phone */}
      <div className="mx-auto flex overflow-hidden py-4 md:p-5 xl:w-2/3">
        {imageUrls?.map((item, i) => (
          <SliderItem
            item={item}
            imageIndex={imageIndex}
            key={item.id}
            i={i}
            transitionX={-100}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-2">
        <button className="text-3xl text-main-gray" onClick={showPrevImage}>
          <HiChevronLeft />
        </button>
        <div className="flex gap-2 px-1 py-1">
          {imageUrls
            ?.map((_, i) => (
              <button
                key={i}
                aria-current={i === imageIndex}
                onClick={() => setImageIndex(i)}
                className={`h-full w-full rounded-full hover:scale-125 ${
                  i === imageIndex
                    ? "bg-main-red text-main-red"
                    : "bg-gray-200 text-gray-200"
                } text-xs`}
              >
                <LuCircle />
              </button>
            ))
            .slice(0, imageUrls.length - 3)}
        </div>
        <button className="text-3xl text-main-gray" onClick={showNextImage}>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
