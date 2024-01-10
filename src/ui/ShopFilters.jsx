import { HiOutlineX } from "react-icons/hi";
import { useStore } from "../contexts/ShopContext";

function ShopFilters({ deleteFilters, colors }) {
  const { filters } = useStore();

  return (
    <>
      {Object.values(filters)
        .flat()
        .map((filterType) => (
          <div
            key={filterType}
            className={`flex items-center justify-between gap-1 px-2 py-1 ${colors}`}
          >
            <span className="text-sm text-white">
              {filterType.toUpperCase()}
            </span>
            <button onClick={() => deleteFilters(filterType)}>
              <HiOutlineX stroke="white" />
            </button>
          </div>
        ))}
    </>
  );
}

export default ShopFilters;
