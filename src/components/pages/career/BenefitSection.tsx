"use client";
import { motion, Variants } from "framer-motion";
import { Coffee, DollarSign, Globe, Heart, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Remote First",
    description:
      "Work from anywhere in the world. We believe great work happens everywhere.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description:
      "Above-market salaries with regular reviews and performance bonuses.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and mental health support.",
  },
  {
    icon: Zap,
    title: "Learning Budget",
    description: "$2,000 annual budget for courses, conferences, and books.",
  },
  {
    icon: Coffee,
    title: "Flexible Hours",
    description:
      "Work when you're most productive. Results matter, not clock-watching.",
  },
  {
    icon: Users,
    title: "Team Retreats",
    description:
      "Annual team gatherings in amazing locations around the world.",
  },
];

const BenefitSection = () => {
  const headingContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const headingItem: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 border-y border-white/10">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <motion.div
          variants={headingContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={headingItem}
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Why Work at <span className="text-gradient">TechNova?</span>
          </motion.h2>
          <motion.p
            variants={headingItem}
            className="text-white/50 max-w-xl mx-auto"
          >
            We believe in taking care of our team. Here&apos;s what you can
            expect.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl glass border border-white/10 hover:border-[#2895f7]/50 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2895f7]/20 to-[#00d9ff]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-[#2895f7]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gradient transition-all">
                  {benefit.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
