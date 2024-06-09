import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { footerVariants, textVariant } from "../Elements/Motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { footerLinks } from "../Elements/Content";

const Footer = () => {

  return (
    <motion.footer variants={footerVariants} initial="hidden" whileInView="show" className='padding-x pt-16 max-sm:mt-10 pb-5 max-container font-medium bg-my-white text-my-dark'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <motion.a variants={textVariant(0.6)} href='/' className='m-0 font-semibold text-[35px]' >
            Van Gogh
          </motion.a>
          <motion.p variants={textVariant(0.8)} className='mt-4 text-base leading-7 sm:max-w-sm'>
          Discover the timeless artistry of Vincent Van Gogh through our immersive online museum.
          </motion.p>
          <motion.div variants={textVariant(1.2)} className='flex items-center grid-cols-5 gap-2 max-sm:flex-col mt-4'>
            <input type="text" placeholder="email" className="col-span-4 input border-my-dark placeholder:text-my-dark text-my-dark font-medium" />
            <button className="flex justify-center items-center col-span-1 gap-2 w-full rounded-full h-9 px-5 font-semibold text-sm leading-none border border-my-dark text-my-dark bg-transparent">
              Subscribe <ArrowRightIcon className="ml-2 rounded-full text-my-dark w-auto h-5" />
            </button>
          </motion.div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='text-2xl leading-normal font-medium mb-6'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li className='mt-3 cursor-pointer text-base leading-normal hover:text-gray-600' key={link.name}>
                    <ScrollLink to={link.link} spy={true} smooth={true} duration={800}>
                      {link.name}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 cursor-pointer'>
          <p><span className="text-xl mt-1">©</span>Abdellah. All rights reserved.</p>
        </div>
        <p className='cursor-pointer'>Terms & Conditions</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
