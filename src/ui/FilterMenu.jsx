import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { capitalizeWord } from "../utils/helpers";
import { useStore } from "../contexts/ShopContext";

function FilterMenu({ type, gender }) {
  const prop = type.toLowerCase();
  const [isOpen, setIsOpen] = useState(false);

  const { setSearchParams, filters, items } = useStore();

  const renderFilters =
    gender === "all"
      ? {
          category: [...new Set(items?.map((item) => item.category))],
          size: [...new Set(items?.map((item) => item.size.split(",")).flat())],
          color: [...new Set(items?.map((item) => item.color))],
        }
      : {
          category:
            gender === "men"
              ? [
                  ...new Set(
                    items
                      .filter((item) => item.gender === "men")
                      .map((item) => item.category),
                  ),
                ]
              : [
                  ...new Set(
                    items
                      .filter((item) => item.gender === "women")
                      .map((item) => item.category),
                  ),
                ],
          size: [...new Set(items.map((item) => item.size.split(",")).flat())],
          color:
            gender === "men"
              ? [
                  ...new Set(
                    items
                      .filter((item) => item.gender === "men")
                      .map((item) => item.color),
                  ),
                ]
              : [
                  ...new Set(
                    items
                      .filter((item) => item.gender === "women")
                      .map((item) => item.color),
                  ),
                ],
        };

  function handleChange(e) {
    setSearchParams(
      (prev) => {
        const value = prev.get(prop)?.split(",").filter(Boolean) || [];

        if (!value.includes(e.target.value)) {
          prev.set(prop, [...value, e.target.value]);
        } else {
          const newValue = value.filter((filter) => filter !== e.target.value);

          if (newValue.length) {
            prev.set(prop, newValue);
          } else {
            prev.delete(prop);
          }
        }

        return prev;
      },
      { replace: true },
    );
  }

  return (
    <div className="">
      <div
        className="flex cursor-pointer items-center justify-between py-6 md:py-1"
        onClick={() => setIsOpen((open) => !open)}
      >
        <p>{type}</p>
        <span className={`${isOpen && "rotate-180"} transition-all`}>
          <HiChevronDown />
        </span>
      </div>
      {isOpen && (
        <div className="flex flex-col flex-wrap gap-2 px-2">
          <div className="flex flex-col flex-wrap gap-1 px-1">
            {renderFilters[prop].map((filterValue) => (
              <button
                key={filterValue}
                className="flex items-center gap-2"
                onClick={handleChange}
                value={filterValue}
              >
                <input
                  type="checkbox"
                  className="fil h-5 w-5 cursor-pointer accent-main-red"
                  value={filterValue}
                  checked={filters[prop].includes(filterValue)}
                  readOnly
                />{" "}
                {prop === "size"
                  ? filterValue.toUpperCase()
                  : filterValue.split("/").map(capitalizeWord).join("/")}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterMenu;
