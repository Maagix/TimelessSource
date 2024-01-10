import { useState } from "react";
import { useStore } from "../contexts/ShopContext";
import Spinner from "../ui/Spinner";
import InputField from "../ui/InputField";
import toast from "react-hot-toast";

function Contact() {
  const { isLoading } = useStore();
  const [contactInfo, setContactInfo] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    object: "",
    topic: "",
    message: "",
  });

  if (isLoading) return <Spinner />;

  function handleSubmit(e) {
    e.preventDefault();

    toast.success(
      "Your message has been sent. Our team will contact you as soon as possible",
      {
        duration: 3000,
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      },
    );

    setContactInfo({
      ...contactInfo,
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      object: "",
      topic: "",
      message: "",
    });
  }

  return (
    <div>
      <h2 className="py-12 text-center text-3xl">Contact us</h2>

      <form
        className="mx-auto flex flex-col gap-5 px-7 md:w-2/3 lg:w-[55%] xl:w-1/2 2xl:w-[40%]"
        onSubmit={handleSubmit}
      >
        <div className="mb-5 flex flex-col gap-2">
          <p className="text-xl">Contact form</p>
          <p className="text-lg">
            Please fill in this form to send us a message. Our Client Service
            advisors will respond to your query as soon as possible.
          </p>
        </div>

        <select
          onChange={(e) =>
            setContactInfo({ ...contactInfo, title: e.target.value })
          }
          className="border-b border-main-gray bg-main-bg-gray p-1 py-2"
          value={contactInfo.title}
        >
          <option value="">Title</option>
          <option value="mr">Mr.</option>
          <option value="ms">Ms.</option>
          <option value="mrs">Mrs.</option>
        </select>

        <div className="flex w-full gap-2">
          <InputField
            type="text"
            placeholder="First Name"
            value={contactInfo.firstName}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, firstName: e.target.value })
            }
            styles="bg-main-bg-gray py-2 border-b border-main-gray placeholder:text-main-gray"
          />

          <InputField
            type="text"
            placeholder="Last Name"
            value={contactInfo.lastName}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, lastName: e.target.value })
            }
            styles="bg-main-bg-gray py-2 border-b border-main-gray placeholder:text-main-gray"
          />
        </div>
        <InputField
          type="email"
          placeholder="Email"
          value={contactInfo.email}
          onChange={(e) =>
            setContactInfo({ ...contactInfo, email: e.target.value })
          }
          styles="bg-main-bg-gray py-2 border-b border-main-gray placeholder:text-main-gray"
        />

        <InputField
          type="tel"
          placeholder="Phone Number"
          errMessage="Enter a 6-15 digit phone number"
          pattern="[0-9]{6,15}"
          value={contactInfo.phoneNumber}
          onChange={(e) =>
            setContactInfo({ ...contactInfo, phoneNumber: e.target.value })
          }
          styles="bg-main-bg-gray py-2 border-b border-main-gray placeholder:text-main-gray"
        />

        <select
          onChange={(e) =>
            setContactInfo({ ...contactInfo, object: e.target.value })
          }
          className="border-b border-main-gray bg-main-bg-gray p-1 py-2"
          value={contactInfo.object}
          required
        >
          <option value="">Object</option>
          <option value="online-shopping">Online shopping</option>
          <option value="product-info">Product information</option>
          <option value="company-info">Company information</option>
          <option value="store-purchases">In store purchases</option>
          <option value="private-appointment">Private store appointment</option>
        </select>

        <InputField
          type="text"
          placeholder="Message"
          value={contactInfo.message}
          onChange={(e) =>
            setContactInfo({ ...contactInfo, message: e.target.value })
          }
          styles="bg-main-bg-gray py-2 border-b border-main-gray placeholder:text-main-gray"
        />

        <button
          className="bg-main-red p-2 text-xl tracking-wide text-white transition-all hover:opacity-90"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
