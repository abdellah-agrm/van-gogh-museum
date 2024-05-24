import { motion } from "framer-motion";
import { Contact01, Contact02 } from "../assets/images";
import { fadeIn, staggerContainer } from "../Elements/Motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ContactUs() {
  return (
    <motion.div id='contact-us' variants={staggerContainer} initial="hidden" whileInView="show"
      viewport={{ once: false, amount: 0.25 }} className="padding-x w-full flex items-center min-h-screen gap-10 max-container">

      <div className="grid grid-cols-2 gap-4 max-md:flex max-md:flex-col">

        <div className="col-span-1 mt-4">
          <div className="grid grid-col-5 gap-2 text-my-white text-4xl max-md:text-3xl">
            <motion.p variants={fadeIn('right', 'spring', 0.5, 1)} className="col-span-5">You can contact us</motion.p>
            <motion.div variants={fadeIn('right', 'spring', 1, 1)} className="flex items-center flex-wrap col-span-5 col-start-2">
              <p>use this form</p>
              <img src={Contact01} alt="contact 01" className="col-span-1 w-auto h-10 max-sm:h-7 mt-2 max-sm:mt-1 ml-3 rounded-full" />
            </motion.div>
            <motion.div variants={fadeIn('right', 'spring', 1.5, 1)} className="flex items-center flex-wrap col-span-5 col-start-2">
              <img src={Contact02} alt="contact 02" className="col-span-1 w-auto h-10 max-sm:h-7 mt-2 max-sm:mt-1 mr-3 rounded-full" />
              <p>the product exceeded</p>
            </motion.div>
          </div>
        </div>

        <div className="col-span-1">
          <motion.div variants={fadeIn('left', 'spring', 2, 1)} className="grid grid-col-6 p-6 gap-4 bg-my-white/35 rounded-2xl">
            {
              ["full name", "subject", "email", "message"].map((item, index) => (
                <input key={index} type="text" placeholder={item} className="input" />
              ))
            }
          </motion.div>
          <div className="flex justify-end mt-4">
            <motion.button variants={fadeIn('left', 'spring', 2.5, 1)} className="flex justify-center items-center gap-2 rounded-full py-2.5 px-8 border font-semibold font-montserrat text-base leading-none text-my-dark bg-my-white">
              Submit <ArrowRightIcon className="ml-2 rounded-full text-my-dark w-auto h-5" />
            </motion.button>
          </div>
        </div>

      </div>

    </motion.div>
  )
}