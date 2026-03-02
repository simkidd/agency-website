"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket, LucideIcon } from "lucide-react";
interface ProcessStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

interface StepItemProps {
  step: ProcessStep;
  Icon: LucideIcon;
  isLeft: boolean;
}

const steps:ProcessStep[] = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We dive deep into understanding your business, goals, target audience, and competitive landscape to build a solid foundation.",
    details: [
      "Requirements Gathering",
      "Market Research",
      "User Analysis",
      "Feasibility Study",
    ],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    description:
      "Our team crafts a comprehensive roadmap with clear milestones, deliverables, and success metrics tailored to your objectives.",
    details: [
      "Project Planning",
      "Architecture Design",
      "Tech Stack Selection",
      "Timeline Definition",
    ],
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "Agile development with regular check-ins ensures transparency and allows for iterative improvements throughout the build.",
    details: [
      "Agile Sprints",
      "Code Reviews",
      "Quality Assurance",
      "Progress Updates",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "We ensure a smooth deployment with comprehensive testing, documentation, and post-launch support for ongoing success.",
    details: ["Final Testing", "Deployment", "Training", "Ongoing Support"],
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  // heading animate once in view
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });

  // scroll progress for SVG path
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 60%", "end 70%"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-32 bg-[#0a0a0c] overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#2895f7]/5 to-transparent" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        {/* Section header */}
        <motion.div
          ref={headingRef}
          initial={{ y: 50, opacity: 0 }}
          animate={headingInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2895f7]/10 text-[#2895f7] text-sm font-medium mb-6">
            Our Process
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            How We <span className="text-gradient">Work</span>
          </h2>

          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            A proven methodology that ensures successful project delivery,
            from initial concept to final launch.
          </p>
        </motion.div>

        {/* Process timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* SVG Path */}
          <svg
            className="absolute left-1/2 top-0 h-full w-4 -translate-x-1/2 hidden lg:block"
            viewBox="0 0 4 800"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M2 0 Q2 100 2 200 Q2 300 2 400 Q2 500 2 600 Q2 700 2 800"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2895f7" />
                <stop offset="100%" stopColor="#00d9ff" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <StepItem
                  key={step.number}
                  step={step}
                  Icon={Icon}
                  isLeft={isLeft}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, Icon, isLeft }:StepItemProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ x: isLeft ? -50 : 50, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative flex flex-col lg:flex-row items-center gap-8 ${
        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Node */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 items-center justify-center z-10">
        <motion.div
          className="absolute inset-0 rounded-full bg-[#2895f7]/30"
          animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <div className="relative w-10 h-10 rounded-full bg-[#0a0a0c] border-2 border-[#2895f7] flex items-center justify-center glow-blue">
          <span className="text-[#2895f7] font-bold text-sm">
            {step.number}
          </span>
        </div>
      </div>

      {/* Content card */}
      <div className={`w-full lg:w-5/12 ${isLeft ? "lg:pr-16" : "lg:pl-16"}`}>
        <div className="group relative p-6 lg:p-8 rounded-2xl glass border border-white/10 hover:border-[#2895f7]/50 transition-all duration-500 hover:glow-blue">
          <div className="lg:hidden absolute -top-4 left-6 px-3 py-1 rounded-full bg-[#2895f7] text-white text-sm font-bold">
            {step.number}
          </div>

          <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#2895f7]/20 to-[#00d9ff]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-[#2895f7]" />
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-gradient transition-all duration-300">
            {step.title}
          </h3>

          <p className="text-white/50 leading-relaxed mb-6">
            {step.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {step.details.map((detail: string) => (
              <span
                key={detail}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/60 border border-white/10"
              >
                {detail}
              </span>
            ))}
          </div>

          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#2895f7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>

      <div className="hidden lg:block lg:w-5/12" />
    </motion.div>
  );
}