import { Link } from "react-router-dom";
import { capitalizeWord } from "../utils/helpers";
import { useStore } from "../contexts/ShopContext";
import { useState } from "react";

function NavMenu({ gender, title, setMenu, type }) {
  const { items } = useStore();
  const [currentCategoryImg, setCurrentCategoryImg] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");

  function handleMouseOver(category) {
    setCurrentCategoryImg(
      items
        ?.find((item) => item.category === category && item.gender === gender)
        .image.split(",")[0],
    );

    setCurrentCategory(category);
  }

  const categories =
    gender === "men"
      ? ["coat/jacket", "suit", "knitwear", "shirts", "t-shirts/polos", "pants"]
      : [
          "coat/jacket",
          "suit",
          "knitwear",
          "dress/jumpsuit",
          "t-shirt/top",
          "pants",
          "skirt",
        ];

  if (type === "searchMenu") {
    return (
      <div className="flex w-full justify-between gap-4 text-xl">
        <div className="flex w-full flex-col gap-1 p-2">
          <p className="font-semibold">{title}</p>
          <ul className="flex gap-2 md:flex-col">
            {categories.map((category) => (
              <Link
                to={`/shop/${gender}?category=${category}`}
                key={category}
                className="transition-all hover:text-main-red"
                onClick={() => setMenu("")}
                onMouseEnter={() => handleMouseOver(category)}
              >
                {capitalizeWord(category).replace("/", " & ")}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="sm:grid sm:grid-cols-[2fr_3fr]">
      <div
        className={`flex gap-16 ${
          gender === "men" ? "h-[35vh] sm:h-[45vh]" : "h-[39vh] sm:h-[55vh]"
        }`}
      >
        <div className="flex flex-col gap-1 p-2">
          <p className="font-semibold xl:text-lg">{title}</p>
          <ul className="flex flex-col gap-2 divide-y divide-main-gray/50 border-b border-main-gray/50 last:py-2">
            {categories.map((category) => (
              <Link
                to={`/shop/${gender}?category=${category}`}
                key={category}
                className="transition-all hover:text-main-red xl:text-lg"
                onClick={() => setMenu("")}
                onMouseEnter={() => handleMouseOver(category)}
              >
                {capitalizeWord(category).replace("/", " & ")}
              </Link>
            ))}
            <Link to={`/shop/${gender}`} className="text-main-red">
              Discover all
            </Link>
          </ul>
        </div>
        <div className="hidden w-[1px] bg-main-gray/10 sm:block"></div>
      </div>
      {currentCategoryImg !== "" && (
        <Link
          to={`/shop/${gender}?category=${currentCategory}`}
          className="relative hidden items-center justify-center self-center py-2 sm:flex"
          onClick={() => setMenu("")}
        >
          <img
            src={currentCategoryImg}
            className="block sm:w-[90%] md:w-[85%] xl:w-[90%] 2xl:w-3/4"
          />
          <p className="absolute bottom-5 left-1/2  flex -translate-x-1/2 flex-col flex-nowrap bg-main-bg-gray p-3 text-center">
            <span className="text-center text-lg">
              {capitalizeWord(currentCategory).replace("/", " & ")}
            </span>
            <span className="text-main-red">- Discover all -</span>
          </p>
        </Link>
      )}
    </div>
  );
}

export default NavMenu;
