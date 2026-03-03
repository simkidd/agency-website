"use client";

import { motion, Variants } from "framer-motion";
import {
  Check,
  ArrowLeft,
  Briefcase,
  FileText,
  Github,
  Globe,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Upload,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

const jobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
  },
  {
    id: "2",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
  },
  {
    id: "3",
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote",
  },
  {
    id: "4",
    title: "Product Manager",
    department: "Product",
    location: "Remote",
  },
  {
    id: "5",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
  },
  {
    id: "6",
    title: "Marketing Manager",
    department: "Marketing",
    location: "Remote",
  },
];

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const formVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const JobApplication = ({ jobId }: { jobId: string }) => {
  const selectedJob = jobs.find((j) => j.id === jobId);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    portfolio: "",
    position: selectedJob?.title || "",
    experience: "",
    salary: "",
    startDate: "",
    coverLetter: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setResume(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-24 h-24 rounded-full bg-[#12C48B]/20 flex items-center justify-center mx-auto mb-8">
            <Check className="w-12 h-12 text-[#12C48B]" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Application Submitted!
          </h2>
          <p className="text-white/60 mb-8">
            Thank you for your interest. Our HR team will review your
            application and contact you within 5 business days.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2895f7] text-white font-medium rounded-full hover:bg-[#0082f3] transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            View More Jobs
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2895f7]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d9ff]/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className=" max-w-4xl mx-auto"
          >
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Careers
            </Link>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Apply <span className="text-gradient">Now</span>
            </h1>
            {selectedJob ? (
              <div className="flex flex-wrap items-center gap-4 text-white/60">
                <span className="px-4 py-2 rounded-full bg-[#2895f7]/20 text-[#2895f7]">
                  {selectedJob.title}
                </span>
                <span className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  {selectedJob.department}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {selectedJob.location}
                </span>
              </div>
            ) : (
              <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                Join our team of innovators and help shape the future of digital
                experiences.
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-32">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto"
            variants={formVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="p-8 lg:p-12 rounded-3xl glass border border-white/10">
              {/* Personal Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <User className="w-6 h-6 text-[#2895f7]" />
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        handleChange("firstName", e.target.value)
                      }
                      placeholder="John"
                      className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#2895f7] focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      placeholder="Doe"
                      className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#2895f7] focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="john@email.com"
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#2895f7] focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+1 (234) 567-890"
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#2895f7] focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-white/60 text-sm mb-2">
                      Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) =>
                          handleChange("location", e.target.value)
                        }
                        placeholder="City, Country"
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#2895f7] focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Links */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-[#2895f7]" />
                  Professional Links
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">
                      LinkedIn Profile
                    </label>
                    <div className="relative">
                      <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <input
                        type="url"
                        value={formData.linkedin}
                        onChange={(e) =>
                          handleChange("linkedin", e.target.value)
                        }
                        placeholder="https://linkedin.com/in/username"
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#2895f7] focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">
                      GitHub Profile
                    </label>
                    <div className="relative">
                      <Github className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <input
                        type="url"
                        value={formData.github}
                        onChange={(e) => handleChange("github", e.target.value)}
                        placeholder="https://github.com/username"
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#2895f7] focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-white/60 text-sm mb-2">
                      Portfolio Website
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <input
                        type="url"
                        value={formData.portfolio}
                        onChange={(e) =>
                          handleChange("portfolio", e.target.value)
                        }
                        placeholder="https://yourportfolio.com"
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#2895f7] focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Position & Experience */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-[#2895f7]" />
                  Position & Experience
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {!selectedJob && (
                    <div>
                      <label className="block text-white/60 text-sm mb-2">
                        Position Applied For *
                      </label>
                      <select
                        required
                        value={formData.position}
                        onChange={(e) =>
                          handleChange("position", e.target.value)
                        }
                        className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#2895f7] focus:outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#0a0a0c]">
                          Select a position
                        </option>
                        {jobs.map((job) => (
                          <option
                            key={job.id}
                            value={job.title}
                            className="bg-[#0a0a0c]"
                          >
                            {job.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  <div>
                    <label className="block text-white/60 text-sm mb-2">
                      Years of Experience *
                    </label>
                    <select
                      required
                      value={formData.experience}
                      onChange={(e) =>
                        handleChange("experience", e.target.value)
                      }
                      className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#2895f7] focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0a0a0c]">
                        Select experience
                      </option>
                      <option value="0-2" className="bg-[#0a0a0c]">
                        0-2 years
                      </option>
                      <option value="2-5" className="bg-[#0a0a0c]">
                        2-5 years
                      </option>
                      <option value="5-8" className="bg-[#0a0a0c]">
                        5-8 years
                      </option>
                      <option value="8+" className="bg-[#0a0a0c]">
                        8+ years
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">
                      Expected Salary
                    </label>
                    <input
                      type="text"
                      value={formData.salary}
                      onChange={(e) => handleChange("salary", e.target.value)}
                      placeholder="e.g., $80,000 - $100,000"
                      className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#2895f7] focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">
                      Earliest Start Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.startDate}
                      onChange={(e) =>
                        handleChange("startDate", e.target.value)
                      }
                      className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#2895f7] focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Resume Upload */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[#2895f7]" />
                  Resume / CV *
                </h2>
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`relative p-8 rounded-2xl border-2 border-dashed transition-all ${
                    dragActive
                      ? "border-[#2895f7] bg-[#2895f7]/10"
                      : "border-white/20 bg-white/5"
                  }`}
                >
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="text-center">
                    <Upload className="w-12 h-12 text-white/40 mx-auto mb-4" />
                    {resume ? (
                      <div>
                        <p className="text-white font-medium">{resume.name}</p>
                        <p className="text-white/50 text-sm">
                          Click or drag to replace
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-white font-medium mb-2">
                          Drop your resume here, or click to browse
                        </p>
                        <p className="text-white/50 text-sm">
                          Supports PDF, DOC, DOCX (max 10MB)
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Cover Letter */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Cover Letter
                </h2>
                <textarea
                  rows={5}
                  value={formData.coverLetter}
                  onChange={(e) => handleChange("coverLetter", e.target.value)}
                  placeholder="Tell us why you're a great fit for this role..."
                  className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#2895f7] focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !resume}
                className="w-full py-4 bg-[#2895f7] text-white font-medium rounded-xl hover:bg-[#0082f3] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Application
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default JobApplication;
