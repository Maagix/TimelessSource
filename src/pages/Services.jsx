import { Link } from "react-router-dom";
import Service from "../ui/Service";

function Services() {
  return (
    <div className="mx-auto flex flex-col p-4 lg:w-3/4 2xl:w-2/4">
      <Service
        image={
          "https://ueunghauywvnklvbkhuz.supabase.co/storage/v1/object/sign/products/Services/ICO-2024-009-1-.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0cy9TZXJ2aWNlcy9JQ08tMjAyNC0wMDktMS0ucG5nIiwiaWF0IjoxNzA0NDU2MTQyLCJleHAiOjE3MzU5OTIxNDJ9.itrqOy5QgOz4Jy0SSD1ha4if0LJ8wPLy979HK0BQHk8&t=2024-01-05T12%3A02%3A23.021Z"
        }
        title={"Free shipping worldwide"}
        text={
          "Indulge in the luxury of convenience with our complimentary worldwide shipping. No matter where you are, experience the ease of having your carefully curated selections delivered to your doorstep, ensuring that the essence of opulence is just a click away."
        }
      />
      <Service
        image={
          "https://ueunghauywvnklvbkhuz.supabase.co/storage/v1/object/sign/products/Services/ICO-2024-008-1-.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0cy9TZXJ2aWNlcy9JQ08tMjAyNC0wMDgtMS0ucG5nIiwiaWF0IjoxNzA0NDU2MTU0LCJleHAiOjE3MzU5OTIxNTR9.LBXAS_aMH4JXMZoL0nW9JjfbVLr6KDgDBW5a1rL2UZk&t=2024-01-05T12%3A02%3A35.301Z"
        }
        title="Free returns and exchanges"
        text={
          "We understand that perfection is paramount. Shop with confidence, knowing that our commitment to excellence extends to our hassle-free returns and exchanges policy. If your purchase doesn't meet your expectations, we make it easy for you to refine your choices and ensure absolute satisfaction."
        }
      />
      <Service
        image={
          "https://ueunghauywvnklvbkhuz.supabase.co/storage/v1/object/sign/products/Services/ICO-2024-010-1-.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0cy9TZXJ2aWNlcy9JQ08tMjAyNC0wMTAtMS0ucG5nIiwiaWF0IjoxNzA0NDU2MTYyLCJleHAiOjE3MzU5OTIxNjJ9.akUzL2CveYUHqh0QKv5eRCPG50er-psIbjynpQUu3G4&t=2024-01-05T12%3A02%3A42.568Z"
        }
        title="Book a private appointment to the store"
        text={
          "Step into an exclusive realm of personalized luxury with our private appointments to the store. Enjoy an intimate and tailored shopping experience where our expert stylists cater to your unique tastes and preferences. Whether you seek wardrobe advice or are in search of a standout piece, our private appointments ensure a bespoke journey curated just for you."
        }
        linkTo={
          <p className="font-semibold">
            To book an appointment use the{" "}
            <Link className="font-semibold text-main-red" to="/contact">
              Contact Form
            </Link>{" "}
            or call the store where you would like to shop at.
          </p>
        }
      />
    </div>
  );
}

export default Services;
