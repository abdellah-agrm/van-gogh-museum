import { motion } from "framer-motion";
import { fadeIn } from "../Elements/Motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function PaintingCard({ index, item }) {
  return (
    <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="col-span-1 grid grid-cols-2 gap-4 p-4 bg-my-white rounded-2xl">
      <img src={item.urlImg} alt={`painting ${index}`} className="col-span-2 rounded-2xl" />
      <p className="col-span-2 text-sm">{item.details}</p>
      <div className="col-span-2 grid grid-cols-2 gap-2">
        <h2 className="col-span-1 flex items-center text-xl font-semibold text-my-dark">{item.price}</h2>
        <button className="col-span-1 flex justify-center items-center gap-2 rounded-full w-full py-2 border font-montserrat text-sm leading-none text-my-white bg-my-dark">
          Shop now <ArrowRightIcon className="ml-2 rounded-full text-my-white w-auto h-4" />
        </button>
      </div>
    </motion.div>
  )
}