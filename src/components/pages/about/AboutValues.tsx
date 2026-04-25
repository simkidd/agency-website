"use client";
import { motion } from "framer-motion";
import { Flame, Target, Users, Telescope, MessageSquare, Repeat } from "lucide-react";

const values = [
  {
    icon: Flame,
    title: "Craft is everything",
    desc: "We obsess over details that most people never notice — because the ones who do notice are your best customers.",
    accent: "#f7774f",
  },
  {
    icon: Target,
    title: "Outcomes over output",
    desc: "We measure success by your business results, not by the number of screens we designed or lines of code we shipped.",
    accent: "#4f8ef7",
  },
  {
    icon: Users,
    title: "People first",
    desc: "We build for humans. Every decision — from information architecture to API design — starts with the person using it.",
    accent: "#7aafff",
  },
  {
    icon: Telescope,
    title: "Long-term thinking",
    desc: "We resist the shortcuts that create technical debt and design patterns that age badly. We build things that last.",
    accent: "#a5c8ff",
  },
  {
    icon: MessageSquare,
    title: "Radical transparency",
    desc: "We tell you when something won't work, when we're behind, and when we think there's a better approach. Always.",
    accent: "#7fd4c1",
  },
  {
    icon: Repeat,
    title: "Continuous improvement",
    desc: "We run retrospectives, share knowledge, and invest in getting better at our craft — so every project benefits from the last.",
    accent: "#c084fc",
  },
];

export default function AboutValues() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d14]">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[rgba(79,142,247,0.04)] blur-[100px]" />
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
            What We Believe
          </div>
          <h2 className="font-display font-700 text-4xl lg:text-5xl text-[#eeeef6] leading-tight">
            Our{" "}
            <span className="text-gradient">values</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group p-7 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(13,13,20,0.8)] hover:border-[rgba(79,142,247,0.15)] transition-all duration-300 overflow-hidden relative"
            >
              {/* Corner glow */}
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[30px]"
                style={{ background: v.accent }}
              />

              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${v.accent}15`, border: `1px solid ${v.accent}30` }}
              >
                <v.icon className="w-5 h-5" style={{ color: v.accent }} />
              </div>
              <h3 className="font-display font-600 text-[#eeeef6] text-lg mb-3">{v.title}</h3>
              <p className="text-[rgba(238,238,246,0.48)] text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
