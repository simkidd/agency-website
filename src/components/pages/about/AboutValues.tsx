"use client";
import { motion } from "framer-motion";
import { Flame, Target, Users, Telescope, MessageSquare, Repeat } from "lucide-react";

const values = [
  {
    icon: Flame,
    title: "Craft is everything",
    desc: "We obsess over details that most people never notice — because the ones who do notice are your best customers.",
  },
  {
    icon: Target,
    title: "Outcomes over output",
    desc: "We measure success by your business results, not by the number of screens we designed or lines of code we shipped.",
  },
  {
    icon: Users,
    title: "People first",
    desc: "We build for humans. Every decision — from information architecture to API design — starts with the person using it.",
  },
  {
    icon: Telescope,
    title: "Long-term thinking",
    desc: "We resist the shortcuts that create technical debt and design patterns that age badly. We build things that last.",
  },
  {
    icon: MessageSquare,
    title: "Radical transparency",
    desc: "We tell you when something won't work, when we're behind, and when we think there's a better approach. Always.",
  },
  {
    icon: Repeat,
    title: "Continuous improvement",
    desc: "We run retrospectives, share knowledge, and invest in getting better at our craft — so every project benefits from the last.",
  },
];

export default function AboutValues() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium mb-5 uppercase tracking-wider">
            What We Believe
          </div>
          <h2 className="font-display font-700 text-4xl lg:text-5xl text-foreground leading-tight">
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
              className="group p-7 rounded-2xl border border-border bg-card/70 hover:border-accent/20 backdrop-blur-xl transition-all duration-300 overflow-hidden relative"
            >
              {/* Corner glow */}
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-[30px] bg-accent"
              />

              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border border-accent/20 bg-accent/10"
              >
                <v.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display font-600 text-foreground text-lg mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
