"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/25 to-transparent" />
      </div>

      {/* Decorative rings */}
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
        <div className="w-64 h-64 rounded-full border border-primary/20" />
        <div className="absolute inset-6 rounded-full border border-primary/15" />
        <div className="absolute inset-12 rounded-full border border-primary/10 animate-spin-slow" />
        <div className="absolute inset-[3.75rem] rounded-full bg-primary/10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full px-6 lg:px-12 xl:px-20 max-w-3xl"
      >
        <h2 className="font-display text-4xl lg:text-5xl text-foreground leading-tight mb-6">
          Want to work with <span className="text-gradient">our team?</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl">
          Whether you&apos;re kicking off a new product or scaling an existing
          one, we&apos;d love to hear what you&apos;re building. Let&apos;s
          talk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/#contact"
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg- transition-all hover:shadow-[0_0_36px_hsl(var(--primary)/0.45)] w-full sm:w-auto"
          >
            Start a Project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/services"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-muted-foreground font-semibold hover:border-primary/30 hover:text-foreground transition-all w-full sm:w-auto"
          >
            Explore Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
