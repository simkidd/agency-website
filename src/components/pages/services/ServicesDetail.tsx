"use client";
import { motion, Variants } from "framer-motion";
import {
  Code2,
  Palette,
  BrainCircuit,
  Cloud,
  ShoppingBag,
  LineChart,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Web Development",
    tagline: "Full-stack products built to perform",
    desc: "From marketing sites to complex SaaS platforms, we engineer web applications that are fast, accessible, and built to scale. We care deeply about code quality, DX, and long-term maintainability.",
    deliverables: [
      "High-performance web apps built to scale with your growth",
      "Clean, maintainable architecture for long-term flexibility",
      "Fast load times and Core Web Vitals optimisation",
      "Reliable backend systems and API integrations",
    ],
  },
  {
    icon: Palette,
    number: "02",
    title: "UI/UX Design",
    tagline: "Interfaces people love to use",
    desc: "Great design isn't just beautiful — it converts, reduces friction, and builds trust. We craft design systems, user flows, and high-fidelity interfaces that are both visually distinctive and deeply usable.",
    deliverables: [
      "Intuitive user experiences that reduce friction",
      "Conversion-focused interfaces that drive engagement",
      "Design systems that ensure consistency at scale",
      "Validated decisions through user testing and iteration",
    ],
  },
  {
    icon: BrainCircuit,
    number: "03",
    title: "AI & Automation",
    tagline: "Intelligent systems that work for you",
    desc: "We help businesses harness the power of AI — from embedding LLMs into existing products to building bespoke ML pipelines. We focus on practical applications that create measurable business impact.",
    deliverables: [
      "AI-powered features that create real business value",
      "Automated workflows that save time and reduce manual work",
      "Custom models and integrations tailored to your product",
      "Scalable systems built for long-term AI adoption",
    ],
  },
  {
    icon: Cloud,
    number: "04",
    title: "Cloud & DevOps",
    tagline: "Infrastructure that never lets you down",
    desc: "We architect and manage cloud-native infrastructure that scales seamlessly with your growth. From zero to millions of users, we build the foundation so you can focus on product.",
    deliverables: [
      "Scalable infrastructure that grows with your product",
      "Reliable deployments with minimal downtime",
      "Secure systems with monitoring and alerting built in",
      "Optimised performance and cost-efficient cloud usage",
    ],
  },
  {
    icon: ShoppingBag,
    number: "05",
    title: "E-Commerce",
    tagline: "Stores built to convert and scale",
    desc: "Whether you're launching a new DTC brand or re-platforming an established store, we build commerce experiences that look stunning and drive revenue — from browse to checkout to retention.",
    deliverables: [
      "High-converting storefronts built for revenue growth",
      "Seamless checkout experiences that reduce drop-offs",
      "Custom features tailored to your product and audience",
      "Optimised performance for speed and mobile users",
    ],
  },
  {
    icon: LineChart,
    number: "06",
    title: "Growth & Analytics",
    tagline: "Turn data into compounding returns",
    desc: "We instrument your product with the right analytics stack, surface actionable insights, and design experiments that move the needle. Strategy backed by data, not guesswork.",
    deliverables: [
      "Actionable insights from clean, reliable data",
      "Experimentation systems to continuously improve results",
      "Clear dashboards for tracking performance and growth",
      "Strategies focused on measurable business impact",
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesDetail() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-grid-fine opacity-40" />
      </div>
      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="space-y-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0 }}
              className={`group relative rounded-2xl border border-border bg-lineaer-to-br hover:border-accent/30 transition-colors duration-500 overflow-hidden`}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
              {/* Accent glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-10 blur-[80px] group-hover:opacity-20 transition-opacity duration-700 bg-accent" />

              <div className="relative z-10 p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  {/* Left */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-accent/10 border border-accent/20 text-accent">
                        <svc.icon className="w-6 h-6" />
                      </div>
                      <span className="font-display font-700 text-5xl select-none text-primary/10">
                        {svc.number}
                      </span>
                    </div>

                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 bg-primary/10 text-primary border border-primary/20">
                      {svc.tagline}
                    </div>

                    <h3 className="font-display font-700 text-3xl text-foreground mb-4">
                      {svc.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                      {svc.desc}
                    </p>

                    <Link
                      href="/#contact"
                      className="group/btn inline-flex items-center gap-2 text-sm font-medium transition-colors text-accent hover:text-accent/80"
                    >
                      Start a conversation
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </div>

                  {/* Right — deliverables */}
                  <div>
                    <p className="text-xs font-medium text-muted-foreground/60 uppercase tracking-widest mb-4">
                      What&apos;s included
                    </p>
                    <ul className="space-y-3">
                      {svc.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                          <span className="text-muted-foreground text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
