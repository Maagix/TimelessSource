import { Link } from "react-router-dom";
import LookbookCover from "./LookbookCover";
import { MEN_LOOKBOOK_COVER, WOMEN_LOOKBOOK_COVER } from "../utils/helpers";

function EmptyCart({ type }) {
  return (
    <div className={`mx-auto flex flex-col items-center gap-10 px-2 py-2`}>
      <div
        className={`flex flex-col gap-2 px-2 text-2xl sm:flex-row ${
          type === "hover" && "flex text-center sm:flex-col"
        }`}
      >
        <p>Your cart is empty, if you want to keep shopping visit:</p>
        <ul className="flex flex-col gap-1 text-main-red">
          <li className="underline underline-offset-2">
            <Link to="/">Homepage</Link>
          </li>
          <li className="underline underline-offset-2">
            <Link to="/shop/men">Men Shop</Link>
          </li>
          <li className="underline underline-offset-2">
            <Link to="/shop/women">Women Shop</Link>
          </li>
        </ul>
      </div>

      {type !== "hover" && (
        <div className="flex flex-col gap-3 px-2 py-2 sm:flex-row xl:w-2/3">
          <LookbookCover
            image={WOMEN_LOOKBOOK_COVER}
            page={"/lookbook/women"}
            text={"Women Lookbook"}
          />
          <LookbookCover
            image={MEN_LOOKBOOK_COVER}
            page={"/lookbook/men"}
            text={"Men Lookbook"}
          />
        </div>
      )}
    </div>
  );
}

export default EmptyCart;
