"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Play } from "lucide-react";
import AnimatedCounter from "../../common/AnimatedCounter";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      /* Soft background entrance */
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2, filter: "blur(20px)", opacity: 0 },
        {
          scale: 1,
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.8,
          ease: "power3.out",
        },
      );

      /* Very light parallax */
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0c]"
    >
      {/* Background */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Abstract digital waves"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-6 lg:px-12 xl:px-20 py-32">
          <div className="max-w-3xl">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#2895f7]/30 mb-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#2895f7]" />
              <span className="text-sm text-white/80">
                Award-Winning Digital Agency
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Crafting Digital Excellence
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-white/60 max-w-xl mb-10 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              We build scalable digital products that redefine user experiences.
              Transform your vision into reality with cutting-edge technology
              and innovative design.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/#work"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#2895f7] text-white font-medium rounded-full hover:bg-[#0082f3] transition-all duration-300"
              >
                Explore Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button className="group inline-flex items-center gap-3 px-8 py-4 glass text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 border border-white/20 cursor-pointer">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Showreel
              </button>
            </motion.div>

            <motion.div
              className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">
                  <AnimatedCounter end={150} suffix="+" />
                </div>
                <div className="text-sm text-white/50">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">
                  <AnimatedCounter end={98} suffix="%" />
                </div>
                <div className="text-sm text-white/50">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">
                  <AnimatedCounter end={12} suffix="+" />
                </div>
                <div className="text-sm text-white/50">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0c] to-transparent z-20" />
    </section>
  );
}
