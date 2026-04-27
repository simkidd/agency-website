"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedCounter from "@/components/common/AnimatedCounter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ─── Background layers ─── */}
      <div className="absolute inset-0 bg-background">
        {/* Grid */}
        <div className="absolute inset-0 bg-grid opacity-80" />

        {/* Center radial glow */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full bg-[rgba(214,185,140,0.08)] blur-[120px]" />

        {/* Decorative orb left */}
        <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] rounded-full bg-[rgba(214,185,140,0.05)] blur-[80px]" />
        {/* Decorative orb right */}
        <div className="absolute -right-40 bottom-1/4 w-[400px] h-[400px] rounded-full bg-[rgba(214,185,140,0.12)] blur-[80px]" />

        {/* Concentric rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {[400, 650, 900, 1150].map((size, i) => (
            <div
              key={size}
              className="absolute rounded-full border border-[rgba(214,182,140,0.15)] top-1/2 left-1/2"
              style={{
                width: size,
                height: size,
                marginLeft: -size / 2,
                marginTop: -size / 2,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Floating SVG shapes */}
        <div className="absolute top-[15%] right-[10%] animate-float opacity-30">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <rect
              x="10"
              y="10"
              width="60"
              height="60"
              rx="8"
              stroke="rgba(214,182,140,0.6)"
              strokeWidth="1"
              fill="none"
            />
            <rect
              x="25"
              y="25"
              width="30"
              height="30"
              rx="4"
              fill="rgba(214,182,140,0.12)"
            />
          </svg>
        </div>
        <div
          className="absolute bottom-[20%] left-[8%] animate-float opacity-20"
          style={{ animationDelay: "2s" }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <polygon
              points="30,5 55,50 5,50"
              stroke="rgba(214,182,140,0.6)"
              strokeWidth="1"
              fill="rgba(214,182,140,0.12)"
            />
          </svg>
        </div>
        <div
          className="absolute top-[60%] right-[5%] animate-float opacity-20"
          style={{ animationDelay: "3.5s" }}
        >
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="rgba(214,182,140,0.6)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 4"
              className="animate-spin-slow"
            />
            <circle cx="25" cy="25" r="5" fill="rgba(214,182,140,0.12)" />
          </svg>
        </div>
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise pointer-events-none" />

      {/* ─── Content ─── */}
      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 pt-28 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Digital Agency — Est. 2012
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-800 text-[clamp(3rem,8vw,6.5rem)] leading-[1.0] tracking-tight text-foreground mb-8"
          >
            We craft{" "}
            <span className="relative inline-block">
              <span className="text-gradient">digital</span>
            </span>
            <br />
            experiences that{" "}
            <span className="relative">
              <span className="text-gradient">matter.</span>
              {/* Underline decoration */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 6 Q50 0 100 4 Q150 8 200 2"
                  stroke="rgba(230, 207, 167, 0.942)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted-foreground text-xl leading-relaxed max-w-2xl mb-12"
          >
            We&apos;re a team of designers, engineers, and strategists who
            transform ambitious ideas into remarkable digital products.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-20"
          >
            <Link
              href="/#contact"
              className="group flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all duration-200 hover:shadow-lg w-full sm:w-auto"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#case-studies"
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-border text-muted-foreground font-semibold text-base hover:border-accent hover:text-foreground transition-all duration-200 w-full sm:w-auto"
            >
              View our Work
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap gap-x-12 gap-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <div>
              <div className="text-3xl font-display font-bold text-gradient mb-1">
                <AnimatedCounter end={150} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-gradient mb-1">
                <AnimatedCounter end={12} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-gradient mb-1">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-lnear-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
