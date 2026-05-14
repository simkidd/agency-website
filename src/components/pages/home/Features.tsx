"use client";
import { motion, Variants } from "framer-motion";
import { Zap, Shield, Layers, Globe, BarChart2, Cpu } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "We build for performance from day one — optimized code, edge delivery, and sub-second load times.",
  },
  {
    icon: Shield,
    title: "Security First",
    desc: "Enterprise-grade security practices baked into every layer of development.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Systems designed to grow seamlessly from MVP to millions of users.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Deployed on globally distributed infrastructure so your users always get the fastest experience.",
  },
  {
    icon: BarChart2,
    title: "Data Driven",
    desc: "Analytics and insights built in — so you always know what's working.",
  },
  {
    icon: Cpu,
    title: "AI Enhanced",
    desc: "Leverage cutting-edge AI to automate workflows and personalize experiences at scale.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Features() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-dots opacity-60" />
        {/* Accent glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[rgba(214,185,140,0.08)] blur-[100px]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium mb-5 uppercase tracking-wider">
            Why Vanguardds
          </div>
          <h2 className="font-display font-700 text-4xl lg:text-5xl text-foreground leading-tight mb-4">
            Built for the <span className="text-gradient">modern web</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every decision we make is in service of delivering products that
            perform, delight, and endure.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={fadeUp}
              className="group relative p-7 rounded-2xl border border-border bg-card/80 hover:border-accent/40 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-accent/10 border border-accent/20"
              >
                <feat.icon className="w-5 h-5 text-accent" />
              </div>

              <h3 className="font-display font-600 text-foreground text-lg mb-2">
                {feat.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feat.desc}
              </p>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
                  <path d="M80 0 L80 80 L0 80" fill="rgba(214,185,140,0.08)" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
