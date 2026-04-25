"use client";
import { motion } from "framer-motion";
import {
  Code2, Palette, BrainCircuit, Cloud, ShoppingBag, LineChart,
  ArrowUpRight, CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Web Development",
    tagline: "Full-stack products built to perform",
    desc: "From marketing sites to complex SaaS platforms, we engineer web applications that are fast, accessible, and built to scale. We care deeply about code quality, DX, and long-term maintainability.",
    deliverables: [
      "Custom Next.js / React applications",
      "REST & GraphQL API design and development",
      "Database architecture and optimisation",
      "Performance auditing and Core Web Vitals",
      "Ongoing engineering support and retainers",
    ],
    accent: "#4f8ef7",
    bg: "from-[#0f1929] to-[#0a0a12]",
  },
  {
    icon: Palette,
    number: "02",
    title: "UI/UX Design",
    tagline: "Interfaces people love to use",
    desc: "Great design isn't just beautiful — it converts, reduces friction, and builds trust. We craft design systems, user flows, and high-fidelity interfaces that are both visually distinctive and deeply usable.",
    deliverables: [
      "User research and journey mapping",
      "Wireframing and rapid prototyping",
      "High-fidelity Figma design systems",
      "Interaction design and motion specs",
      "Usability testing and iteration",
    ],
    accent: "#7aafff",
    bg: "from-[#0d1320] to-[#0a0a12]",
  },
  {
    icon: BrainCircuit,
    number: "03",
    title: "AI & Automation",
    tagline: "Intelligent systems that work for you",
    desc: "We help businesses harness the power of AI — from embedding LLMs into existing products to building bespoke ML pipelines. We focus on practical applications that create measurable business impact.",
    deliverables: [
      "LLM integration and prompt engineering",
      "Custom ML model training and deployment",
      "Intelligent workflow automation",
      "RAG systems and knowledge bases",
      "AI product strategy consulting",
    ],
    accent: "#a5c8ff",
    bg: "from-[#11102a] to-[#0a0a12]",
  },
  {
    icon: Cloud,
    number: "04",
    title: "Cloud & DevOps",
    tagline: "Infrastructure that never lets you down",
    desc: "We architect and manage cloud-native infrastructure that scales seamlessly with your growth. From zero to millions of users, we build the foundation so you can focus on product.",
    deliverables: [
      "AWS, GCP, and Azure architecture",
      "CI/CD pipeline design and implementation",
      "Kubernetes and container orchestration",
      "Observability: logging, metrics, alerting",
      "Security hardening and compliance",
    ],
    accent: "#7fd4c1",
    bg: "from-[#0b1a18] to-[#0a0a12]",
  },
  {
    icon: ShoppingBag,
    number: "05",
    title: "E-Commerce",
    tagline: "Stores built to convert and scale",
    desc: "Whether you're launching a new DTC brand or re-platforming an established store, we build commerce experiences that look stunning and drive revenue — from browse to checkout to retention.",
    deliverables: [
      "Headless Shopify and commerce builds",
      "Custom checkout and payment flows",
      "Product configurators and 3D viewers",
      "Loyalty programs and CRM integration",
      "Conversion rate optimisation (CRO)",
    ],
    accent: "#f7c44f",
    bg: "from-[#1a150a] to-[#0a0a12]",
  },
  {
    icon: LineChart,
    number: "06",
    title: "Growth & Analytics",
    tagline: "Turn data into compounding returns",
    desc: "We instrument your product with the right analytics stack, surface actionable insights, and design experiments that move the needle. Strategy backed by data, not guesswork.",
    deliverables: [
      "Analytics stack setup (Mixpanel, Amplitude)",
      "SEO strategy and technical optimisation",
      "A/B testing framework and roadmap",
      "Custom dashboards and reporting",
      "Growth modelling and forecasting",
    ],
    accent: "#c084fc",
    bg: "from-[#160f25] to-[#0a0a12]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesDetail() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#07070a]">
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
              className={`group relative rounded-2xl border border-[rgba(255,255,255,0.07)] bg-gradient-to-br ${svc.bg} hover:border-[rgba(79,142,247,0.18)] transition-all duration-500 overflow-hidden`}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
              {/* Accent glow */}
              <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-10 blur-[80px] group-hover:opacity-20 transition-opacity duration-700"
                style={{ background: svc.accent }}
              />

              <div className="relative z-10 p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  {/* Left */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${svc.accent}15`, border: `1px solid ${svc.accent}30` }}
                      >
                        <svc.icon className="w-6 h-6" style={{ color: svc.accent }} />
                      </div>
                      <span
                        className="font-display font-700 text-5xl select-none"
                        style={{ color: `${svc.accent}12` }}
                      >
                        {svc.number}
                      </span>
                    </div>

                    <div
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3"
                      style={{ background: `${svc.accent}12`, color: svc.accent, border: `1px solid ${svc.accent}25` }}
                    >
                      {svc.tagline}
                    </div>

                    <h3 className="font-display font-700 text-3xl text-[#eeeef6] mb-4">
                      {svc.title}
                    </h3>
                    <p className="text-[rgba(238,238,246,0.5)] text-base leading-relaxed mb-6">
                      {svc.desc}
                    </p>

                    <a
                      href="/#contact"
                      className="group/btn inline-flex items-center gap-2 text-sm font-medium transition-colors"
                      style={{ color: svc.accent }}
                    >
                      Start a conversation
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>

                  {/* Right — deliverables */}
                  <div>
                    <p className="text-xs font-medium text-[rgba(238,238,246,0.3)] uppercase tracking-widest mb-4">
                      What&apos;s included
                    </p>
                    <ul className="space-y-3">
                      {svc.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: svc.accent }}
                          />
                          <span className="text-[rgba(238,238,246,0.6)] text-sm leading-relaxed">
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
