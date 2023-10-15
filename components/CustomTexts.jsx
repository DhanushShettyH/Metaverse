"use client";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";
export const TypingText = ({ title, textstyle }) => (
  <motion.p
    variants={textContainer}
    className={`${textstyle} font-normal text-[14px] text-secondary-white `}
  >
    {Array.from(title).map((letter, i) => (
      <motion.span variants={textVariant2} key={i}>
        {letter === " " ? "\u00A0" : letter} {/*unicode space*/}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textstyle }) => (
  <motion.h1
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`${textstyle} mt-[5px] font-bold md:text-[55px] text-[40px] text-white `}
  >
    {title}
  </motion.h1>
);
