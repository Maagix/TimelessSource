import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";

function Modal({ children, scrollFn, closeFn, styles }) {
  // error when not passing closeFn
  const ref = useOutsideClick(closeFn);

  useEffect(() => {
    if (scrollFn) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "10px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    };
  }, [scrollFn]);

  return createPortal(
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black/50">
      <div ref={ref} className={styles}>
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
