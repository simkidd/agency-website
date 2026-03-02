"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    title: "FinFlow Dashboard",
    category: "Fintech",
    description:
      "A comprehensive financial analytics platform with real-time data visualization and predictive insights.",
    image: "/images/case-study-1.jpg",
    tags: ["React", "D3.js", "Node.js"],
    stats: { users: "50K+", growth: "+340%" },
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile",
    description:
      "Secure and intuitive mobile banking experience with biometric authentication and instant transfers.",
    image: "/images/case-study-2.jpg",
    tags: ["React Native", "TypeScript", "AWS"],
    stats: { downloads: "100K+", rating: "4.9" },
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "E-Commerce",
    description:
      "Modern shopping experience with AI-powered recommendations and seamless checkout flow.",
    image: "/images/case-study-3.jpg",
    tags: ["Next.js", "Stripe", "MongoDB"],
    stats: { revenue: "+280%", conversion: "+45%" },
  },
  {
    id: 4,
    title: "Analytics Suite",
    category: "SaaS",
    description:
      "Enterprise-grade analytics dashboard with customizable widgets and automated reporting.",
    image: "/images/case-study-4.jpg",
    tags: ["Vue.js", "Python", "PostgreSQL"],
    stats: { clients: "200+", efficiency: "+60%" },
  },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);

  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="work" className="relative py-32 bg-[#0a0a0c]">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ y: 50, opacity: 0 }}
          animate={headingInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2895f7]/10 text-[#2895f7] text-sm font-medium mb-6">
              Case Studies
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Latest <span className="text-gradient">Work</span>
            </h2>

            <p className="text-white/50 max-w-xl text-lg">
              Explore our portfolio of successful projects that have helped
              businesses achieve their digital goals.
            </p>
          </div>

          <Link
            href="#contact"
            className="mt-6 lg:mt-0 inline-flex items-center gap-2 text-[#2895f7] hover:text-white transition-colors duration-300 group"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 80, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          width={300}
          height={300}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0c] via-[#0a0a0c]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
        <span className="inline-block w-fit px-3 py-1 rounded-full bg-[#2895f7]/20 text-[#2895f7] text-xs font-medium mb-4">
          {study.category}
        </span>

        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
          {study.title}
        </h3>

        <p className="text-white/60 text-sm lg:text-base mb-4 line-clamp-2">
          {study.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded text-xs bg-white/10 text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            {Object.entries(study.stats).map(([key, value]) => (
              <div key={key}>
                <div className="text-[#2895f7] font-bold">{value}</div>
                <div className="text-white/40 text-xs capitalize">{key}</div>
              </div>
            ))}
          </div>

          <div className="w-12 h-12 rounded-full bg-[#2895f7] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 glow-blue">
            <ExternalLink className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-[#2895f7]/50 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
}
