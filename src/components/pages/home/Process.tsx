"use client";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We dig deep into your goals, users, and market. Strategy before pixels.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Wireframes and high-fidelity designs crafted with obsessive attention to detail.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Clean, tested code built with modern frameworks and engineering best practices.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    desc: "Seamless deployment, monitoring, and ongoing support as you grow.",
  },
];

export default function Process() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#07070a]">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[rgba(79,142,247,0.04)] blur-[100px]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(79,142,247,0.2)] bg-[rgba(79,142,247,0.07)] text-[#4f8ef7] text-xs font-medium mb-5 uppercase tracking-wider">
            Our Process
          </div>
          <h2 className="font-display font-700 text-4xl lg:text-5xl text-[#eeeef6] leading-tight">
            How we <span className="text-gradient">work</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connecting line (desktop) */}
          {/* <div className="hidden lg:block absolute top-7 left-7 right-7 h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-[rgba(79,142,247,0.3)] to-transparent" />
          </div> */}

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Circle */}
              <div className="relative w-14 h-14 mb-7">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-[rgba(79,142,247,0.2)]" />
                {/* Inner fill */}
                <div className="absolute inset-1.5 rounded-full bg-[rgba(79,142,247,0.1)] flex items-center justify-center">
                  <span className="font-display font-700 text-[#4f8ef7] text-sm">
                    {step.step}
                  </span>
                </div>
                {/* Pulse */}
                <div className="absolute inset-0 rounded-full border border-[rgba(79,142,247,0.15)] animate-pulse-slow" />
              </div>

              {/* Connector (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[28px] left-[56px] right-[-2rem] h-px">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className="h-full origin-left bg-[rgba(79,142,247,0.35)]"
                  />
                </div>
              )}

              <h3 className="font-display font-600 text-[#eeeef6] text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-[rgba(238,238,246,0.48)] text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
