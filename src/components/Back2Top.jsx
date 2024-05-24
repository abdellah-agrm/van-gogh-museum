import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react"
// import { scroller } from "react-scroll";
import { animateScroll } from "react-scroll";

export default function Back2Top() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    }
  }, []);

  const options = {
    duration: 200,
    smooth: true,
    spy: true
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop(options);
  };

  return (
    <>
      {
        isVisible &&
        (<button className="fixed bottom-4 right-4 flex justify-center items-center h-12 w-12 bg-my-white border border-my-dark p-2 rounded-full" 
        onClick={scrollToTop}>
          <ArrowUpIcon className="h-7 w-7 text-my-dark" />
        </button>)
      }
    </>
  );
}