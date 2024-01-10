import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../contexts/ShopContext";
import Spinner from "../ui/Spinner";
import { capitalizeWord, formatCurrency } from "../utils/helpers";
import { useEffect, useState } from "react";

function Order() {
  const { customerInfo, setShoppingCart } = useStore();
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [timer, setTimer] = useState(30);

  const today = new Date();
  const deliveryDate = new Date(
    today.setDate(today.getDate() + 3),
  ).toDateString();

  const { cartItems, isLoading } = useStore();

  const totalCost = cartItems
    ?.map((item) => item.price * item.quantity)
    .reduce((acc, cur) => acc + cur, 0);

  useEffect(
    function () {
      const redirectToHomepage = setTimeout(() => {
        navigate("/");
        setShoppingCart([]);
      }, 30000);

      return () => {
        clearTimeout(redirectToHomepage);
      };
    },
    [navigate, setShoppingCart],
  );

  useEffect(function () {
    const interval = setInterval(() => setTimer((time) => time - 1), 1000);
    return () => clearInterval(interval);
  }, []);

  function handleBackBtn() {
    setShoppingCart([]);
    navigate("/");
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-main-bg-yellow">
      <div className="flex h-full w-full flex-col justify-center gap-4 border p-4 lg:w-4/5 2xl:w-3/5">
        <p className="text-lg">
          You will be redirecting to the homepage in{" "}
          <span className="font-semibold">{timer}</span>
        </p>
        <div className="flex flex-col gap-1 p-4">
          <div className="flex items-center justify-between border-b border-main-gray">
            <p className="text-2xl">
              Order <span className="font-semibold">#{orderId}</span>
            </p>
            <button
              className="bg-main-red p-2 tracking-wide text-white sm:text-2xl"
              onClick={handleBackBtn}
            >
              Back to homepage
            </button>
          </div>
          <p className="text-xl tracking-wide">
            Thank you for ordering from us!
          </p>
          <p className="text-lg tracking-wide">
            Estimated time of delivery:{" "}
            <span className="font-semibold">{deliveryDate}</span>
          </p>
        </div>

        <div className="flex flex-col gap-1 border p-2 font-medium tracking-wide">
          <div className="flex flex-col gap-2 border border-main-gray p-2">
            <p className="text-xl font-medium">Shipping information</p>
            <p className="text-lg">Name: {customerInfo.name}</p>
            <p className="text-lg">
              Adress: {customerInfo.address.address},{" "}
              {capitalizeWord(customerInfo.address.city)},{" "}
              {capitalizeWord(customerInfo.address.country)}
            </p>
            <p className="text-lg">Phone number: {customerInfo.phoneNumber}</p>
            <p className="text-lg">Email: {customerInfo.email}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 p-4 shadow-md">
          <p className="text-xl font-medium">Order summary</p>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border-b border-main-gray text-lg tracking-wide"
            >
              <p>
                {item.quantity}x {item.productName}, size:{" "}
                {item.selectedSize.toUpperCase()}, --{" "}
                {formatCurrency(item.price)}
              </p>
            </div>
          ))}
          <p className="text-xl tracking-wide">
            <span>Total price:</span>{" "}
            <span className="font-semibold">{formatCurrency(totalCost)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Order;
