import { motion } from "framer-motion";
import { Hero01, Hero02, Hero03, Hero04 } from "../assets/images";
import { fadeIn, staggerContainer, textVariant } from "../Elements/Motion";

export default function Hero() {
  return (
    <motion.div id='home' variants={staggerContainer} initial="hidden" whileInView="show"
      viewport={{ once: false, amount: 0.25 }} className="padding-x w-full min-h-screen gap-10 max-container">

      <div>
        <motion.h2 variants={textVariant(1)} className="text-my-white pt-5 leading-[65px] text-[64px] max-sm:text-[50px] max-sm:leading-[82px] font-bold">
          Explore Van Gogh’s Genius: A Journey Through Artistic Brilliance.
        </motion.h2>
      </div>

      <div className="grid grid-cols-6 gap-6 mt-6 text-white w-full max-md:flex max-md:flex-col">

        <motion.div variants={fadeIn('left', 'spring', 1 * 0.5, 0.75)}
          className="col-span-2 grid grid-cols-4 gap-2 border border-my-white p-5 rounded-2xl">
          <div className="flex flex-col col-span-3">
            <p className="text-sm">Vincent Willem van Gogh</p>
            <h3 className="text-2xl font-semibold">Van Gogh</h3>
          </div>
          <div className="col-span-1">
            <img src={Hero01} className="rounded-2xl" alt="couple-01" />
          </div>
          <p className="col-span-4 flex items-end">
            was a Dutch post-impressionist painter whose striking colors and emotional power influenced modern art. He tragically suffered from mental illness and died by suicide.
          </p>
        </motion.div>

        <motion.div variants={fadeIn('left', 'spring', 2 * 0.5, 0.75)} className="col-span-1 grid grid-col-4">
          <div className="col-span-4 p-10"></div>
          <p className="col-span-3 flex items-end border border-my-white p-5 rounded-2xl">
            His Art: Bold Strokes, Vibrant Hues, Deep Impact.
          </p>
        </motion.div>

        <motion.div variants={fadeIn('left', 'spring', 3 * 0.5, 0.75)} className="col-span-3 pl-28">
          <img src={Hero02} className="rounded-2xl" alt="painting-02" />
          <p className="flex items-end text-end">
            Van Gogh's Noon - Rest from Work radiates with vivid yellow fields and a deep blue sky, symbolizing intense artistic passion.
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
              A life cut short by tragedy, gone too soon.
            </p>
            <p className="flex justify-end items-end col-span-2 text-2xl font-semibold">
              37 years old
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeIn('left', 'spring', 6 * 0.5, 0.75)} className="col-span-2 border border-my-white p-5 rounded-2xl">
          Immersed in a world of vibrant hues and textured landscapes,
          these paintings capture the essence of emotion through their dynamic brushwork.
          Each canvas is a testament to the artist’s profound connection with nature,
          reflecting a deep understanding of color.
        </motion.div>
      </div>

    </motion.div>
  )
}