"use client"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CareerCTA = () => {
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

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don&apos;t See the Right Fit?
            </h2>
            <p className="text-white/60 mb-8">
              We&apos;re always interested in meeting talented people. Send us
              your resume and we&apos;ll keep you in mind for future
              opportunities.
            </p>
            <a
              href="mailto:careers@technova.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2895f7] text-white font-medium rounded-full hover:bg-[#0082f3] transition-all hover:glow-blue"
            >
              Send Your Resume
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerCTA;
