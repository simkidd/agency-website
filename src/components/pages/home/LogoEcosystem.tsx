"use client";
import { useRef } from "react";

const logos = [
  { name: "Microsoft", svg: "M0 0h11v11H0zm12 0h11v11H12zM0 12h11v11H0zm12 0h11v11H12z" },
  { name: "Google", svg: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z" },
  { name: "Amazon", svg: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" },
  { name: "Meta", svg: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" },
  { name: "Apple", svg: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" },
  { name: "Netflix", svg: "M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z" },
  { name: "Spotify", svg: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" },
  { name: "Adobe", svg: "M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425h-3.71zm.893-22.624L8.245 13.485H0L12.098 0h2.761zm-3.885 24l7.309-17.015h4.917L17.951 24h-4.977z" },
];

export default function LogoEcosystem() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-[#0a0a0c] overflow-hidden"
    >
      {/* Header */}
      <div className="w-full px-6 lg:px-12 xl:px-20 mb-12">
        <p className="text-center text-white/40 text-sm uppercase tracking-widest">
          Trusted by Industry Leaders
        </p>
      </div>

      {/* Logo track */}
      <div className="relative">
        <div className="relative overflow-hidden" style={{ transform: "rotateX(5deg)" }}>
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#0a0a0c] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-16 py-8 animate-scroll">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="flex items-center justify-center w-32 h-16 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer group"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-12 h-12 fill-white group-hover:fill-[#2895f7] transition-colors duration-300"
                >
                  <path d={logo.svg} />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="w-full px-6 lg:px-12 xl:px-20 mt-12">
        <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </div>

      
    </section>
  );
}