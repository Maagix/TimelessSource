import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import useShop from "../hooks/useShop";
import toast from "react-hot-toast";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useSearchParams } from "react-router-dom";

const ShopContext = createContext();

function ShopProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useLocalStorage([], "cart");
  const [wishlist, setWishlist] = useLocalStorage([], "wishlist");
  const [searchParams, setSearchParams] = useSearchParams({
    sortBy: "asc",
    q: "",
  });

  const filters = useMemo(() => {
    return {
      category: searchParams.get("category")?.split(",") || [],
      size: searchParams.get("size")?.split(",") || [],
      color: searchParams.get("color")?.split(",") || [],
    };
  }, [searchParams]);

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    address: {
      country: "",
      city: "",
      address: "",
    },
    phoneNumber: "",
    email: "",
  });

  const { data, isLoading, error } = useShop();
  const { data: items } = data ? data : [];

  const cartItems = items
    ?.filter((item) => shoppingCart.find((item2) => item.id === item2.id))
    .map((it) => {
      it.quantity = shoppingCart.find((item) => item.id === it.id).quantity;
      it.totalPrice = it.price * it.quantity;
      it.selectedSize = shoppingCart.find((item) => item.id === it.id).size;
      return { ...it };
    });

  const handleWishlist = useCallback(
    (id) => {
      if (wishlist.includes(id)) {
        setWishlist(wishlist.filter((item) => item !== id));
        toast.success("Item removed from you wishlist");
      } else {
        setWishlist([...wishlist, id]);
        toast.success("Item added to your wishlist");
      }
    },
    [wishlist, setWishlist],
  );

  const handleShoppingCart = useCallback(
    ({ id, size, quantity = 1 }) => {
      setShoppingCart([...shoppingCart, { id, size, quantity }]);
      toast.success("Item added to your cart");
    },
    [shoppingCart, setShoppingCart],
  );

  const handleAddToCart = useCallback(
    ({ id }) => {
      if (shoppingCart.find((item) => item.id === id)) {
        setShoppingCart(shoppingCart.filter((item) => item.id !== id));
        toast.success("Item removed from your cart");
      }
    },
    [shoppingCart, setShoppingCart],
  );

  const handleDeleteFilter = useCallback(
    (filter) => {
      Object.entries(filters).forEach(([key, value]) => {
        if (value.includes(filter)) {
          setSearchParams((prev) => {
            const newValue = filters[key].filter((filt) => filt !== filter);

            if (newValue.length) {
              prev.set(key, newValue);
            } else {
              prev.delete(key);
            }

            return prev;
          });
        }
      });
    },
    [filters, setSearchParams],
  );

  const handleResetFilters = useCallback(() => {
    const filterType = Object.values(filters).flat();
    if (!filterType.length) return;

    setSearchParams((prev) => {
      prev.delete("category");
      prev.delete("size");
      prev.delete("color");

      return prev;
    });
  }, [filters, setSearchParams]);

  const handleDelete = useCallback(
    (id) => {
      setShoppingCart((cart) => cart.filter((it) => it.id !== id));
      toast.success("Item successfully removed from your cart");
    },
    [setShoppingCart],
  );

  // Filters the product array corresponding to the page
  const filterShop = useCallback(
    (products) => {
      Object.keys(filters).forEach((filterType) => {
        for (const item of products) {
          if (typeof item[filterType] === "string") {
            item[filterType] = [item[filterType]];
          }
        }
      });

      for (const prop of Object.keys(filters)) {
        if (!filters[prop].length) {
          continue;
        }

        products = products.filter((item) => {
          return item[prop].some((value) => filters[prop].includes(value));
        });
      }

      return products;
    },
    [filters],
  );

  const value = useMemo(() => {
    return {
      shoppingCart,
      setShoppingCart,
      wishlist,
      setWishlist,
      filters,
      items,
      isLoading,
      error,
      cartItems,
      customerInfo,
      setCustomerInfo,
      handleWishlist,
      handleShoppingCart,
      handleAddToCart,
      handleDeleteFilter,
      handleResetFilters,
      handleDelete,
      searchParams,
      setSearchParams,
      filterShop,
    };
  }, [
    error,
    filters,
    handleAddToCart,
    wishlist,
    handleDeleteFilter,
    handleResetFilters,
    handleShoppingCart,
    handleWishlist,
    isLoading,
    items,
    shoppingCart,
    cartItems,
    handleDelete,
    setShoppingCart,
    setWishlist,
    customerInfo,
    searchParams,
    setSearchParams,
    filterShop,
  ]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

function useStore() {
  const context = useContext(ShopContext);

  if (context === undefined)
    throw new Error("ShopContext was used outside of ShopProvider");

  return context;
}

// VREA FISIER SEPARAT PT FUNCTII SI COMPONENTA
export { ShopProvider, useStore };
