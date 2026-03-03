"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const departments = ["All", "Engineering", "Design", "Product", "Marketing"];

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $160k",
    description:
      "We're looking for an experienced frontend developer to lead our web development initiatives.",
    requirements: [
      "5+ years of experience with React/Next.js",
      "Strong TypeScript skills",
      "Experience with state management (Redux, Zustand)",
      "Knowledge of performance optimization",
      "Experience with testing frameworks",
    ],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$90k - $130k",
    description:
      "Join our design team to create beautiful, intuitive user experiences.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma",
      "Portfolio showcasing web/mobile designs",
      "Experience with design systems",
      "Strong communication skills",
    ],
  },
  {
    id: 3,
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$130k - $170k",
    description:
      "Build scalable APIs and services that power our applications.",
    requirements: [
      "4+ years of backend development experience",
      "Strong Node.js/Python skills",
      "Database design and optimization",
      "Cloud platform experience (AWS/GCP)",
      "Microservices architecture knowledge",
    ],
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    salary: "$110k - $150k",
    description: "Lead product development from ideation to launch.",
    requirements: [
      "3+ years of product management experience",
      "Experience with agile methodologies",
      "Strong analytical skills",
      "Technical background preferred",
      "Excellent stakeholder management",
    ],
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $160k",
    description:
      "Build and maintain our cloud infrastructure and CI/CD pipelines.",
    requirements: [
      "4+ years of DevOps experience",
      "Strong Kubernetes and Docker skills",
      "Infrastructure as Code (Terraform)",
      "CI/CD pipeline experience",
      "Security best practices knowledge",
    ],
  },
  {
    id: 6,
    title: "Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    salary: "$80k - $110k",
    description: "Drive our marketing strategy and grow our brand presence.",
    requirements: [
      "3+ years of B2B marketing experience",
      "Digital marketing expertise",
      "Content strategy experience",
      "Analytics and data-driven mindset",
      "Excellent written communication",
    ],
  },
];

const OpenPositions = () => {
  const [activeDepartment, setActiveDepartment] = useState("All");
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const filteredJobs =
    activeDepartment === "All"
      ? jobs
      : jobs.filter((job) => job.department === activeDepartment);

  const toggleJob = (id: number) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  const filterItem = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="py-20">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Open <span className="text-gradient">Positions</span>
          </h2>
          <p className="text-white/50">
            Find your perfect role and join our growing team.
          </p>
        </div>

        {/* Department Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {departments.map((dept) => {
            const isActive = activeDepartment === dept;
            return (
              <motion.button
                key={dept}
                onClick={() => setActiveDepartment(dept)}
                variants={filterItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#2895f7] text-white"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {/* animated active background */}
                {isActive && (
                  <motion.span
                    layoutId="activeDepartment"
                    className="absolute inset-0 rounded-full bg-[#2895f7]"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}

                <span className="relative">{dept}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Job Listings */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredJobs.map((job, index) => {
            const isExpanded = expandedJob === job.id;

            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div
                  className={`relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    isExpanded
                      ? "bg-white/5 border-[#2895f7]/50"
                      : "glass border-white/10 hover:border-white/20"
                  }`}
                  onClick={() => toggleJob(job.id)}
                >
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-gradient transition-all">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-white/50">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1 text-[#2895f7]">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <ArrowRight
                        className={`w-5 h-5 text-white/40 transition-transform duration-300 ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t border-white/10">
                          <p className="text-white/60 mb-6">
                            {job.description}
                          </p>

                          <h4 className="text-white font-medium mb-3">
                            Requirements:
                          </h4>
                          <ul className="space-y-2 mb-6">
                            {job.requirements.map((req, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-white/60"
                              >
                                <Check className="w-5 h-5 text-[#2895f7] flex-shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>

                          <Link
                            href={`/careers/apply?job=${job.id}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2895f7] text-white font-medium rounded-full hover:bg-[#0082f3] transition-all"
                          >
                            Apply Now
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/40 mb-4">
              No open positions in this department.
            </p>
            <button
              onClick={() => setActiveDepartment("All")}
              className="text-[#2895f7] hover:underline"
            >
              View all positions
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OpenPositions;
