import { useState } from "react";
import NewsletterPage from "./NewsletterPage";

function NewsletterForm() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
  }

  function handleCloseBtn() {
    setIsSubscribed(false);
  }

  return (
    <form
      className="flex flex-col items-center gap-3 bg-main-red p-5 py-9 text-center"
      onSubmit={handleSubmit}
    >
      <p className="text-2xl text-white">Subscribe to our newsletter</p>
      <p className="text-xl text-white">
        Be always updated with the latest exclusive news from TIMELESS
      </p>
      <div className="mt-2 flex w-full flex-col items-center gap-4 md:w-2/3">
        <input
          type="email"
          placeholder="Your email address"
          className="w-2/3 px-2 py-3 text-center"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          className="w-2/3 bg-main-gray px-2 py-3 text-white"
          disabled={isSubscribed}
        >
          SUBSCRIBE
        </button>
      </div>

      {isSubscribed && <NewsletterPage closeFn={handleCloseBtn} />}
    </form>
  );
}

export default NewsletterForm;
