"use client";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    initials: "AC",
    color: "#4f8ef7",
    bg: "from-[#0f1929] to-[#0d0d14]",
    bio: "Previously engineering lead at Stripe. Obsessed with systems that scale.",
  },
  {
    name: "Sarah Mitchell",
    role: "Creative Director",
    initials: "SM",
    color: "#a5c8ff",
    bg: "from-[#0d1320] to-[#0d0d14]",
    bio: "15 years designing products people actually want to use. Ex-Airbnb.",
  },
  {
    name: "David Park",
    role: "Head of Engineering",
    initials: "DP",
    color: "#7fd4c1",
    bg: "from-[#0b1a18] to-[#0d0d14]",
    bio: "Full-stack and infrastructure fanatic. Contributor to React and Next.js.",
  },
  {
    name: "Maya Johnson",
    role: "Head of AI",
    initials: "MJ",
    color: "#c084fc",
    bg: "from-[#160f25] to-[#0d0d14]",
    bio: "PhD in ML from Stanford. Turned researcher into pragmatic product builder.",
  },
  {
    name: "James Liu",
    role: "Lead Product Designer",
    initials: "JL",
    color: "#f7c44f",
    bg: "from-[#1a150a] to-[#0d0d14]",
    bio: "Motion-obsessed designer. Everything he ships feels alive.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Growth",
    initials: "PS",
    color: "#f7774f",
    bg: "from-[#1a0f0a] to-[#0d0d14]",
    bio: "Grew three startups from zero to Series B. Data is her love language.",
  },
  {
    name: "Tom Ellis",
    role: "Senior Engineer",
    initials: "TE",
    color: "#7aafff",
    bg: "from-[#0d1320] to-[#0d0d14]",
    bio: "Backend systems and performance optimisation specialist. Rust enthusiast.",
  },
  {
    name: "Rina Tanaka",
    role: "UX Researcher",
    initials: "RT",
    color: "#7fd4c1",
    bg: "from-[#0b1a18] to-[#0d0d14]",
    bio: "Turns user interviews and usability tests into product decisions that stick.",
  },
];

export default function TeamGrid() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#07070a]">
        <div className="absolute inset-0 bg-grid-fine opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[rgba(79,142,247,0.03)] blur-[120px]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(79,142,247,0.2)] bg-[rgba(79,142,247,0.07)] text-[#4f8ef7] text-xs font-medium mb-5 uppercase tracking-wider">
            The Team
          </div>
          <h2 className="font-display font-700 text-4xl lg:text-5xl text-[#eeeef6] leading-tight">
            People behind <span className="text-gradient">the work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative rounded-2xl border border-[rgba(255,255,255,0.07)] bg-gradient-to-br ${member.bg} hover:border-[rgba(79,142,247,0.2)] transition-all duration-300 overflow-hidden p-6`}
            >
              {/* Glow on hover */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-[40px]"
                style={{ background: member.color }}
              />

              {/* Avatar */}
              <div className="relative mb-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-display font-700 text-white"
                  style={{
                    background: `linear-gradient(135deg, ${member.color}30, ${member.color}10)`,
                    border: `1px solid ${member.color}25`,
                  }}
                >
                  {member.initials}
                </div>
                {/* Online dot */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#07070a] flex items-center justify-center">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: member.color }}
                  />
                </div>
              </div>

              <h3 className="font-display font-600 text-[#eeeef6] text-base mb-0.5">
                {member.name}
              </h3>
              <p className="text-xs mb-3" style={{ color: member.color }}>
                {member.role}
              </p>
              <p className="text-xs text-[rgba(238,238,246,0.4)] leading-relaxed mb-4">
                {member.bio}
              </p>

              {/* Social links */}
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[Linkedin, Twitter].map((Icon, j) => (
                  <a
                    key={j}
                    href="#"
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-[rgba(238,238,246,0.4)] hover:text-[#eeeef6] transition-colors"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hiring note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 p-6 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(13,13,20,0.6)] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="font-display font-600 text-[#eeeef6] mb-1">
              We&apos;re growing
            </p>
            <p className="text-[rgba(238,238,246,0.45)] text-sm">
              We&apos;re always looking for exceptional people to join the team.
            </p>
          </div>
          <a
            href="/careers"
            className="flex-shrink-0 px-6 py-3 rounded-xl border border-[rgba(79,142,247,0.3)] text-[#4f8ef7] text-sm font-medium hover:bg-[rgba(79,142,247,0.08)] transition-all whitespace-nowrap"
          >
            View Open Roles →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
