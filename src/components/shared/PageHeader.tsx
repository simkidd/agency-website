"use client";
import { motion } from "framer-motion";

interface PageHeaderProps {
  badgeText: string;
  title: string;
  gradientText?: string;
  subtitle: string;
}

export default function PageHeader({ badgeText, title, gradientText, subtitle }: PageHeaderProps) {
  // Replace gradientText in title with a gradient span
  const renderTitle = () => {
    if (!gradientText || !title.includes(gradientText)) {
      return <span>{title}</span>;
    }
    const parts = title.split(gradientText);
    return (
      <>
        {parts[0]}
        <span className="text-gradient">{gradientText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#07070a]">
        <div className="absolute inset-0 bg-grid opacity-70" />
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[rgba(79,142,247,0.06)] blur-[100px]" />
        {/* Decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[rgba(79,142,247,0.06)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[rgba(79,142,247,0.03)]" />
      </div>

      {/* Noise */}
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(79,142,247,0.25)] bg-[rgba(79,142,247,0.08)] text-[#4f8ef7] text-sm font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f8ef7] animate-pulse" />
            {badgeText}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-800 text-5xl sm:text-6xl lg:text-7xl text-[#eeeef6] leading-[1.05] tracking-tight mb-6"
          >
            {renderTitle()}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[rgba(238,238,246,0.55)] text-lg leading-relaxed max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
