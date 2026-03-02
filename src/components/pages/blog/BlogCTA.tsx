"use client"
import { motion } from "framer-motion";

const BlogCTA = () => {
  return (
    <section className="py-20">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-12 lg:p-16 rounded-3xl overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-linear-to-br from-[#2895f7]/20 to-[#00d9ff]/10" />
          <div className="absolute inset-0 bg-[#0a0a0c]/80" />

          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay in the Loop
            </h2>
            <p className="text-white/60 mb-8">
              Subscribe to our newsletter for the latest insights, trends, and
              updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-[#2895f7] focus:outline-none transition-colors"
              />
              <button className="px-8 py-4 bg-[#2895f7] text-white font-medium rounded-full hover:bg-[#0082f3] transition-all hover:glow-blue whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogCTA;
