"use client";
import { motion } from "framer-motion";

export default function BlogCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d14]">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[rgba(79,142,247,0.05)] blur-[80px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full px-6 lg:px-12 xl:px-20 text-center"
      >
        <h2 className="font-display font-700 text-3xl lg:text-4xl text-[#eeeef6] mb-4">
          Stay in the loop
        </h2>
        <p className="text-[rgba(238,238,246,0.5)] mb-8 max-w-md mx-auto">
          Get the latest articles, case studies, and insights delivered to your
          inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] text-[#eeeef6] placeholder:text-[rgba(238,238,246,0.3)] text-sm focus:border-[rgba(79,142,247,0.4)] focus:outline-none transition-all"
          />
          <button className="px-6 py-3 rounded-xl bg-[#4f8ef7] text-white font-medium text-sm hover:bg-[#3a7de8] transition-all whitespace-nowrap cursor-pointer">
            Subscribe
          </button>
        </div>
      </motion.div>
    </section>
  );
}
