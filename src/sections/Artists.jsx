import { motion } from "framer-motion";
import { Artist01, Artist02, Artist03, Artist04 } from "../assets/images";
import { staggerContainer, textVariant } from "../Elements/Motion";
import ArtistCard from "../components/ArtistCard";

export default function Artists() {
  const artists = [
    {
      urlImg: Artist01,
      name: "Leonardo da vinci",
      smallBio: "Navigate a realm of possibilities designed to fulfill your unique desires, surpassing."
    },
    {
      urlImg: Artist02,
      name: "Marshel mothers",
      smallBio: "Navigate a realm of possibilities designed to fulfill your unique."
    },
    {
      urlImg: Artist03,
      name: "Kanye west",
      smallBio: "Navigate a realm of possibilities designed to fulfill your unique desires."
    },
    {
      urlImg: Artist04,
      name: "Dizzy dross",
      smallBio: "Navigate a realm of possibilities designed to fulfill your unique desires, surpassing."
    }
  ];

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