"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0d0d14]">
        <div className="absolute inset-0 bg-grid opacity-60" />
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[rgba(79,142,247,0.05)] blur-[120px]" />
        {/* Top line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(79,142,247,0.3)] to-transparent" />
      </div>

      {/* Decorative SVG element */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 overflow-hidden pointer-events-none opacity-30">
        <svg viewBox="0 0 400 600" fill="none" className="h-full w-full">
          <circle cx="400" cy="300" r="250" stroke="rgba(79,142,247,0.1)" strokeWidth="1" />
          <circle cx="400" cy="300" r="180" stroke="rgba(79,142,247,0.07)" strokeWidth="1" />
          <circle cx="400" cy="300" r="110" stroke="rgba(79,142,247,0.05)" strokeWidth="1" />
          <circle cx="400" cy="300" r="40" fill="rgba(79,142,247,0.04)" />
        </svg>
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(79,142,247,0.2)] bg-[rgba(79,142,247,0.07)] text-[#4f8ef7] text-xs font-medium mb-6 uppercase tracking-wider">
              Contact Us
            </div>
            <h2 className="font-display font-700 text-4xl lg:text-5xl text-[#eeeef6] leading-tight mb-6">
              Let&apos;s build{" "}
              <span className="text-gradient">together</span>
            </h2>
            <p className="text-[rgba(238,238,246,0.5)] text-lg leading-relaxed mb-10">
              Have a project in mind? We&apos;d love to hear about it. Get in touch and we&apos;ll get back to you within 24 hours.
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "hello@technova.io" },
                { icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
                { icon: MapPin, label: "Office", value: "San Francisco, CA" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(79,142,247,0.08)] border border-[rgba(79,142,247,0.15)] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-[#4f8ef7]" />
                  </div>
                  <div>
                    <div className="text-xs text-[rgba(238,238,246,0.35)] mb-0.5">{item.label}</div>
                    <div className="text-[rgba(238,238,246,0.7)] text-sm font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative p-8 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(13,13,20,0.9)] overflow-hidden"
          >
            {/* Top border accent */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[rgba(79,142,247,0.4)] to-transparent" />

            <h3 className="font-display font-600 text-[#eeeef6] text-xl mb-6">Send us a message</h3>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {["First Name", "Last Name"].map((ph) => (
                  <div key={ph}>
                    <input
                      type="text"
                      placeholder={ph}
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#eeeef6] placeholder:text-[rgba(238,238,246,0.3)] text-sm focus:border-[rgba(79,142,247,0.4)] focus:outline-none focus:bg-[rgba(79,142,247,0.04)] transition-all"
                    />
                  </div>
                ))}
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#eeeef6] placeholder:text-[rgba(238,238,246,0.3)] text-sm focus:border-[rgba(79,142,247,0.4)] focus:outline-none focus:bg-[rgba(79,142,247,0.04)] transition-all"
              />

              <select className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[rgba(238,238,246,0.5)] text-sm focus:border-[rgba(79,142,247,0.4)] focus:outline-none transition-all appearance-none">
                <option value="">Type of project...</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>AI Solutions</option>
                <option>Other</option>
              </select>

              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#eeeef6] placeholder:text-[rgba(238,238,246,0.3)] text-sm focus:border-[rgba(79,142,247,0.4)] focus:outline-none focus:bg-[rgba(79,142,247,0.04)] transition-all resize-none"
              />

              <button className="group w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#4f8ef7] text-white font-semibold text-sm hover:bg-[#3a7de8] transition-all hover:shadow-[0_0_30px_rgba(79,142,247,0.4)] cursor-pointer">
                Send Message
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
