"use client";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/common/AnimatedCounter";

const stats = [
  { num: 150, suffix: "+", label: "Projects Shipped" },
  { num: 12, suffix: "+", label: "Years in Business" },
  { num: 98, suffix: "%", label: "Client Satisfaction" },
  { num: 40, suffix: "+", label: "Team Members" },
];

const milestones = [
  {
    year: "2012",
    event: "Founded in a San Francisco apartment with a team of three.",
  },
  {
    year: "2015",
    event: "Grew to 15 people and launched our first enterprise product.",
  },
  {
    year: "2018",
    event: "Opened offices in New York and London. Hit $5M ARR.",
  },
  {
    year: "2021",
    event: "Launched our AI practice. Crossed 100 clients worldwide.",
  },
  {
    year: "2024",
    event: "40+ specialists. Named one of the top digital agencies in the US.",
  },
];

export default function AboutStory() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-6 rounded-2xl border border-border bg-card/70 backdrop-blur-xl text-center"
            >
              <div className="font-display  text-4xl text-foreground mb-1">
                <AnimatedCounter end={s.num} suffix={s.suffix} />
              </div>
              <div className="text-sm text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Story grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium mb-6 uppercase tracking-wider">
              Our Story
            </div>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              Built on craft,{" "}
              <span className="text-gradient">driven by outcomes</span>
            </h2>
            <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
              <p>
                TechNova started in 2012 with a simple belief: that great
                software is the product of equal parts technical rigour and
                creative ambition. We were tired of agencies that treated
                development as a commodity and design as decoration.
              </p>
              <p>
                Over the last twelve years we&apos;ve shipped over 150 products
                — from scrappy MVPs that became category leaders, to platform
                rebuilds for companies with millions of users. Every project,
                regardless of size, gets the same level of care.
              </p>
              <p>
                Today we&apos;re a team of 40+ designers, engineers,
                strategists, and AI specialists distributed across San
                Francisco, New York, and London. We&apos;re remote-first,
                asynchronous-friendly, and deeply collaborative.
              </p>
            </div>
          </motion.div>

          {/* Right — timeline */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute left-[19px] top-3 bottom-3 w-px bg-linear-to-b from-accent/60 via-accent/30 to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-5 pl-2"
                >
                  {/* Dot */}
                  <div className="relative shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full border border-accent/50 bg-accent/10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-accent text-sm mb-1">
                      {m.year}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
