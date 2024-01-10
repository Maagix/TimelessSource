import { Link, useParams } from "react-router-dom";
import { useStore } from "../contexts/ShopContext";
import useLookbook from "../hooks/useLookbook";
import Spinner from "../ui/Spinner";
import { HiChevronLeft } from "react-icons/hi";
import Product from "../ui/Product";

function Look({ type }) {
  const { items } = useStore();
  const { data, isLoading, error } = useLookbook();

  const look =
    type === "m"
      ? data?.filter((item) => item.gender === "male")
      : data?.filter((item) => item.gender === "female");

  const { id } = useParams();
  const lookItems = items?.filter((item) => item.look === `${type}${id}`);

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col gap-1 xl:m-auto xl:w-3/4">
      <Link
        to={`/lookbook/${type === "m" ? "men" : "women"}`}
        className="sticky top-[10%] z-10 flex items-center gap-2 border-y border-y-main-gray bg-main-bg-gray p-3 text-3xl"
      >
        <span className="text-main-red">
          <HiChevronLeft />
        </span>
        <span>Back to the lookbook</span>
      </Link>
      <div className="md:grid md:grid-cols-[2fr_3fr] md:gap-2">
        <div className="top-[18%] h-fit bg-main-yellow md:sticky">
          <img src={look[id - 1].image} className="" />
        </div>
        <div className="flex max-h-[70%] flex-col gap-2">
          {lookItems?.map((item) => (
            <Product product={item} type="look" key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Look;
