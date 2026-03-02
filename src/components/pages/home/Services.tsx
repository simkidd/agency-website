"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Smartphone, Palette, Cloud, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies. From responsive landing pages to complex enterprise solutions, we deliver scalable and performant web experiences.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript"],
    color: "#2895f7",
  },
  {
    id: 2,
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that provide seamless user experiences. We build apps that users love and businesses rely on.",
    technologies: ["React Native", "iOS", "Android", "Flutter"],
    color: "#00d9ff",
  },
  {
    id: 3,
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Human-centered design that combines aesthetics with functionality. We create intuitive interfaces that delight users and drive engagement.",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    color: "#12C48B",
  },
  {
    id: 4,
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and DevOps services. We help businesses leverage the power of cloud computing for growth and efficiency.",
    technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
    color: "#8B5CF6",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Service items slide up
      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-32 bg-[#0a0a0c]"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Section header */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1], // premium smooth easing
          }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2895f7]/10 text-[#2895f7] text-sm font-medium mb-6">
            Our Services
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            What We <span className="text-gradient">Do Best</span>
          </h2>

          <p className="text-white/50 max-w-2xl text-lg">
            From concept to deployment, we offer end-to-end digital solutions
            tailored to your unique business needs.
          </p>
        </motion.div>

        {/* Services accordion */}
        <div className="space-y-4">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = activeService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div
                  className={cn("relative border border-white/10 rounded-2xl overflow-hidden transition-all duration-500",
                    isActive ? "bg-white/5 h-auto sm:h-[280px]" : "bg-transparent h-[100px] sm:h-[120px]"
                  )}
                 
                >
                  {/* Background glow */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${service.color}15, transparent 70%)`,
                      opacity: isActive ? 1 : 0,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-6 lg:p-8">
                    {/* Header row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 lg:gap-6">
                        <div
                          className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center transition-all duration-300"
                          style={{
                            background: isActive
                              ? `linear-gradient(135deg, ${service.color}30, ${service.color}10)`
                              : "rgba(255,255,255,0.05)",
                          }}
                        >
                          <Icon
                            className="w-6 h-6 lg:w-7 lg:h-7 transition-colors duration-300"
                            style={{ color: isActive ? service.color : "#fff" }}
                          />
                        </div>
                        <h3
                          className={`text-xl lg:text-2xl font-semibold transition-all duration-300 ${
                            isActive ? "text-white" : "text-white/70"
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive ? "bg-[#2895f7] rotate-45" : "bg-white/10"
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Expanded content */}
                    <div
                      className={`mt-6 transition-all duration-500 ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4 pointer-events-none"
                      }`}
                    >
                      <p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-3xl mb-6">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-1.5 rounded-full text-sm font-medium"
                            style={{
                              background: `${service.color}15`,
                              color: service.color,
                              border: `1px solid ${service.color}30`,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom border animation */}
                  <div
                    className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
                    style={{
                      width: isActive ? "100%" : "0%",
                      background: `linear-gradient(90deg, ${service.color}, transparent)`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
