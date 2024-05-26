import { motion } from "framer-motion";
import { navLinks } from "../Elements/Content";
import { navVariants } from "../Elements/Motion";
import { hamburger } from "../assets/icons";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Navbar = () => {

  return (
    <header id="header" className='padding-x pt-4 pb-10 z-10 w-full'>
      <motion.nav variants={navVariants} initial="hidden" whileInView="show"
        className="flex justify-between items-center rounded-full px-2 border border-my-white max-container" >
        <a href='/' className='m-0 ml-2 font-semibold text-my-white text-[35px]' >
          Van Gogh
        </a>
        <ul className='flex-1 mt-1 flex justify-center items-center gap-10 max-md:hidden'>
          {navLinks.map((item, index) => (
            <li key={index}>
              <ScrollLink to={item.href} spy={true} smooth={true} duration={index + 1 * 200} className='font-montserrat cursor-pointer leading-normal text-base text-my-white'>
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-md:hidden wide:mr-24'>
          <button className='flex justify-center items-center gap-2 rounded-full px-7 py-2.5 border font-montserrat text-lg leading-none bg-my-white text-my-dark border-my-white'>
            Explore now
            <ArrowRightIcon className="ml-2 rounded-full text-my-dark w-5 h-5" />
          </button>
        </div>
        <div className='hidden max-md:block'>
          <img src={hamburger} alt='hamburger icon' className="h-7 w-auto mr-2" />
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
