"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full px-6 lg:px-12 xl:px-20 text-center"
      >
        <h2 className="font-display font-700 text-4xl lg:text-5xl text-foreground leading-tight mb-5">
          Not sure which service <span className="text-gradient">fits?</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-10 text-lg leading-relaxed">
          Book a free 30-minute discovery call. We&apos;ll listen, ask the right
          questions, and tell you exactly how we can help.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-p font-semibold hover:bg-accent/90 transition-all hover:shadow-[0_0_36px_hsl(var(--accent)/0.35)] text-accent-foreground"
          >
            <Calendar className="w-4 h-4" />
            Book a Discovery Call
          </Link>
          <Link
            href="/#case-studies"
            className="flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-muted-foreground font-semibold hover:border-accent/30 hover:text-foreground transition-all"
          >
            See Our Work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
