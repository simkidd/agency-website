"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Twitter, Linkedin, Github, Instagram, ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Web Development", href: "/services" },
    { label: "Mobile Apps", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
    { label: "Cloud Solutions", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  resources: [
    { label: "Documentation", href: "/faq" },
    { label: "Case Studies", href: "/#work" },
    { label: "FAQ", href: "/faq" },
    { label: "Support", href: "/#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

// =======================
// Framer Motion Variants
// =======================

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Footer() {
  const router = useRouter();

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      router.push("/");
      setTimeout(() => {
        const target = document.getElementById(targetId);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <motion.footer
      className="relative bg-[#0a0a0c] border-t border-white/10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div className="w-full px-6 lg:px-12 xl:px-20 py-16 lg:py-20" variants={itemVariants}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <motion.div className="lg:col-span-4" variants={itemVariants}>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#2895f7] to-[#00d9ff] flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-white font-semibold text-xl">TechNova</span>
            </Link>
            <p className="text-white/50 leading-relaxed mb-8 max-w-sm">
              Crafting digital excellence through innovative design and cutting-edge technology. Let&apos;s build something amazing together.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    variants={itemVariants}
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#2895f7] hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links columns */}
          <motion.div className="lg:col-span-8" variants={itemVariants}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([key, links]) => (
                <motion.div key={key} variants={itemVariants}>
                  <h4 className="text-white font-semibold mb-4">{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <motion.li key={link.label} variants={itemVariants}>
                        <Link
                          href={link.href}
                          onClick={(e) => handleLinkClick(e, link.href)}
                          className="text-white/50 hover:text-white transition-colors duration-300 text-sm relative group"
                        >
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#2895f7] group-hover:w-full transition-all duration-300" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4" variants={itemVariants}>
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} TechNova. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Back to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-6 lg:right-12 xl:right-20 bottom-16 w-12 h-12 rounded-full bg-[#2895f7] flex items-center justify-center text-white hover:bg-[#0082f3] hover:glow-blue transition-all duration-300 group cursor-pointer lg:hidden"
        aria-label="Back to top"
        whileHover={{ scale: 1.1 }}
      >
        <ArrowUpRight className="w-5 h-5 -rotate-45 group-hover:-translate-y-1 transition-transform" />
      </motion.button>
    </motion.footer>
  );
}