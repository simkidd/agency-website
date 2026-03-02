"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Check,
  Loader2,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
  // =========================
  // Animation variants
  // =========================

  const headingContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const headingItem = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease,
      },
    },
  };

  const formReveal = {
    hidden: { opacity: 0, y: 80 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.2,
        ease,
      },
    },
  };

  // =========================
  // Submit handler
  // =========================

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // =========================
  // UI
  // =========================

  return (
    <section
      id="contact"
      className="relative py-32 bg-[#0a0a0c] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/contact-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0c] via-[#0a0a0c]/80 to-[#0a0a0c]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* =========================
              LEFT SIDE
          ========================= */}
          <motion.div
            variants={headingContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
          >
            <motion.span
              variants={headingItem}
              className="inline-block px-4 py-1.5 rounded-full bg-[#2895f7]/10 text-[#2895f7] text-sm font-medium mb-6"
            >
              Get In Touch
            </motion.span>

            <motion.h2
              variants={headingItem}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Let&apos;s Build <span className="text-gradient">Together</span>
            </motion.h2>

            <motion.p
              variants={headingItem}
              className="text-white/50 text-lg mb-12 leading-relaxed"
            >
              Have a project in mind? We&apos;d love to hear about it. Send us a
              message and we&apos;ll get back to you within 24 hours.
            </motion.p>

            <motion.div variants={headingItem} className="space-y-6">
              <ContactItem
                icon={Mail}
                label="Email"
                value="hello@technova.com"
                href="mailto:hello@technova.com"
              />

              <ContactItem
                icon={Phone}
                label="Phone"
                value="+1 (234) 567-890"
                href="tel:+1234567890"
              />

              <ContactItem
                icon={MapPin}
                label="Location"
                value="San Francisco, CA"
              />
            </motion.div>
          </motion.div>

          {/* =========================
              RIGHT SIDE FORM
          ========================= */}
          <motion.form
            variants={formReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            onSubmit={handleSubmit}
            className="relative p-8 lg:p-10 rounded-3xl glass border border-white/10"
          >
            <div className="space-y-6">
              <InputField
                label="Your Name"
                placeholder="John Doe"
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              />

              <InputField
                type="email"
                label="Email Address"
                placeholder="john@example.com"
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              />

              <InputField
                label="Subject"
                placeholder="Project Inquiry"
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField(null)}
              />

              <TextareaField
                label="Message"
                placeholder="Tell us about your project..."
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
              />

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-500 cursor-pointer ${
                  isSubmitted
                    ? "bg-[#12C48B] text-white"
                    : "bg-[#2895f7] text-white hover:bg-[#0082f3] hover:glow-blue"
                }`}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>

            <div className="absolute -top-2 -right-2 w-20 h-20 border-t-2 border-r-2 border-[#2895f7]/30 rounded-tr-3xl" />
            <div className="absolute -bottom-2 -left-2 w-20 h-20 border-b-2 border-l-2 border-[#2895f7]/30 rounded-bl-3xl" />
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* =========================
   Reusable Components
========================= */

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-12 h-12 rounded-xl bg-[#2895f7]/10 flex items-center justify-center group-hover:bg-[#2895f7]/20 transition-colors duration-300">
        <Icon className="w-5 h-5 text-[#2895f7]" />
      </div>
      <div>
        <div className="text-white/40 text-sm">{label}</div>
        {href ? (
          <a
            href={href}
            className="text-white hover:text-[#2895f7] transition-colors"
          >
            {value}
          </a>
        ) : (
          <span className="text-white">{value}</span>
        )}
      </div>
    </div>
  );
}

function InputField({
  label,
  placeholder,
  type = "text",
  onFocus,
  onBlur,
}: {
  label: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  onFocus: () => void;
  onBlur: () => void;
}) {
  return (
    <div>
      <label className="block text-white/60 text-sm mb-2">{label}</label>
      <input
        type={type}
        required
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#2895f7] focus:outline-none focus:glow-blue transition-all duration-300"
      />
    </div>
  );
}

function TextareaField({
  label,
  placeholder,
  onFocus,
  onBlur,
}: {
  label: string;
  placeholder: string;
  onFocus: () => void;
  onBlur: () => void;
}) {
  return (
    <div>
      <label className="block text-white/60 text-sm mb-2">{label}</label>
      <textarea
        required
        rows={4}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#2895f7] focus:outline-none focus:glow-blue transition-all duration-300 resize-none"
      />
    </div>
  );
}
