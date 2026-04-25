import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
    { label: "AI Solutions", href: "/services" },
    { label: "Cloud & DevOps", href: "/services" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "Cookie Policy", href: "/" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.07)] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#07070a]">
        <div className="absolute inset-0 bg-grid-fine opacity-60" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-[rgba(79,142,247,0.04)] blur-[80px]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[rgba(79,142,247,0.15)] flex items-center justify-center">
                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
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
              <span className="font-display font-700 text-[#eeeef6] text-lg">
                TechNova
              </span>
            </Link>
            <p className="text-[rgba(238,238,246,0.45)] text-sm leading-relaxed max-w-xs mb-6">
              We craft exceptional digital experiences that push the boundaries
              of design and technology.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {["twitter", "linkedin", "github", "dribbble"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.07)] flex items-center justify-center text-[rgba(238,238,246,0.4)] hover:text-[#4f8ef7] hover:border-[rgba(79,142,247,0.3)] hover:bg-[rgba(79,142,247,0.08)] transition-all duration-200"
                  aria-label={s}
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    {s === "twitter" && (
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    )}
                    {s === "linkedin" && (
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />
                    )}
                    {s === "github" && (
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    )}
                    {s === "dribbble" && (
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-display font-600 text-[#eeeef6] text-sm mb-4">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[rgba(238,238,246,0.45)] hover:text-[#eeeef6] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[rgba(238,238,246,0.3)]">
            © {new Date().getFullYear()} TechNova. All rights reserved.
          </p>
          <p className="text-xs text-[rgba(238,238,246,0.3)]">
            Crafted with precision & passion
          </p>
        </div>
      </div>
    </footer>
  );
}
