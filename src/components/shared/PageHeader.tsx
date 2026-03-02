"use client"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PageHeaderProps {
  badgeText?: string; // small label above heading
  title: string; // main heading
  gradientText?: string; // optional part of the heading with gradient
  subtitle?: string; // optional description
  className?: string; // extra classes
}

const PageHeader = ({
  badgeText,
  title,
  gradientText,
  subtitle,
  className = "",
}: PageHeaderProps) => {
  // Split title if gradientText exists
  const [beforeGradient, afterGradient] = gradientText
    ? title.split(gradientText)
    : [title, ""];

  // Animation variants
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className={cn("relative pt-32 pb-20 overflow-hidden", className)}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2895f7]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d9ff]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <motion.div
          className={`max-w-4xl mx-auto text-center`}
          variants={{
             hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.8, ease: "easeOut" },
    },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {badgeText && (
            <motion.span className="inline-block px-4 py-1.5 rounded-full bg-[#2895f7]/10 text-[#2895f7] text-sm font-medium mb-6"  variants={item}>
              {badgeText}
            </motion.span>
          )}
          <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6" variants={item}>
            {beforeGradient}
            {gradientText && (
              <span className="text-gradient">{gradientText}</span>
            )}
            {afterGradient}
          </motion.h1>
          {subtitle && (
            <motion.p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed" variants={item}>
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
