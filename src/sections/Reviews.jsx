import { motion } from "framer-motion";
import { Review01, Review02, Review03 } from "../assets/images";
import { fadeIn, staggerContainer, textVariant } from "../Elements/Motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import ReviewCard from "../components/ReviewCard";

export default function Reviews() {
  const reviews = [
    {
      urlImg: Review01,
      review: "Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance. Experience worry-free transactions with our secure payment options. Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.",
      name: "@leomessi"
    },
    {
      urlImg: Review02,
      review: "Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance. Experience worry-free transactions with our secure payment options. Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.",
      name: "@kanyewest"
    },
    {
      urlImg: Review03,
      review: "Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance. Experience worry-free transactions with our secure payment options. Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.",
      name: "@elonmusk"
    }
  ]

  return (
    <motion.div id='reviews' variants={staggerContainer} initial="hidden" whileInView="show"
      viewport={{ once: false, amount: 0.25 }} className="padding-x w-full flex items-center min-h-screen gap-10 max-container">

      <div>
        <div className="flex flex-wrap items-center">
          <motion.h2 variants={textVariant(0.2)} className="text-my-white text-[50px] max-sm:text-[34px] font-semibold">
            Reviews
          </motion.h2>
          <div className="flex flex-wrap gap-4 ml-8 mt-3 max-sm:ml-4">
            <motion.button variants={fadeIn('left', 'spring', 0.4, 0.75)} className="flex justify-center items-center h-10 w-10 bg-my-white p-2 rounded-full">
              <ArrowLeftIcon className="h-7 w-7 text-my-dark" />
            </motion.button>
            <motion.button variants={fadeIn('left', 'spring', 0.6, 0.75)} className="flex justify-center items-center h-10 w-10 bg-my-white p-2 rounded-full">
              <ArrowRightIcon className="h-7 w-7 text-my-dark" />
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-6 max-sm:flex max-sm:flex-col">
          {
            reviews.map((item, index) => (
              <ReviewCard key={index} index={index} item={item} />
            ))
          }
        </div>
      </div>

    </motion.div>
  )
}