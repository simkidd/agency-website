"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const positions = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    dept: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 2,
    title: "Product Designer",
    dept: "Design",
    type: "Full-time",
    location: "Remote / SF",
  },
  {
    id: 3,
    title: "Backend Engineer (Node.js)",
    dept: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 4,
    title: "AI/ML Engineer",
    dept: "AI",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 5,
    title: "Growth Marketing Manager",
    dept: "Marketing",
    type: "Full-time",
    location: "Remote / NYC",
  },
  {
    id: 6,
    title: "DevOps / Platform Engineer",
    dept: "Infrastructure",
    type: "Full-time",
    location: "Remote",
  },
];

export default function OpenPositions() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#07070a]">
        <div className="absolute inset-0 bg-grid-fine opacity-40" />
      </div>
      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="font-display font-700 text-3xl text-[#eeeef6]">
            Open Positions
          </h2>
        </motion.div>
        <div className="space-y-3">
          {positions.map((pos, i) => (
            <motion.div
              key={pos.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={`/careers/apply?job=${pos.id}`}
                className="group flex items-center justify-between p-6 rounded-xl border border-[rgba(255,255,255,0.07)] bg-[rgba(13,13,20,0.8)] hover:border-[rgba(79,142,247,0.2)] hover:bg-[rgba(13,13,20,1)] transition-all duration-200"
              >
                <div className="flex items-center gap-6 flex-wrap">
                  <h3 className="font-display font-600 text-[#eeeef6] text-lg">
                    {pos.title}
                  </h3>
                  <span className="px-2.5 py-1 rounded-md bg-[rgba(79,142,247,0.1)] text-[#4f8ef7] text-xs font-medium">
                    {pos.dept}
                  </span>
                  <span className="text-[rgba(238,238,246,0.35)] text-sm">
                    {pos.type}
                  </span>
                  <span className="text-[rgba(238,238,246,0.35)] text-sm">
                    {pos.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[rgba(238,238,246,0.4)] group-hover:text-[#4f8ef7] transition-colors ml-4 flex-shrink-0">
                  <span className="text-sm hidden sm:inline">Apply</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
