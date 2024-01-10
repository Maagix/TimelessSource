import FilterMenu from "../ui/FilterMenu";
import Spinner from "../ui/Spinner";
import Product from "../ui/Product";
import EmptyShop from "../ui/EmptyShop";
import { useStore } from "../contexts/ShopContext";
import { useEffect, useRef, useState } from "react";
import SortBy from "../ui/SortBy";
import ShopFilters from "../ui/ShopFilters";
import Modal from "../ui/Modal";
import { HiOutlineX } from "react-icons/hi";

function ShopItems({ section, products = [] }) {
  const {
    isLoading,
    handleDeleteFilter,
    handleResetFilters,
    filterShop,
    filters,
  } = useStore();

  const [page, setPage] = useState(9);
  const [showFilters, setShowFilters] = useState(false);
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && page <= products.length) {
          setPage((page) => page + 3);
        }
      },
      { threshold: 1 },
    );

    const current = observerTarget.current;

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [page, products.length]);

  if (isLoading) return <Spinner />;

  return (
    <div className="grid grid-cols-[1fr_3fr] gap-x-7 gap-y-2 px-2 xl:mx-auto xl:w-[90.8%]">
      {/* main filter menu */}
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
          <FilterMenu type="Category" gender={section.toLowerCase()} />
          <FilterMenu type="Size" />
          <FilterMenu type="Color" gender={section.toLowerCase()} />
        </div>
      </aside>

      <main className="relative col-span-full flex h-full flex-col gap-1 md:col-start-2">
        <header className="sticky top-24 z-10 col-span-full flex w-full flex-col gap-2 bg-main-bg-gray px-4 py-2 shadow-sm">
          <div className="flex justify-between">
            <button
              onClick={() => setShowFilters((show) => !show)}
              className="block text-lg text-main-red underline underline-offset-2 md:hidden"
            >
              {Object.values(filters).flat().length
                ? `Active filters (${Object.values(filters).flat().length})`
                : "Show filters"}
            </button>

            <div className="col-span-full hidden flex-wrap items-center gap-2 self-end md:flex md:self-start">
              <ShopFilters
                products={products}
                deleteFilters={handleDeleteFilter}
                resetFilters={handleResetFilters}
                colors={"bg-main-dark"}
              />
            </div>

            <div className="text-lg tracking-wide">
              <SortBy value="sortBy" values={["asc", "desc"]} sortBy="Price:" />
            </div>
          </div>
        </header>

        <div className="grid w-full grid-cols-2 gap-6 xl:grid-cols-3">
          {filterShop(products).length ? (
            filterShop(products)
              .map((item) => <Product product={item} key={item.id} />)
              .slice(0, page)
          ) : (
            <EmptyShop />
          )}
        </div>
      </main>

      {/* phone filters */}
      {showFilters && (
        <Modal
          styles={
            "flex-col gap-1 py-2 text-lg bg-main-bg-yellow h-[80vh] w-full justify-center items-center px-2 overflow-y-scroll animate-slideInLeft"
          }
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
                products={products}
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
            <FilterMenu type="Category" gender={section.toLowerCase()} />
            <FilterMenu type="Size" />
            <FilterMenu type="Color" gender={section.toLowerCase()} />
          </div>
        </Modal>
      )}
      <div ref={observerTarget}></div>
    </div>
  );
}

export default ShopItems;
