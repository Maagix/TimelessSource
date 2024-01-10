import { Link } from "react-router-dom";
import { capitalizeWord, formatCurrency } from "../utils/helpers";

function SuggestionRow({ products, start, end }) {
  return (
    <div className="grid grid-cols-2 grid-rows-[1fr_0] gap-2 overflow-hidden px-2 sm:grid-cols-3 md:mx-auto md:gap-10 md:p-3 lg:w-4/5 lg:p-5 xl:p-10">
      {products
        .map((prod) => (
          <Link
            to={`/shop/${prod.id}`}
            key={prod.id}
            className="w-full cursor-pointer"
          >
            <div className="overflow-hidden">
              <img
                src={prod.image}
                className="w-full transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="text-xl tracking-wider">
              {capitalizeWord(prod.productName)}
            </p>
            <p className="text-lg">{formatCurrency(prod.price)}</p>
          </Link>
        ))
        .slice(start, end)}
    </div>
  );
}

export default SuggestionRow;
