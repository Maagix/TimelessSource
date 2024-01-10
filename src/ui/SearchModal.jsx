import { HiOutlineSearch, HiX } from "react-icons/hi";
import Modal from "./Modal";
import { useStore } from "../contexts/ShopContext";
import { useState } from "react";
import NavMenu from "./NavMenu";
import Product from "./Product";
import { useNavigate } from "react-router-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

function SearchModal({ setIsSearching, isSearching }) {
  const { items } = useStore();
  const [query, setQuery] = useState("");
  const ref = useOutsideClick(() => setIsSearching(false));

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/search?q=${query}`);
    setIsSearching(false);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  const searchedItems = items.filter(
    (item) => item.productName.includes(query) || item.category.includes(query),
  );

  return (
    <Modal
      scrollFn={isSearching}
      styles="w-full min-w-[90%] animate-slideInLeft"
    >
      <div
        className="mx-auto rounded-sm bg-white p-2 md:grid md:grid-cols-[2fr_7fr] lg:w-[90%] lg:grid-cols-[2fr_8fr] xl:grid-cols-[1fr_6fr]"
        ref={ref}
      >
        <div className="col-span-full flex w-full items-center justify-center gap-2 px-4 py-2">
          <span className="text-xl text-black">
            <HiOutlineSearch />
          </span>
          <input
            type="search"
            className="w-full border-b border-main-gray p-2 text-lg"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            onKeyDown={handleKeyPress}
          />
          <button
            className="text-xl text-black"
            onClick={() => setIsSearching(false)}
          >
            <HiX />
          </button>
        </div>

        <aside className="hidden gap-7 p-2 text-main-gray md:flex md:text-xl">
          <div className="flex flex-col gap-3">
            <NavMenu gender="men" title="Men" type="searchMenu" />
            <NavMenu gender="women" title="Women" type="searchMenu" />
          </div>
          <div className="hidden w-[1px] bg-main-gray/10 md:block"></div>
        </aside>

        {
          <main className="flex min-h-[60vh] flex-col gap-2 bg-white py-2 sm:min-h-[70vh] md:min-h-[65vh] lg:min-h-[80vh] xl:min-h-[70vh] 2xl:min-h-[85vh]">
            <p className="text-xl">
              {query === "" && "Most popular items"}
              {query !== "" && !!searchedItems.length && "Results:"}
            </p>
            {!searchedItems.length && (
              <div className="">
                <p className="text-2xl">Sorry, we didn't find any results.</p>
                <p className="text-xl">
                  There were no items corresponding exactly to your request.
                  Please try a new keyword
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 grid-rows-[1fr_0] gap-5 overflow-hidden xl:grid-cols-3 xl:gap-7">
              {searchedItems
                .map((item) => <Product product={item} key={item.id} />)
                .slice(0, 3)}
            </div>
            {!!searchedItems.length && (
              <button
                className="w-full self-center border border-main-red py-2 text-xl text-main-red transition-all hover:bg-main-red hover:text-white sm:w-1/3"
                onClick={handleClick}
              >
                See all {searchedItems.length} results
              </button>
            )}
          </main>
        }
      </div>
    </Modal>
  );
}

export default SearchModal;
