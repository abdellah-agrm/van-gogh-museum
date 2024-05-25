import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../Elements/Motion";
import PaintingCard from "../components/PaintingCard";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { paintings } from "../Elements/Content";

export default function Paintings() {

  return (
    <motion.div id='paintings' variants={staggerContainer} initial="hidden" whileInView="show"
      viewport={{ once: false, amount: 0.25 }} className="padding-x w-full min-h-screen gap-10 max-container">

      <motion.h2 variants={textVariant(0.2)} className="text-my-white my-8 text-[50px] max-sm:text-[34px] font-semibold">
        Our Paintings
      </motion.h2>

      <div className="grid grid-cols-3 mb-6 gap-4 max-md:flex max-md:flex-col">
        {
          paintings.map((items, index) => (
            <PaintingCard key={index} index={index + 1} item={items} />
          ))
        }
      </div>

      <div className="flex justify-end">
        <motion.button variants={fadeIn('right', 'spring', 3.5, 0.75)} className="flex justify-center items-center gap-2 rounded-full py-2 px-12 border font-semibold font-montserrat text-sm leading-none text-my-dark bg-my-white">
          See more <ArrowRightIcon className="ml-2 rounded-full text-my-dark w-auto h-4" />
        </motion.button>
      </div>
    </motion.div>
  )
}