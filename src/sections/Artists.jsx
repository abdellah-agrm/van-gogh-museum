import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../Elements/Motion";
import ArtistCard from "../components/ArtistCard";
import { artists } from "../Elements/Content";

export default function Artists() {

  return (
    <motion.div id='artists' variants={staggerContainer} initial="hidden" whileInView="show"
      viewport={{ once: false, amount: 0.25 }} className="padding-x w-full flex items-center min-h-screen gap-10 max-container">

      <div>
        <motion.h2 variants={textVariant(0.2)} className="text-my-white my-8 text-[50px] max-sm:text-[34px] font-semibold">
          All Artists
        </motion.h2>

        <div className="grid grid-cols-4 gap-4 max-md:flex max-md:flex-col max-md:gap-6">
          {
            artists.map((items, index) => (
              <ArtistCard key={index} index={index + 1} item={items} />
            ))
          }
        </div>
      </div>

    </motion.div>
  )
}