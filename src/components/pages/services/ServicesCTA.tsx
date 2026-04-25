"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d14]">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[rgba(79,142,247,0.05)] blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(79,142,247,0.2)] to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full px-6 lg:px-12 xl:px-20 text-center"
      >
        <h2 className="font-display font-700 text-4xl lg:text-5xl text-[#eeeef6] leading-tight mb-5">
          Not sure which service{" "}
          <span className="text-gradient">fits?</span>
        </h2>
        <p className="text-[rgba(238,238,246,0.5)] max-w-lg mx-auto mb-10 text-lg leading-relaxed">
          Book a free 30-minute discovery call. We&apos;ll listen, ask the right questions, and tell you exactly how we can help.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[#4f8ef7] text-white font-semibold hover:bg-[#3a7de8] transition-all hover:shadow-[0_0_36px_rgba(79,142,247,0.45)]"
          >
            <Calendar className="w-4 h-4" />
            Book a Discovery Call
          </Link>
          <Link
            href="/#case-studies"
            className="flex items-center gap-2 px-8 py-4 rounded-xl border border-[rgba(255,255,255,0.1)] text-[rgba(238,238,246,0.65)] font-semibold hover:border-[rgba(79,142,247,0.3)] hover:text-[#eeeef6] transition-all"
          >
            See Our Work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
