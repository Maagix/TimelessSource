import { Link } from "react-router-dom";
import NewsletterForm from "./NewsletterForm";

function Footer() {
  return (
    <>
      <NewsletterForm />
      <footer className="flex items-center justify-between gap-2 bg-main-dark px-6 py-10 text-zinc-50 xl:px-20">
        <div className="z-10 flex">
          <ul className="flex w-full flex-col justify-around gap-3 text-lg md:flex-row">
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <Link to="/services">Services</Link>
          </ul>
        </div>
        <div className="absolute left-0 flex w-full justify-center">
          <Link to="/">
            <p className="text-2xl tracking-wide">TIMELESS</p>
          </Link>
        </div>
        <div className="z-10 flex flex-col gap-3 md:flex-row">
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            X
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
