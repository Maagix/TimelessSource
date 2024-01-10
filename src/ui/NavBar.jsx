import { useEffect, useRef, useState } from "react";
import {
  HiOutlineSearch,
  HiOutlineShoppingBag,
  HiOutlineStar,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import ShoppingCart from "../pages/ShoppingCart";
import { useStore } from "../contexts/ShopContext";
import NavMenu from "./NavMenu";
import SearchModal from "./SearchModal";

function NavBar() {
  const [isSearching, setIsSearching] = useState(false);
  const [isOnCart, setIsOnCart] = useState(false);
  const [menu, setMenu] = useState("");

  const { shoppingCart, wishlist } = useStore();

  const url = window.location.pathname;

  // Detect click outside
  const ref = useRef();
  useEffect(() => {
    function handleOutsideClick(e) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        !e.target.classList.contains("btn-menu")
      ) {
        setMenu("");
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setMenu]);

  return (
    <div className="sticky top-0 z-50  flex flex-col gap-2 bg-white px-2 py-1 shadow-sm shadow-main-red xl:px-20">
      <div className="flex items-center justify-between px-4 py-1">
        <Link
          to="/"
          className="text-center text-2xl tracking-wide text-main-red hover:cursor-pointer"
        >
          <div className="flex flex-col gap-1 sm:flex-row">
            <span className="self-start">TIMELESS</span>
            <span className="hidden md:block">|</span>
            <span className="hidden sm:block">Luxury for Every Era</span>
          </div>
        </Link>
        <div className="flex gap-2">
          <div className="">
            {isSearching && (
              <SearchModal
                setIsSearching={setIsSearching}
                isSearching={isSearching}
              />
            )}
            <button onClick={() => setIsSearching(!isSearching)}>
              <HiOutlineSearch size="24px" />
            </button>
          </div>
          <div className="relative flex">
            <Link to="/wishlist">
              <HiOutlineStar className="hover: cursor-pointer" size="24px" />
              {!!wishlist.length && (
                <span className="absolute -right-1 top-0 h-3 w-3 rounded-full bg-main-red text-center text-[9px] text-white">
                  {wishlist.length}
                </span>
              )}
            </Link>
          </div>
          <div
            className="relative flex"
            onMouseEnter={() => setIsOnCart(true)}
            onMouseLeave={() => setIsOnCart(false)}
          >
            <Link to={"/cart"}>
              <HiOutlineShoppingBag
                size="24px"
                className="hover: cursor-pointer"
                onClick={() => setIsOnCart(false)}
              />
              {!!shoppingCart.length && (
                <span className="absolute -right-1 top-0 h-3 w-3 rounded-full bg-main-red text-center text-[9px] text-white">
                  {shoppingCart.length}
                </span>
              )}
            </Link>

            <div className="absolute right-2 top-6 z-50 m-auto max-h-96 w-[28rem] overflow-y-scroll rounded-sm bg-white">
              <div>
                {!url.includes("/order") &&
                  url !== "/cart" &&
                  url !== "/cart/checkout" &&
                  isOnCart && <ShoppingCart type="hover" />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-main-gray/50"></div>

      <nav className="text-md relative mb-2 flex justify-between px-1 sm:flex-row sm:justify-start sm:gap-10 sm:px-4 sm:text-lg">
        <div className="flex gap-1">
          <button
            className="text-md btn-menu hover:text-main-red"
            onClick={() => (menu !== "men" ? setMenu("men") : setMenu(""))}
          >
            Men |
          </button>
          <Link to="/lookbook/men" className=" hover:text-main-red">
            Men Lookbook
          </Link>
        </div>

        <div className="flex gap-2">
          <button
            className="text-md btn-menu  hover:text-main-red"
            onClick={() => (menu !== "women" ? setMenu("women") : setMenu(""))}
          >
            Women |
          </button>
          <Link to="/lookbook/women" className=" hover:text-main-red">
            Women Lookbook
          </Link>
        </div>

        {menu === "men" && (
          <div
            className="absolute left-0 top-8 origin-top-left animate-slideInTopLow rounded-sm bg-main-yellow px-2 sm:w-[70%] md:top-10 md:w-[60%] lg:w-[45%] xl:w-[40%] 2xl:w-[35%]"
            ref={ref}
          >
            <div className="mx-auto flex gap-24">
              <NavMenu gender="men" title="Men clothes" setMenu={setMenu} />
            </div>
          </div>
        )}

        {menu === "women" && (
          <div
            className="absolute right-10 top-8 origin-top-left animate-slideInTopLow rounded-sm bg-main-yellow px-2 sm:left-0 sm:w-[70%] md:top-10 md:w-[60%] lg:w-[45%] xl:w-[40%] 2xl:w-[35%]"
            ref={ref}
          >
            <div className="px mx-auto flex gap-24">
              <NavMenu gender="women" title="Women clothes" setMenu={setMenu} />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
