import Spinner from "../ui/Spinner";
import useLookbook from "../hooks/useLookbook";
import SuggestionRow from "../ui/SuggestionRow";
import { useEffect, useState } from "react";
import ImageSliderSingle from "../ui/ImageSliderSingle";
import { useStore } from "../contexts/ShopContext";
import { Link } from "react-router-dom";

function Lookbook({ type }) {
  const { data, isLoading, error } = useLookbook();
  const { items, isLoading: isFetching } = useStore();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menLookbook = data?.filter((img) => img.gender === "male");
  const womenLookbook = data?.filter((img) => img.gender === "female");

  const products =
    type === "men"
      ? items?.filter((prod) => prod.gender === "men")
      : items?.filter((prod) => prod.gender === "women");

  const imageUrls = type === "men" ? menLookbook : womenLookbook;

  const looks = imageUrls?.map((item, i) => (
    <Link
      to={`/lookbook/${type}/${i + 1}`}
      className="relative w-1/2 cursor-pointer hover:brightness-90"
      key={item.id}
    >
      <img src={item.image} />
      <button
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform border border-white px-5 py-3 text-xl  text-white transition-all hover:bg-white
         hover:text-main-red"
      >
        Look {i + 1}
      </button>
    </Link>
  ));

  if (isLoading || isFetching) return <Spinner />;

  return (
    <div className="flex flex-col gap-3 bg-main-yellow" key={type}>
      <ImageSliderSingle imageUrls={imageUrls} />
      <div className="w-full sm:flex">{looks.slice(0, 2)}</div>
      <div className="w-full bg-main-yellow">
        <SuggestionRow products={products} start={0} end={3} />
      </div>
      <div className="w-full sm:flex">{looks.slice(2, 4)}</div>
      <div className="w-full bg-main-yellow">
        <SuggestionRow products={products} start={4} end={7} />
      </div>
    </div>
  );
}

export default Lookbook;
