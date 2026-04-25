"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ScrollToTop = () => {
  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="absolute right-6 lg:right-12 xl:right-20 bottom-16 w-12 h-12 rounded-full bg-[#2895f7] flex items-center justify-center text-white hover:bg-[#0082f3] hover:glow-blue transition-all duration-300 group cursor-pointer lg:hidden"
      aria-label="Back to top"
      whileHover={{ scale: 1.1 }}
    >
      <ArrowUpRight className="w-5 h-5 -rotate-45 group-hover:-translate-y-1 transition-transform" />
    </motion.button>
  );
};

export default ScrollToTop;
