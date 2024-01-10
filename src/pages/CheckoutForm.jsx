import InputField from "../ui/InputField";
import { useNavigate } from "react-router-dom";
import { useStore } from "../contexts/ShopContext";

function CheckoutForm() {
  const { customerInfo, setCustomerInfo } = useStore();
  const orderId = Math.floor(Math.random() * 9000 + 1000);

  const navigate = useNavigate();

  return (
    <div className="flex w-full flex-col items-center justify-center px-2 py-7">
      <h2 className="py-3 text-center text-3xl">Delivery information</h2>
      <p className="mb-7 text-center text-xl tracking-wide">
        Please fill this in order for us to properly ship your order.
      </p>
      <form
        className="flex w-full flex-col gap-5 border-2 border-main-red bg-main-bg-yellow p-7 md:w-2/3 lg:w-[55%] xl:w-1/2 xl:text-lg 2xl:w-[40%]"
        onSubmit={() => {
          navigate(`/order/${orderId}`);
        }}
      >
        <InputField
          type="text"
          label="Name"
          placeholder="Your full name..."
          styles={"bg-main-bg-yellow border-b border-main-red/50"}
          onChange={(e) =>
            setCustomerInfo({ ...customerInfo, name: e.target.value })
          }
        />
        <div className="grid grid-cols-2 gap-x-10 gap-y-3">
          <InputField
            type="text"
            label="Country"
            placeholder="Your country..."
            styles={"bg-main-bg-yellow border-b border-main-red/50"}
            onChange={(e) =>
              setCustomerInfo({
                ...customerInfo,
                address: { ...customerInfo.address, country: e.target.value },
              })
            }
          />
          <InputField
            type="text"
            label="City "
            placeholder="Your city..."
            styles={"bg-main-bg-yellow border-b border-main-red/50"}
            onChange={(e) =>
              setCustomerInfo({
                ...customerInfo,
                address: { ...customerInfo.address, city: e.target.value },
              })
            }
          />
          <div className="text col-span-full text-start">
            <InputField
              type="text"
              label="Address"
              placeholder="Your full address..."
              styles={"bg-main-bg-yellow border-b border-main-red/50"}
              onChange={(e) =>
                setCustomerInfo({
                  ...customerInfo,
                  address: { ...customerInfo.address, address: e.target.value },
                })
              }
            />
          </div>
        </div>
        <InputField
          type="tel"
          label="Phone number"
          placeholder="Your phone number..."
          styles={"bg-main-bg-yellow border-b border-main-red/50"}
          errMessage="Enter a 6-15 digit phone number"
          pattern="[0-9]{6,15}"
          onChange={(e) =>
            setCustomerInfo({ ...customerInfo, phoneNumber: e.target.value })
          }
        />
        <InputField
          type="email"
          label="Email"
          placeholder="Your e-mail..."
          styles={"bg-main-bg-yellow border-b border-main-red/50"}
          onChange={(e) =>
            setCustomerInfo({ ...customerInfo, email: e.target.value })
          }
        />

        <button
          className="bg-main-red p-2 text-xl tracking-wide text-white transition-all hover:opacity-90"
          type="submit"
        >
          Send order
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
