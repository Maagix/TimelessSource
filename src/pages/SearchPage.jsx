import { useStore } from "../contexts/ShopContext";
import FilterMenu from "../ui/FilterMenu";
import Product from "../ui/Product";
import Spinner from "../ui/Spinner";
import EmptyShop from "../ui/EmptyShop";
import SortBy from "../ui/SortBy";
import ShopFilters from "../ui/ShopFilters";
import { useState } from "react";
import Modal from "../ui/Modal";
import { HiOutlineX } from "react-icons/hi";

function SearchPage() {
  const {
    items,
    searchParams,
    isLoading,
    handleDeleteFilter,
    handleResetFilters,
    filterShop,
    filters,
  } = useStore();

  const query = searchParams.get("q");
  const sortBy = searchParams.get("sortBy") || "asc";
  const [showFilters, setShowFilters] = useState(false);

  let searchedItems = items?.filter(
    (item) =>
      item.productName.toLowerCase().includes(query.toLowerCase()) ||
      item.category.includes(query.toLowerCase()),
  );

  searchedItems =
    sortBy === "asc"
      ? searchedItems?.toSorted((a, b) => (a.price > b.price ? 1 : -1))
      : searchedItems?.toSorted((a, b) => (a.price < b.price ? 1 : -1));

  searchedItems = searchedItems?.map((item) => ({
    ...item,
    size: item.size.split(","),
  }));

  if (isLoading) return <Spinner />;

  return (
    <div className="xl: relative mx-auto grid w-[90.8%] grid-cols-[1fr_3fr] gap-x-3 gap-y-2 px-2">
      <aside
        className={`sticky top-24 ${
          !showFilters && "hidden"
        } flex-col justify-center gap-1 self-start py-2 text-lg md:flex`}
      >
        <h2 className="flex justify-between border-b border-main-gray/50 py-4 xl:px-0 xl:py-1">
          <span className="text-2xl">Filter by</span>
          <button
            className="text-main-red underline underline-offset-4"
            onClick={handleResetFilters}
          >
            Reset filters
          </button>
        </h2>
        <div className="divide-y divide-main-gray/50 border-b border-main-gray/50">
          <FilterMenu type="Category" gender={"all"} />
          <FilterMenu type="Size" />
          <FilterMenu type="Color" gender={"all"} />
        </div>
      </aside>

      <main className="relative col-span-full flex h-full flex-col gap-1 md:col-start-2">
        <div className="sticky top-24 z-10 col-span-full flex w-full items-center justify-between   gap-5 bg-main-bg-gray p-1">
          <button
            onClick={() => setShowFilters((show) => !show)}
            className="block text-lg text-main-red underline underline-offset-2 md:hidden"
          >
            Show filters
          </button>

          <SortBy value="sortBy" values={["asc", "desc"]} sortBy="Price:" />
        </div>

        <div className="col-span-full flex items-center justify-center gap-1 self-start">
          <div className="col-span-full flex w-full flex-wrap items-center gap-2">
            <ShopFilters
              products={searchedItems}
              deleteFilters={handleDeleteFilter}
              resetFilters={handleResetFilters}
              colors={"bg-main-dark"}
            />
          </div>
        </div>

        <div className="col-span-full grid w-full grid-cols-2 gap-6 xl:grid-cols-3">
          {searchedItems.length ? (
            filterShop(searchedItems)?.map((item) => (
              <Product product={item} key={item.id} />
            ))
          ) : (
            <EmptyShop />
          )}
        </div>

        {!filterShop(searchedItems).length && (
          <div className="col-span-full min-h-[1000px] min-w-full">
            <p className="text-3xl">
              Sorry, there are no results that match your filters.
            </p>
          </div>
        )}
      </main>

      {/* phone filters */}
      {showFilters && (
        <Modal
          styles={`flex-col gap-1 py-2 text-lg bg-main-bg-yellow h-[80vh] w-full justify-center items-center px-2 overflow-y-scroll`}
          closeFn={() => setShowFilters(false)}
          scrollFn={setShowFilters}
        >
          <div className="flex flex-col gap-2 py-4">
            <span
              onClick={() => setShowFilters(false)}
              className="self-end rounded-full bg-main-gray/80 px-2 py-2 text-xl text-white hover:bg-white hover:text-main-red"
            >
              <HiOutlineX />
            </span>

            <div className="col-span-full flex flex-wrap items-center gap-2 self-start">
              {!!Object.values(filters).flat().length && (
                <p className="font-medium tracking-wide">Active:</p>
              )}{" "}
              <ShopFilters
                products={searchedItems}
                deleteFilters={handleDeleteFilter}
                resetFilters={handleResetFilters}
                colors={"bg-main-red"}
              />
            </div>
          </div>
          <h2 className="flex justify-between border-b border-main-gray/50 py-4 xl:px-0 xl:py-1">
            <span className="text-2xl">Filter by</span>
            <button
              className="text-main-red underline underline-offset-4"
              onClick={handleResetFilters}
            >
              Reset filters
            </button>
          </h2>
          <div className="divide-y divide-main-gray/50 border-b border-main-gray/50">
            <FilterMenu type="Category" gender={"all"} />
            <FilterMenu type="Size" />
            <FilterMenu type="Color" gender={"all"} />
          </div>
        </Modal>
      )}
    </div>
  );
}

export default SearchPage;
