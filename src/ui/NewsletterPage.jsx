import { HiOutlineX } from "react-icons/hi";
import Modal from "./Modal";

function NewsletterPage({ closeFn }) {
  return (
    <Modal
      closeFn={closeFn}
      styles={
        "2xl: w-4/5 h-[80vh] bg-main-bg-yellow flex flex-col gap-5 sm:gap-10 relative justify-center"
      }
    >
      <p className="p-2 text-center text-2xl text-main-red sm:text-2xl xl:text-3xl">
        Welcome to Timeless, where elegance stands still and style knows no
        bounds!
      </p>
      <div className="w-full bg-main-bg-yellow p-2">
        <div className="flex-col gap-4 px-4 py-2 text-lg sm:text-lg xl:text-xl">
          <ul className="flex flex-col gap-3">
            <p className="font-semibold">
              Here's what you can look forward to:
            </p>
            <li>
              <span className="font-semibold">Early Access </span>
              <span className="hidden sm:inline-block">
                Be the first to explore our newest collections.
              </span>
            </li>
            <li>
              <span className="font-semibold">Exclusive Offers </span>
              <span className="hidden sm:inline-block">
                Indulge in exclusive discounts and bespoke offers. Because at
                Timeless, we believe that your style should be as enduring as
                the savings you enjoy.
              </span>
            </li>
            <li>
              <span className="font-semibold">Fashion Insights </span>
              <span className="hidden sm:inline-block">
                Delight in curated style tips and insights. Elevate your
                wardrobe with our expert recommendations. We'll keep you
                informed and inspired.
              </span>
            </li>
            <li>
              <span className="font-semibold">VIP Invitations </span>
              <span className="hidden sm:inline-block">
                Your subscription grants you access to VIP events and private
                shopping experiences. Join us as we celebrate the timeless
                artistry of fashion
              </span>
            </li>
          </ul>
        </div>
        <button
          className="absolute right-2 top-2 rounded-full bg-main-gray/80 px-2 py-2 text-2xl text-white hover:bg-white hover:text-main-red "
          onClick={closeFn}
        >
          <HiOutlineX />
        </button>
      </div>
      <p className="p-2 text-center text-2xl text-main-red sm:text-2xl xl:text-3xl">
        Thank you for choosing TIMELESS. We can't wait to be a part of your
        style story.
      </p>
    </Modal>
  );
}

export default NewsletterPage;
