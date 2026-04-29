"use client";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Previously engineering lead at Stripe. Obsessed with systems that scale.",
  },
  {
    name: "Sarah Mitchell",
    role: "Creative Director",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "15 years designing products people actually want to use. Ex-Airbnb.",
  },
  {
    name: "David Park",
    role: "Head of Engineering",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    bio: "Full-stack and infrastructure fanatic. Contributor to React and Next.js.",
  },
  {
    name: "Maya Johnson",
    role: "Head of AI",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "PhD in ML from Stanford. Turned researcher into pragmatic product builder.",
  },
  {
    name: "James Liu",
    role: "Lead Product Designer",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    bio: "Motion-obsessed designer. Everything he ships feels alive.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Growth",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "Grew three startups from zero to Series B. Data is her love language.",
  },
  {
    name: "Tom Ellis",
    role: "Senior Engineer",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    bio: "Backend systems and performance optimisation specialist. Rust enthusiast.",
  },
  {
    name: "Rina Tanaka",
    role: "UX Researcher",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    bio: "Turns user interviews and usability tests into product decisions that stick.",
  },
];

export default function TeamGrid() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-grid-fine opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium mb-5 uppercase tracking-wider">
            The Team
          </div>
          <h2 className="font-display font-700 text-4xl lg:text-5xl text-foreground leading-tight">
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
              className={`group relative rounded-2xl border border-border bg-linear-to-br bg-card/70 backdrop-blur-xl hover:border-accent/20 transition-colors duration-300 overflow-hidden p-6`}
            >
              {/* Glow on hover */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-[40px] bg-accent-foreground/20" />

              {/* Avatar */}
              <div className="relative mb-5">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-border">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
               
              </div>

              <h3 className="font-display font-600 text-foreground text-base mb-0.5">
                {member.name}
              </h3>
              <p className="text-xs mb-3">
                {member.role}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {member.bio}
              </p>

              {/* Social links */}
              <div className="flex gap-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[Linkedin, Twitter].map((Icon, j) => (
                  <a
                    key={j}
                    href="#"
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground bg-white/5 hover:text-foreground transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hiring note */}
        {/* <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="font-display font-600 text-foreground mb-1">
              We&apos;re growing
            </p>
            <p className="text-muted-foreground text-sm">
              We&apos;re always looking for exceptional people to join the team.
            </p>
          </div>
          <a
            href="/careers"
            className="shrink-0 px-6 py-3 rounded-xl border border-accent/30 text-accent text-sm font-medium hover:bg-accent/10 transition-all whitespace-nowrap"
          >
            View Open Roles →
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
