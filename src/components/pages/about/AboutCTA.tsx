"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d14]">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-[rgba(79,142,247,0.05)] blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(79,142,247,0.25)] to-transparent" />
      </div>

      {/* Decorative rings */}
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
        <div className="w-64 h-64 rounded-full border border-[rgba(79,142,247,0.2)]" />
        <div className="absolute inset-6 rounded-full border border-[rgba(79,142,247,0.15)]" />
        <div className="absolute inset-12 rounded-full border border-[rgba(79,142,247,0.1)] animate-spin-slow" />
        <div className="absolute inset-[3.75rem] rounded-full bg-[rgba(79,142,247,0.06)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full px-6 lg:px-12 xl:px-20 max-w-3xl"
      >
        <h2 className="font-display font-700 text-4xl lg:text-5xl text-[#eeeef6] leading-tight mb-6">
          Want to work with <span className="text-gradient">our team?</span>
        </h2>
        <p className="text-[rgba(238,238,246,0.5)] text-lg leading-relaxed mb-10 max-w-xl">
          Whether you&apos;re kicking off a new product or scaling an existing
          one, we&apos;d love to hear what you&apos;re building. Let&apos;s
          talk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/#contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[#4f8ef7] text-white font-semibold hover:bg-[#3a7de8] transition-all hover:shadow-[0_0_36px_rgba(79,142,247,0.45)]"
          >
            Start a Project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/services"
            className="flex items-center gap-2 px-8 py-4 rounded-xl border border-[rgba(255,255,255,0.1)] text-[rgba(238,238,246,0.65)] font-semibold hover:border-[rgba(79,142,247,0.3)] hover:text-[#eeeef6] transition-all"
          >
            Explore Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
