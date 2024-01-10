import { useStore } from "../contexts/ShopContext";
import Spinner from "../ui/Spinner";

function AboutUs() {
  const { isLoading } = useStore();

  if (isLoading) return <Spinner />;

  return (
    <div className="mx-auto md:grid md:grid-cols-[2fr_2fr] xl:grid xl:w-[100%] xl:grid-cols-[2fr_2fr] 2xl:w-[80%] 2xl:grid-cols-[3fr_2fr]">
      <div className="flex flex-col gap-6 px-5 py-4 xl:px-24 xl:py-5">
        <div className="flex flex-col gap-2">
          <p className="text-xl opacity-70 xl:text-3xl">About Us </p>
          <p className="xl:text-xl">
            Welcome to Timeless, where style transcends the boundaries of trends
            and embraces the enduring allure of sophistication. We are not just
            a luxury clothes boutique; we are curators of timelessness,
            dedicated to crafting an exquisite fashion experience that stands
            the test of time.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl opacity-70  xl:text-3xl">Our Story</p>
          <p className="xl:text-xl">
            At Timeless, our journey is woven with threads of passion, elegance,
            and a commitment to redefine the artistry of fashion. Founded with
            the belief that true style is timeless, we curate collections that
            seamlessly blend contemporary flair with timeless classics. Every
            piece in our boutique tells a story of craftsmanship, luxury, and a
            commitment to unparalleled quality.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl opacity-70  xl:text-3xl">Our Philosophy</p>
          <p className="xl:text-xl">
            Timeless Elegance: Our philosophy revolves around the belief that
            true elegance is eternal. We meticulously select garments that
            transcend fleeting fashion trends, offering you a curated selection
            that exudes sophistication in every stitch. Uncompromising Quality:
            Each garment at Timeless is a testament to our commitment to
            excellence. From the finest fabrics to the smallest details, we
            uphold a standard of quality that ensures your wardrobe is a
            collection of enduring masterpieces. Personalized Service: Step into
            our boutique, and you'll experience more than just shopping; you'll
            embark on a personalized journey. Our knowledgeable staff is
            dedicated to assisting you in finding the perfect ensemble that
            reflects your unique style.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl opacity-70  xl:text-3xl">
            The Timeless Experience
          </p>
          <p className="xl:text-xl">
            Curated Collections Explore our carefully curated collections, each
            piece chosen with a discerning eye for elegance and a passion for
            the extraordinary. From timeless classics to contemporary creations,
            our boutique is a haven for those who appreciate the art of
            dressing. Expert Styling Advice Need assistance in creating the
            perfect ensemble? Our expert stylists are here to guide you. Whether
            you're seeking a signature look or refining your wardrobe, we offer
            personalized advice to ensure you leave feeling confident and
            captivating.
          </p>
        </div>
      </div>
      <div className="flex">
        <img
          src="https://ueunghauywvnklvbkhuz.supabase.co/storage/v1/object/sign/products/About%20us%20img/yasamine-june-U4Ewfl8ewq0-unsplash.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0cy9BYm91dCB1cyBpbWcveWFzYW1pbmUtanVuZS1VNEV3Zmw4ZXdxMC11bnNwbGFzaC5qcGciLCJpYXQiOjE3MDIwMzc1MjUsImV4cCI6MTczMzU3MzUyNX0.F5mz84dvQKes_fLRDhl1uQXSR9qBEEVKEdheM8EF_N4&t=2023-12-08T12%3A12%3A09.146Z"
          alt="man chosing suit color and material"
          className="hidden brightness-50 md:block xl:w-full"
        />
      </div>
    </div>
  );
}

export default AboutUs;
