import Spinner from "../ui/Spinner";
import { useStore } from "../contexts/ShopContext";
import ShopItems from "../ui/ShopItems";

function Shop({ section, page }) {
  const { isLoading, items, searchParams } = useStore();

  const query = searchParams.get("q");
  const sortBy = searchParams.get("sortBy") || "asc";

  const sortedItems =
    sortBy === "asc"
      ? items?.toSorted((a, b) => (a.price > b.price ? 1 : -1))
      : items?.toSorted((a, b) => (a.price < b.price ? 1 : -1));

  let ShopByGender =
    (section === "Men"
      ? sortedItems?.filter((it) => it.gender === "men")
      : sortedItems?.filter((it) => it.gender === "women")) ?? [];

  ShopByGender = ShopByGender.map((item) => ({
    ...item,
    size: item.size.split(","),
  }));

  /////////////////////////
  let searchedItems = items?.filter(
    (item) =>
      item.productName.toLowerCase().includes(query?.toLowerCase()) ||
      item.category.includes(query?.toLowerCase()),
  );

  searchedItems =
    sortBy === "asc"
      ? searchedItems?.toSorted((a, b) => (a.price > b.price ? 1 : -1))
      : searchedItems?.toSorted((a, b) => (a.price < b.price ? 1 : -1));

  searchedItems = searchedItems?.map((item) => ({
    ...item,
    size: item.size.split(","),
  }));
  //////////////////////////////

  if (isLoading) return <Spinner />;

  if (page === "shopByGender")
    return <ShopItems products={ShopByGender} section={section} />;

  if (page === "search")
    return <ShopItems products={searchedItems} section={section} />;

  return null;
}

export default Shop;
