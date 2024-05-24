import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../Elements/Motion";
import { Painting01, Painting02, Painting03, Painting04, Painting05, Painting06 } from "../assets/images";
import PaintingCard from "../components/PaintingCard";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Paintings() {
  const paintings = [
    {
      urlImg: Painting01,
      details: "Navigate a realm of possibilities designed to fulfill your unique desires, surpassing.",
      price: "1500 MAD"
    },
    {
      urlImg: Painting02,
      details: "Navigate a realm of possibilities designed to fulfill your unique.",
      price: "4100 MAD"
    },
    {
      urlImg: Painting03,
      details: "Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest.",
      price: "2500 MAD"
    },
    {
      urlImg: Painting04,
      details: "Navigate a realm of possibilities designed to fulfill your unique desires, surpassing.",
      price: "3200 MAD"
    },
    {
      urlImg: Painting05,
      details: "Navigate a realm of possibilities designed to fulfill your unique.",
      price: "1800 MAD"
    },
    {
      urlImg: Painting06,
      details: "Navigate a realm of possibilities desires, surpassing the loftiest expectations.",
      price: "4700 MAD"
    },
  ];

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