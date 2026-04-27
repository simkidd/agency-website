"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "From $8K",
    period: "per project",
    desc: "Perfect for early-stage startups and MVPs that need to ship fast without compromising quality.",
    features: [
      "Up to 8 weeks engagement",
      "1 product designer + 1 engineer",
      "Core pages or feature set",
      "2 rounds of revisions",
      "30-day post-launch support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "From $25K",
    period: "per project",
    desc: "For scaling teams that need a full-service partner across design, engineering, and strategy.",
    features: [
      "3–6 month engagement",
      "Dedicated cross-functional team",
      "Full product design system",
      "End-to-end development",
      "Analytics and growth setup",
      "90-day post-launch support",
    ],
    cta: "Most Popular",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored to you",
    desc: "For established organisations that need embedded expertise, ongoing delivery, and strategic partnership.",
    features: [
      "Long-term retainer or project basis",
      "Dedicated team of 4–8 specialists",
      "SLAs and dedicated Slack channel",
      "Monthly strategy reviews",
      "Priority access to new capabilities",
      "Unlimited revision cycles",
    ],
    cta: "Let's Talk",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium mb-5 uppercase tracking-wider">
            Pricing
          </div>
          <h2 className="font-display font-700 text-4xl lg:text-5xl text-foreground leading-tight">
            Transparent <span className="text-gradient">pricing</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            No hidden fees, no surprises. Every engagement is scoped and agreed
            upfront.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col overflow-hidden transition-all ${
                tier.highlight
                  ? "border border-accent/40 bg-card"
                  : "border border-border bg-card/80"
              }`}
            >
              {/* Top accent line for highlighted */}
              {tier.highlight && (
                <div className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-accent to-transparent" />
              )}

              {/* Subtle glow for highlighted */}
              {tier.highlight && (
                <div className="absolute inset-0 bg-accent/10 rounded-2xl pointer-events-none" />
              )}

              <div className="relative z-10 flex flex-col h-full">
                {/* Badge for highlighted */}
                {tier.highlight && (
                  <div className="inline-flex self-start items-center px-3 py-1 rounded-full bg-accent/15 border-accent/30 text-accent text-xs font-medium mb-4">
                    Most Popular
                  </div>
                )}

                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-medium">
                  {tier.name}
                </p>
                <div className="mb-1">
                  <span className="font-display font-700 text-3xl text-foreground">
                    {tier.price}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-5">
                  {tier.period}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 border-b border-border pb-6">
                  {tier.desc}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contact"
                  className={`group flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                    tier.highlight
                      ? "bg-accent text-foreground hover:bg-accent/90 hover:shadow-[0_0_24px_hsl(var(--accent)/0.35)]"
                      : "border border-border text-muted-foreground hover:border-accent/30 hover:text-foreground"
                  }`}
                >
                  {tier.cta === "Most Popular" ? "Get Started" : tier.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-xs text-muted-foreground/70 mt-8"
        >
          All prices in USD. Retainer options available. Book a free 30-min
          intro call to scope your project.
        </motion.p>
      </div>
    </section>
  );
}
