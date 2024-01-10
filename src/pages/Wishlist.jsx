import Spinner from "../ui/Spinner";
import Product from "../ui/Product";
import { useStore } from "../contexts/ShopContext";

function Wishlist() {
  const { wishlist, items, isLoading } = useStore();

  const wishlistItems = items?.filter((item) => wishlist.includes(item.id));

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col text-center">
      <div className="flex flex-col gap-1 bg-main-bg-gray p-5">
        <h2 className="text-3xl">My wishlist</h2>
        <p className="text-xl">{`${wishlist.length} available ${
          wishlist.length > 1 ? "products" : "product"
        }`}</p>
      </div>
      <div className="flex flex-col gap-5 bg-white p-10 text-start sm:grid sm:grid-cols-2 sm:gap-5 sm:p-5 md:grid-cols-2 md:gap-5 md:p-5 lg:grid-cols-3 lg:gap-5 lg:p-5 2xl:gap-x-10 2xl:gap-y-5 2xl:p-10">
        {wishlistItems.map((item) => (
          <Product product={item} key={item.id} type="wishlist" />
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
