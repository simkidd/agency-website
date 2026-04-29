"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const cases = [
  {
    tag: "SaaS Platform",
    title: "Apex Commerce — Full redesign & 3× conversion",
    desc: "Complete UX overhaul and re-architecture of a B2B e-commerce platform serving 50K+ merchants.",
    stat: "3× CVR",
    statLabel: "conversion rate",
    pattern: "grid",
    size: "large",
  },
  {
    tag: "FinTech",
    title: "Nova Pay — Real-time payment dashboard",
    desc: "Low-latency analytics interface processing 100M+ daily transactions with sub-50ms refresh.",
    stat: "100M+",
    statLabel: "daily transactions",
    pattern: "dots",
    size: "small",
  },
  {
    tag: "AI Product",
    title: "Luminary — Generative content engine",
    desc: "AI-powered platform that generates on-brand content for marketing teams at 100× speed.",
    stat: "100×",
    statLabel: "faster content",
    pattern: "lines",
    size: "small",
  },
  {
    tag: "E-Commerce",
    title: "Blossom — DTC brand + store build",
    desc: "Brand identity, Shopify storefront, and growth stack for a health & wellness brand — $2M ARR in year 1.",
    stat: "$2M",
    statLabel: "ARR year 1",
    pattern: "grid",
    size: "large",
  },
];

function PatternBg({ type }: { type: string }) {
  if (type === "dots")
    return (
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
    );
  if (type === "lines")
    return (
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />
    );
  return (
    <div className="absolute inset-0 bg-grid-fine opacity-40 pointer-events-none" />
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium mb-5 uppercase tracking-wider">
              Case Studies
            </div>
            <h2 className="font-display font-700 text-4xl lg:text-5xl text-foreground leading-tight">
              Work we&apos;re <span className="text-gradient">proud of</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-sm leading-relaxed">
            A selection of projects that showcase what happens when strategy
            meets craft.
          </p>
        </motion.div>

        {/* Masonry-ish layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left column — two large cards stacked */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {cases.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`group relative rounded-2xl overflow-hidden border border-border bg-card/80 backdrop-blur-xl hover:border-accent/30 transition-colors duration-300 cursor-pointer ${c.size === "large" ? "min-h-[280px]" : "min-h-[220px]"} p-8 flex flex-col justify-between`}
              >
                <PatternBg type={c.pattern} />

                {/* Accent glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 blur-[60px] group-hover:opacity-40 transition-opacity bg-[rgba(214,185,140,0.15)]" />

                <div className="relative z-10">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 border border-accent/30 bg-accent/10 text-accent">
                    {c.tag}
                  </div>
                  <h3 className="font-display font-600 text-foreground text-xl leading-snug mb-3">
                    {c.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                <div className="relative z-10 flex items-end justify-between mt-6">
                  <div>
                    <div className="font-display font-700 text-3xl text-accent">
                      {c.stat}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {c.statLabel}
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-accent/10 border border-accent/30">
                    <ArrowUpRight className="w-4 h-4 text-accent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right column — CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl border border-border bg-card/80 backdrop-blur-xl p-8 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-accent to-transparent" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                  <path
                    d="M12 2L15 9H22L16.5 13.5L18.5 21L12 17L5.5 21L7.5 13.5L2 9H9L12 2Z"
                    stroke="#e6cfa7"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-display font-700 text-foreground text-2xl mb-4">
                Ready to build something great?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Let&apos;s talk about your project. We&apos;d love to learn what
                you&apos;re building.
              </p>
            </div>

            <Link
              href="/#contact"
              className="relative z-10 w-full py-4 rounded-xl bg-accent text-accent-foreground font-semibold text-sm text-center hover:bg-accent/90 transition-all hover:shadow-[0_20px_60px_rgba(214,185,140,0.15)] block"
            >
              Start a conversation →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
