"use client"
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 1 }, delay: 0.5, },
    exit: { opacity: 0, transition: { duration: 1 } }
  }

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.main
          variants={variants}
          initial="hidden"
          animate="enter"
          transition={{ type: "linear" }}
        >
          {children}
        </motion.main>
      )
  }