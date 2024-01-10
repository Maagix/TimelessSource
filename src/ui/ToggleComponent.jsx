import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

function ToggleComponent({ items }) {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <>
      {items.map((item, i) => (
        <div
          className="py-2"
          key={item.title}
          onClick={() => (i === isOpen ? setIsOpen(null) : setIsOpen(i))}
        >
          <div className="flex cursor-pointer justify-between">
            <p
              className={`${
                isOpen === i && "font-semibold"
              } transition-all duration-75`}
            >
              {item.title}
            </p>
            <span
              className={`${
                isOpen === i && "rotate-180"
              } transition-all duration-300`}
            >
              <HiChevronDown />
            </span>
          </div>

          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen === i
                ? "grid-rows[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            {isOpen === i && (
              <div className="overflow-hidden px-2 text-start">
                {item.content}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default ToggleComponent;
