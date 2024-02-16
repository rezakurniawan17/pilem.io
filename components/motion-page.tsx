"use client";
import { motion } from "framer-motion";

// export const MotionDiv = motion.div;
const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};
export default function MotionPage({ children }: any) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      animate="visible"
      viewport={{ amount: 0 }}
    >
      {children}
    </motion.div>
  );
}
