"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Users, Scale, Headphones } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Zap,
    title: "Agile Methodology",
    description:
      "Rapid iteration and continuous delivery ensure your project evolves with your needs.",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description:
      "Every pixel is crafted with your users in mind, creating intuitive experiences.",
  },
  {
    icon: Scale,
    title: "Scalable Architecture",
    description:
      "Built to grow with your business, from startup to enterprise scale.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance ensures your systems run smoothly always.",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate heading and center image together
      gsap.from([headingRef.current, imageRef.current], {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Parallax only on the center image
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: -40,
          rotate: 10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#0a0a0c] overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/features-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0c] via-transparent to-[#0a0a0c]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        {/* Section header */}
        <div ref={headingRef} className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2895f7]/10 text-[#2895f7] text-sm font-medium mb-6">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose <span className="text-gradient">TechNova?</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            We combine technical expertise with creative innovation to deliver
            exceptional digital solutions that drive business growth.
          </p>
        </div>

        {/* Feature grid with center image */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center image */}
          <div
            ref={imageRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 z-0"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#2895f7]/30 glow-blue">
              <Image
                src="/images/features-bg.jpg"
                alt="Abstract waves"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-linear-to-br from-[#2895f7]/20 to-transparent" />
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isTop = index < 2;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={feature.title}
                  className={`group relative p-8 rounded-2xl glass border border-white/10 hover:border-[#2895f7]/50 transition-all duration-500 hover:glow-blue ${
                    isTop ? "md:mb-32" : "md:mt-32"
                  } ${isLeft ? "md:mr-48" : "md:ml-48"}`}
                  style={{ perspective: "1000px" }}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ boxShadow: "0 20px 40px rgba(40,149,247,0.2)" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#2895f7]/20 to-[#00d9ff]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-[#2895f7]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#2895f7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
