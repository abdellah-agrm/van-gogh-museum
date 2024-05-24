import { motion } from "framer-motion";
import { fadeIn } from "../Elements/Motion";

export default function ArtistCard({ index, item }) {
  return (
    <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="col-span-1 grid grid-cols-2 bg-my-white rounded-2xl">
      <img src={item.urlImg} alt={`artist ${index}`} className="col-span-2 rounded-t-2xl w-full" />
      <div className="col-span-2 p-4">
        <p className="text-base font-semibold mb-3">{item.name}</p>
        <p className="text-sm">{item.smallBio}</p>
      </div>
    </motion.div>
  )
}