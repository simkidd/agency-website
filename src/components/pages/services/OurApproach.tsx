"use client";
import { motion } from "framer-motion";
import {
  Layers,
  Zap,
  Cpu,
  LineChart,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const approach = [
  {
    icon: Layers,
    title: "Systems, not pages",
    desc: "We design and build scalable systems — not one-off screens. Everything is structured to evolve with your product.",
  },
  {
    icon: Zap,
    title: "Performance first",
    desc: "Speed is a feature. From architecture to animation, we optimise for responsiveness, Core Web Vitals, and real-world usage.",
  },
  {
    icon: Cpu,
    title: "AI where it matters",
    desc: "We don’t force AI into products. We apply it where it creates leverage — automation, intelligence, and better decisions.",
  },
  {
    icon: Workflow,
    title: "Iterative delivery",
    desc: "We ship fast, learn quickly, and improve continuously. Every release is a step toward a better product.",
  },
  {
    icon: LineChart,
    title: "Outcome-driven",
    desc: "We tie everything to business impact — growth, retention, and conversion. Not just pixels and code.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    desc: "Clean architecture, maintainable code, and thoughtful design decisions that won’t break in 6 months.",
  },
];

export default function OurApproach() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium mb-5 uppercase tracking-wider">
            How We Work
          </div>
          <h2 className="font-display font-700 text-4xl lg:text-5xl text-foreground leading-tight">
            Our <span className="text-gradient">approach</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A deliberate mix of design thinking, engineering discipline, and
            product strategy — applied to every project we take on.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {approach.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative p-7 rounded-2xl border border-border bg-card/80 hover:border-accent/30 transition-all duration-300 overflow-hidden"
            >
              {/* Glow */}
              <div
                className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-0 group-hover:opacity-20 blur-[40px] transition-all duration-500 bg-accent"
              />

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-accent/10 border border-accent/20 text-accent">
                <item.icon className="w-5 h-5" />
              </div>

              {/* Content */}
              <h3 className="font-display font-600 text-foreground text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
