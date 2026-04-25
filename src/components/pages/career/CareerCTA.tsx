"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CareerCTA() {
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
          Don&apos;t see your role?
        </h2>
        <p className="text-[rgba(238,238,246,0.5)] mb-8 max-w-md mx-auto">
          We&apos;re always interested in meeting exceptional people. Send us
          your story.
        </p>
        <Link
          href="/careers/apply"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#4f8ef7] text-white font-semibold hover:bg-[#3a7de8] transition-all hover:shadow-[0_0_30px_rgba(79,142,247,0.4)]"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
}
