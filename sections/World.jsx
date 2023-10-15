"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="| People on the World" textstyle="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textstyle="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[40px] flex w-full h-[500px] "
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover "
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
          <img
            src="people-01.png"
            alt="people"
            className="w-full h-full z-10 "
          />
          {/* this below image for gradiant */}
          <img src="people-01.png" alt="people" className="w-full h-full blur-2xl absolute top-0 z-0 "
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
          <img
            src="people-02.png"
            alt="people"
            className="w-full h-full" />
          <img src="people-02.png" alt="people" className="w-full h-full blur-2xl absolute top-0 z-0"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
          <img
            src="people-03.png"
            alt="people"
            className="w-full h-full" />
          <img src="people-03.png" alt="people" className="w-full h-full blur-2xl absolute top-0 z-0"
          />
        </div>
        <div className="absolute md:inline-block hidden top-5 right-[30%] w-[140px] h-[100px] p-[6px] rounded-[18px] bg-[#5d6680] ">
          <img
            src="map_cover2.png"
            alt="people"
            className="absolute w-full h-full object-cover rounded-[18px] z-10"
          />
          <img src="map_cover2.png" alt="people" className="w-full h-full object-cover rounded-[18px] absolute inset-0 blur-lg"
          />
        </div>
        <div className="absolute md:inline-block hidden bottom-[30%] left-[20%] w-[140px] h-[100px] p-[6px] rounded-[18px] bg-[#5d6680] ">
          <img
            src="map_cover1.png"
            alt="people"
            className="absolute w-full h-full object-cover rounded-[18px] z-10 "
          />
          <img src="map_cover1.png" alt="people" className="w-full h-full object-cover rounded-[18px] absolute inset-0 blur-lg"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
