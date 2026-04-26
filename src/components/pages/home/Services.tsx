"use client";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Palette,
  BrainCircuit,
  Cloud,
  ShoppingBag,
  LineChart,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web Development",
    desc: "Full-stack web applications built with cutting-edge technologies — React, Next.js, Node.js, and more.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    number: "02",
    icon: Palette,
    title: "UI/UX Design",
    desc: "Human-centred design systems and interfaces that are beautiful, accessible, and conversion-focused.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "AI & Automation",
    desc: "Intelligent solutions that streamline workflows, personalize experiences, and surface insights.",
    tags: ["LLMs", "ML Models", "Automation"],
  },
  {
    number: "04",
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Scalable infrastructure, CI/CD pipelines, and cloud-native architectures on AWS, GCP, or Azure.",
    tags: ["AWS", "Docker", "Kubernetes"],
  },
  {
    number: "05",
    icon: ShoppingBag,
    title: "E-Commerce",
    desc: "High-converting online stores with seamless checkout flows, inventory management, and analytics.",
    tags: ["Shopify", "Stripe", "Headless"],
  },
  {
    number: "06",
    icon: LineChart,
    title: "Growth & Analytics",
    desc: "Data-driven strategies and measurement frameworks that turn insights into compounding growth.",
    tags: ["Analytics", "SEO", "A/B Testing"],
  },
];

export default function Services() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-grid-fine opacity-50" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] rounded-full bg-[rgba(214,185,140,0.08)] blur-[80px]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium mb-5 uppercase tracking-wider">
              Our Services
            </div>
            <h2 className="font-display font-700 text-4xl lg:text-5xl text-foreground leading-tight">
              What we <span className="text-gradient">do best</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-muted-foreground text-sm font-medium hover:border-accent hover:text-foreground transition-all"
            >
              All Services
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative p-8 bg-card hover:bg-muted transition-colors duration-300 cursor-pointer"
            >
              {/* Number */}
              <div className="font-display font-700 text-4xl text-muted-foreground/10 mb-4 select-none">
                {svc.number}
              </div>

              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <svc.icon className="w-5 h-5 text-accent" />
              </div>

              <h3 className="font-display font-600 text-foreground text-xl mb-3">
                {svc.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {svc.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="absolute top-7 right-7 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
