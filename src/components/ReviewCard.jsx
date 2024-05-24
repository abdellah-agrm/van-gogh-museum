import { motion } from "framer-motion";
import { fadeIn } from "../Elements/Motion";


export default function ReviewCard({ index, item }) {
  return (
    <motion.div variants={fadeIn('right', 'spring', index < 1 ? 1 : index + 2 * 0.4, 0.75)}
      className="col-span-1 grid grid-cols-2 gap-4 p-4 bg-my-white rounded-2xl">
      <p className="col-span-2 text-sm">{item.review}</p>
      <img src={item.urlImg} alt={`painting ${index}`} className="col-start-2 border-2 border-my-dark col-span-1 rounded-2xl" />
      <div className="col-span-2 grid grid-cols-2 gap-2">
        <p className="col-span-2 flex items-center px-4 py-1.5 rounded-full text-base font-medium bg-my-dark text-my-white">{item.name}</p>
      </div>
    </motion.div>
  )
}