"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

interface INav {
  label: string;
  href: string;
}

const navLinks: INav[] = [
  {
    label: "Services",
    href: "/services",
  },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

// ========================
// Framer Motion Variants
// ========================

const navVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

const mobileMenuItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

// ========================
// Header Component
// ========================

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* ---------------- SCROLL EFFECT ---------------- */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- HASH NAVIGATION ---------------- */
  const handleLinkClick = async (e: React.MouseEvent, href: string) => {
    if (!href.startsWith("/#")) {
      setIsMobileMenuOpen(false);
      return;
    }

    e.preventDefault();
    const targetId = href.replace("/#", "");

    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }

    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.nav
      initial="hidden"
      animate="show"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass py-4" : "py-6 bg-transparent"
      }`}
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <rect
                  width="32"
                  height="32"
                  rx="8"
                  fill="rgba(79,142,247,0.15)"
                />
                <path d="M8 16L14 10L20 16L14 22L8 16Z" fill="#4f8ef7" />
                <path
                  d="M16 8L24 16L16 24"
                  stroke="#7aafff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-display font-700 text-[#eeeef6] text-lg tracking-tight">
              TechNova
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                <Link
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center gap-1 px-4 py-2 text-sm transition-colors duration-300 relative group rounded-lg ${
                    isActive(link.href)
                      ? "text-white bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/#contact"
              onClick={(e) => handleLinkClick(e, "/#contact")}
              className="px-6 py-2.5 bg-[#2895f7] text-white text-sm font-medium rounded-full hover:bg-[#0082f3] transition-all duration-300 hover:glow-blue"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center text-white p-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial="hidden"
          animate="show"
          variants={mobileMenuVariants}
          className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/10"
        >
          <div className="px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <motion.div key={link.label} variants={mobileMenuItemVariants}>
                <Link
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block py-3 px-4 rounded-xl transition-colors ${
                    isActive(link.href)
                      ? "text-[#4f8ef7] bg-[rgba(79,142,247,0.12)]"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div variants={mobileMenuItemVariants}>
              <Link
                href="/#contact"
                onClick={(e) => handleLinkClick(e, "/#contact")}
                className="block mt-2 px-6 py-3 bg-[#2895f7] text-white text-center font-medium rounded-full"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Header;
