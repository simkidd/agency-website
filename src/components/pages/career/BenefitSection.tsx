"use client";
import { motion } from "framer-motion";
import { Heart, Globe, Zap, Coffee, TrendingUp, Shield } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Comprehensive health, dental, and vision coverage for you and your family.",
  },
  {
    icon: Globe,
    title: "Remote-First",
    desc: "Work from anywhere in the world. We care about output, not location.",
  },
  {
    icon: Zap,
    title: "Latest Tools",
    desc: "Budget for the tools and gear you need to do your best work.",
  },
  {
    icon: Coffee,
    title: "Flexible Hours",
    desc: "We trust you to manage your time. Results matter more than schedules.",
  },
  {
    icon: TrendingUp,
    title: "Growth Budget",
    desc: "$2,000/year for conferences, courses, and personal development.",
  },
  {
    icon: Shield,
    title: "Equity",
    desc: "Meaningful equity so you share in the success you help create.",
  },
];

export default function BenefitSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d14]">
        <div className="absolute inset-0 bg-dots opacity-50" />
      </div>
      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(79,142,247,0.2)] bg-[rgba(79,142,247,0.07)] text-[#4f8ef7] text-xs font-medium mb-5 uppercase tracking-wider">
            Benefits
          </div>
          <h2 className="font-display font-700 text-4xl lg:text-5xl text-[#eeeef6] leading-tight">
            Why work with <span className="text-gradient">us</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="p-7 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(13,13,20,0.8)] hover:border-[rgba(79,142,247,0.2)] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[rgba(79,142,247,0.08)] border border-[rgba(79,142,247,0.15)] flex items-center justify-center mb-4">
                <b.icon className="w-5 h-5 text-[#4f8ef7]" />
              </div>
              <h3 className="font-display font-600 text-[#eeeef6] text-lg mb-2">
                {b.title}
              </h3>
              <p className="text-[rgba(238,238,246,0.45)] text-sm leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
