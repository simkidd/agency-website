"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-grid opacity-60" />
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[rgba(214,185,140,0.08)] blur-[120px]" />
        {/* Top line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent" />
      </div>

      {/* Decorative SVG element */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 overflow-hidden pointer-events-none opacity-30">
        <svg viewBox="0 0 400 600" fill="none" className="h-full w-full">
          <circle
            cx="400"
            cy="300"
            r="250"
            stroke="rgba(79,142,247,0.1)"
            strokeWidth="1"
          />
          <circle
            cx="400"
            cy="300"
            r="180"
            stroke="rgba(79,142,247,0.07)"
            strokeWidth="1"
          />
          <circle
            cx="400"
            cy="300"
            r="110"
            stroke="rgba(79,142,247,0.05)"
            strokeWidth="1"
          />
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium mb-6 uppercase tracking-wider">
              Contact Us
            </div>
            <h2 className="font-display font-700 text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              Let&apos;s build <span className="text-gradient">together</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Have a project in mind? We&apos;d love to hear about it. Get in
              touch and we&apos;ll get back to you within 24 hours.
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "hello@Vanguardds.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
                { icon: MapPin, label: "Office", value: "San Francisco, CA" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-foreground text-sm font-medium">
                      {item.value}
                    </div>
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
            className="relative p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-xl overflow-hidden"
          >
            {/* Top border accent */}
            <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-accent to-transparent" />

            <h3 className="font-display font-600 text-foreground text-xl mb-6">
              Send us a message
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {["First Name", "Last Name"].map((ph) => (
                  <div key={ph}>
                    <input
                      type="text"
                      placeholder={ph}
                      className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:border-accent focus:outline-none focus:bg-accent/5 transition-all"
                    />
                  </div>
                ))}
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:border-accent focus:outline-none focus:bg-accent/5 transition-all"
              />

              <select className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foregroundtext-sm focus:border-accent focus:outline-none transition-all appearance-none">
                <option value="">Type of project...</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>AI Solutions</option>
                <option>Other</option>
              </select>

              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground text-sm focus:border-accent focus:outline-none focus:bg-accent/5 transition-all resize-none"
              />

              <button className="group w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-all hover:shadow-[0_0_30px_rgba(214,185,140,0.35)] cursor-pointer">
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
