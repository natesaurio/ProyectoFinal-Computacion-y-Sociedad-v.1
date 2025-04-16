import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const ScrollToTopHomeButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    if (!isVisible) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {path === "/" && (
        <button
          aria-label="ScrollToTop"
          name="ScrollToTop"
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-[#B25A28] p-4 rounded-full shadow-lg text-white hover:scale-110 transform transition-transform duration-300">
            <FontAwesomeIcon icon={faArrowUp} className="text-2xl" />
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollToTopHomeButton;