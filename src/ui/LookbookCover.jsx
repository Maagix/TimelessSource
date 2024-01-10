import { Link } from "react-router-dom";

function LookbookCover({ image, page, text }) {
  return (
    <Link to={page} className="relative cursor-pointer">
      <img
        src={image}
        className="transition-all duration-300 ease-in-out hover:brightness-75"
      />
      <button
        className="absolute left-1/2 top-1/2 -translate-y-[50%] translate-x-[-50%] border border-white px-5 py-3 text-xl text-white transition-all hover:bg-white
              hover:text-main-red"
      >
        {text}
      </button>
    </Link>
  );
}

export default LookbookCover;
