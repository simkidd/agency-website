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
    accent: "#4f8ef7",
    bg: "from-[#0f1929] to-[#07070a]",
    pattern: "grid",
    size: "large",
  },
  {
    tag: "FinTech",
    title: "Nova Pay — Real-time payment dashboard",
    desc: "Low-latency analytics interface processing 100M+ daily transactions with sub-50ms refresh.",
    stat: "100M+",
    statLabel: "daily transactions",
    accent: "#a5c8ff",
    bg: "from-[#0d1320] to-[#07070a]",
    pattern: "dots",
    size: "small",
  },
  {
    tag: "AI Product",
    title: "Luminary — Generative content engine",
    desc: "AI-powered platform that generates on-brand content for marketing teams at 100× speed.",
    stat: "100×",
    statLabel: "faster content",
    accent: "#7aafff",
    bg: "from-[#11102a] to-[#07070a]",
    pattern: "lines",
    size: "small",
  },
  {
    tag: "E-Commerce",
    title: "Blossom — DTC brand + store build",
    desc: "Brand identity, Shopify storefront, and growth stack for a health & wellness brand — $2M ARR in year 1.",
    stat: "$2M",
    statLabel: "ARR year 1",
    accent: "#7fd4c1",
    bg: "from-[#0b1a18] to-[#07070a]",
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
  const large = cases.filter((c) => c.size === "large");
  const small = cases.filter((c) => c.size === "small");

  return (
    <section id="case-studies" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#07070a]" />

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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(79,142,247,0.2)] bg-[rgba(79,142,247,0.07)] text-[#4f8ef7] text-xs font-medium mb-5 uppercase tracking-wider">
              Case Studies
            </div>
            <h2 className="font-display font-700 text-4xl lg:text-5xl text-[#eeeef6] leading-tight">
              Work we&apos;re <span className="text-gradient">proud of</span>
            </h2>
          </div>
          <p className="text-[rgba(238,238,246,0.45)] text-base max-w-sm leading-relaxed">
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
                className={`group relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)] bg-gradient-to-br ${c.bg} hover:border-[rgba(79,142,247,0.2)] transition-all duration-300 cursor-pointer ${c.size === "large" ? "min-h-[280px]" : "min-h-[220px]"} p-8 flex flex-col justify-between`}
              >
                <PatternBg type={c.pattern} />

                {/* Accent glow */}
                <div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 blur-[60px] group-hover:opacity-40 transition-opacity"
                  style={{ background: c.accent }}
                />

                <div className="relative z-10">
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4"
                    style={{
                      background: `${c.accent}18`,
                      color: c.accent,
                      border: `1px solid ${c.accent}30`,
                    }}
                  >
                    {c.tag}
                  </div>
                  <h3 className="font-display font-600 text-[#eeeef6] text-xl leading-snug mb-3">
                    {c.title}
                  </h3>
                  <p className="text-[rgba(238,238,246,0.45)] text-sm leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                <div className="relative z-10 flex items-end justify-between mt-6">
                  <div>
                    <div
                      className="font-display font-700 text-3xl"
                      style={{ color: c.accent }}
                    >
                      {c.stat}
                    </div>
                    <div className="text-xs text-[rgba(238,238,246,0.35)]">
                      {c.statLabel}
                    </div>
                  </div>
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `${c.accent}20`,
                      border: `1px solid ${c.accent}30`,
                    }}
                  >
                    <ArrowUpRight
                      className="w-4 h-4"
                      style={{ color: c.accent }}
                    />
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
            className="relative rounded-2xl border border-[rgba(79,142,247,0.15)] bg-[rgba(13,13,20,0.9)] p-8 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4f8ef7] to-transparent" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[rgba(79,142,247,0.1)] border border-[rgba(79,142,247,0.2)] flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                  <path
                    d="M12 2L15 9H22L16.5 13.5L18.5 21L12 17L5.5 21L7.5 13.5L2 9H9L12 2Z"
                    stroke="#4f8ef7"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-display font-700 text-[#eeeef6] text-2xl mb-4">
                Ready to build something great?
              </h3>
              <p className="text-[rgba(238,238,246,0.5)] text-sm leading-relaxed mb-8">
                Let&apos;s talk about your project. We&apos;d love to learn what
                you&apos;re building.
              </p>
            </div>

            <Link
              href="/#contact"
              className="relative z-10 w-full py-4 rounded-xl bg-[#4f8ef7] text-white font-semibold text-sm text-center hover:bg-[#3a7de8] transition-all hover:shadow-[0_0_30px_rgba(79,142,247,0.4)] block"
            >
              Start a conversation →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
