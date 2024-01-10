import { Link } from "react-router-dom";
import LookbookCover from "../ui/LookbookCover";
import {
  LANDING_PAGE_MAIN_IMAGE,
  MEN_LOOKBOOK_COVER,
  WOMEN_LOOKBOOK_COVER,
} from "../utils/helpers";
import ImageSliderMultiple from "../ui/ImageSliderMultiple";
import Spinner from "../ui/Spinner";
import { useStore } from "../contexts/ShopContext";

function LandingPage() {
  const { items, isLoading } = useStore();

  const imageArr = items?.slice(0, 8);

  if (isLoading) return <Spinner />;

  return (
    <div className="w-100 flex h-max flex-col">
      <div className="relative h-[40vh] md:h-[80vh]">
        <img
          src={LANDING_PAGE_MAIN_IMAGE}
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute left-1/2 top-1/2 -translate-y-[50%] translate-x-[-50%] text-center">
          <h2 className="mb-4 text-center text-5xl text-white">TIMELESS</h2>

          <div className="flex flex-col gap-5 text-xl text-white sm:flex-row md:gap-10">
            <Link to="/shop/men" className="hover:underline">
              <button
                className="border border-white px-8 py-3 transition-all hover:bg-white
              hover:text-main-red"
              >
                Shop Men
              </button>
            </Link>
            <Link to="/shop/women" className="hover:underline">
              <button
                className="border border-white px-5 py-3 transition-all hover:bg-white
              hover:text-main-red"
              >
                Shop Women
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white py-8">
        <h2 className="text-center text-3xl">The latest selections</h2>
        <ImageSliderMultiple imageUrls={imageArr} />
      </div>

      <div className="flex flex-col sm:flex-row">
        <LookbookCover
          image={MEN_LOOKBOOK_COVER}
          page={"/lookbook/men"}
          text={"Men Lookbook"}
        />
        <LookbookCover
          image={WOMEN_LOOKBOOK_COVER}
          page={"/lookbook/women"}
          text={"Women Lookbook"}
        />
      </div>

      <div className="flex flex-col gap-10 bg-main-yellow py-10">
        <div className="flex flex-col gap-2 py-2">
          <p className="mb-4 text-center text-2xl tracking-wide lg:text-4xl">
            Coming SOON
          </p>
          <h2 className="text-center text-xl tracking-wide md:text-3xl">
            The FW23 Shoe Collection
          </h2>
          <p className="text-center text-lg tracking-wider md:text-2xl">
            Using bold materials and modern lines, the new FW23 shoe collection
            reimagines archetypal winter designs in the pursuit of comfortable
            style.
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <div className="relative xl:w-1/2">
            <img src="https://res.cloudinary.com/brunellocucinelli/image/upload/dpr_auto,f_auto,q_auto/v1/inspiration-2023/seasonal-archetypes/27-10-2023_riga_3_style_06_B_Brunello_Cucinelli" />

            <p className="absolute left-1/2 top-1/2 z-10 -translate-y-[50%] translate-x-[-50%] text-3xl text-white underline underline-offset-4">
              Women Boots
            </p>
          </div>
          <div className="flex flex-col gap-4 p-10 xl:w-1/2 xl:p-32 2xl:p-48">
            <h2 className="text-center text-2xl md:text-4xl">
              The perfect boot
            </h2>
            <p className="text-center text-lg md:text-xl">
              A shape that combines modernity with functionality. The FW23 boots
              are crafted from exquisite materials and feature distinct details.
            </p>
            <img src="https://res.cloudinary.com/brunellocucinelli/image/upload/dpr_auto,f_auto,q_auto/v1/inspiration-2023/seasonal-archetypes/27-10-2023_riga_6_style_06_B_Brunello_Cucinelli" />
            <button
              className="w-2/5 self-center whitespace-nowrap border-2 border-main-red py-2 text-center text-main-gray xl:w-1/3 xl:py-3"
              disabled
            >
              Coming soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
