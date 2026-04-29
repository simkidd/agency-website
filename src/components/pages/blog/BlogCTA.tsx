"use client";
import { motion } from "framer-motion";

export default function BlogCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-[80px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full px-6 lg:px-12 xl:px-20 text-center"
      >
        <h2 className="font-display font-700 text-3xl lg:text-4xl text-foreground mb-4">
          Stay in the loop
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Get the latest articles, case studies, and insights delivered to your
          inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:border-accent focus:outline-none transition-all"
          />
          <button className="px-6 py-3 rounded-xl bg-accent font-medium text-sm hover:bg-accent/90 text-accent-foreground transition-all whitespace-nowrap cursor-pointer">
            Subscribe
          </button>
        </div>
      </motion.div>
    </section>
  );
}
