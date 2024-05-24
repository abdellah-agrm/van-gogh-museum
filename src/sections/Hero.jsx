import { motion } from "framer-motion";
import { Hero01, Hero02, Hero03, Hero04 } from "../assets/images";
import { fadeIn, staggerContainer, textVariant } from "../Elements/Motion";

export default function Hero() {
  return (
    <motion.div id='home' variants={staggerContainer} initial="hidden" whileInView="show"
      viewport={{ once: false, amount: 0.25 }} className="padding-x w-full min-h-screen gap-10 max-container">

      <div>
        <motion.h2 variants={textVariant(1)} className="text-my-white pt-5 leading-[65px] text-[64px] max-sm:text-[50px] max-sm:leading-[82px] font-bold">
          We Provide You Super Quality Shoes
          We Provide You Super Quality Shoes
        </motion.h2>
      </div>

      <div className="grid grid-cols-6 gap-6 mt-6 text-white w-full max-md:flex max-md:flex-col">

        <motion.div variants={fadeIn('left', 'spring', 1 * 0.5, 0.75)}
          className="col-span-2 grid grid-cols-4 gap-2 border border-my-white p-5 rounded-2xl">
          <div className="flex flex-col col-span-3">
            <p className="text-sm">Leonardo da vinci</p>
            <h3 className="text-2xl font-semibold">Monalisa</h3>
          </div>
          <div className="col-span-1">
            <img src={Hero01} className="rounded-2xl" alt="couple-01" />
          </div>
          <p className="col-span-4 flex items-end">
            Experience top-notch quality and style with our sought-after selections. Discover a world of comfort
          </p>
        </motion.div>

        <motion.div variants={fadeIn('left', 'spring', 2 * 0.5, 0.75)} className="col-span-1 grid grid-col-4">
          <div className="col-span-4 p-10"></div>
          <p className="col-span-3 flex items-end border border-my-white p-5 rounded-2xl">
            Experience top-notch quality and style with our selections.
          </p>
        </motion.div>

        <motion.div variants={fadeIn('left', 'spring', 3 * 0.5, 0.75)} className="col-span-3 pl-28">
          <img src={Hero02} className="rounded-2xl" alt="painting-02" />
          <p className="flex items-end text-end">
            Experience top-notch quality and style with our sought-after selections. Discover a world of comfort
          </p>
        </motion.div>

        <motion.div variants={fadeIn('left', 'spring', 4 * 0.5, 0.75)} className="col-span-2">
          <img src={Hero03} alt="painting-03" className="rounded-2xl" />
        </motion.div>

        <motion.div variants={fadeIn('left', 'spring', 5 * 0.5, 0.75)} className="col-span-2">
          <div className="grid grid-cols-4">
            <img src={Hero04} alt="painting-04" className="col-start-4 col-span-1 rounded-2xl" />
          </div>
          <div className="grid grid-cols-4 mt-3">
            <p className="col-span-2">
              Experience top-notch quality and style
            </p>
            <p className="flex justify-end items-end col-span-2 text-2xl font-semibold">
              56 Years
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeIn('left', 'spring', 6 * 0.5, 0.75)} className="col-span-2 border border-my-white p-5 rounded-2xl">
          Embark on a shopping journey that redefines your experience with unbeatable deals.
          From premier selections to incredible savings, we offer unparalleled value that sets us apart.
          Navigate a realm of possibilities designed to fulfill your unique desires.
        </motion.div>
      </div>

    </motion.div>
  )
}