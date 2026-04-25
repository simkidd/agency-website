"use client";
import { motion } from "framer-motion";

const stacks = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    category: "Cloud & Infra",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "Vercel"],
  },
  {
    category: "AI & Data",
    items: ["OpenAI", "LangChain", "PyTorch", "Pinecone", "Supabase", "Amplitude"],
  },
  {
    category: "Design",
    items: ["Figma", "Framer", "Storybook", "Lottie", "Principle", "Webflow"],
  },
  {
    category: "Commerce",
    items: ["Shopify", "Stripe", "Sanity", "Contentful", "Algolia", "Klaviyo"],
  },
];

export default function TechStack() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d14]">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[rgba(79,142,247,0.04)] blur-[100px]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(79,142,247,0.2)] bg-[rgba(79,142,247,0.07)] text-[#4f8ef7] text-xs font-medium mb-5 uppercase tracking-wider">
            Our Stack
          </div>
          <h2 className="font-display font-700 text-4xl lg:text-5xl text-[#eeeef6] leading-tight">
            Tools we{" "}
            <span className="text-gradient">trust</span>
          </h2>
          <p className="text-[rgba(238,238,246,0.45)] mt-4 max-w-lg mx-auto">
            We choose best-in-class tools for each layer of the stack — and know them deeply enough to push their limits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="p-6 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(13,13,20,0.9)] hover:border-[rgba(79,142,247,0.15)] transition-all"
            >
              <p className="text-xs font-medium text-[rgba(238,238,246,0.3)] uppercase tracking-widest mb-4">
                {stack.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.07)] text-[rgba(238,238,246,0.65)] text-sm hover:border-[rgba(79,142,247,0.25)] hover:text-[#eeeef6] transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
