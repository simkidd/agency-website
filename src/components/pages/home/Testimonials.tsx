"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, TechVentures Inc.",
    image: "/images/testimonial-1.jpg",
    quote:
      "TechNova transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations. The team was professional, responsive, and delivered on time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, DataFlow Systems",
    image: "/images/testimonial-2.jpg",
    quote:
      "Working with TechNova was a game-changer for our startup. They built a scalable platform that handled our rapid growth seamlessly. Their technical expertise is unmatched.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Park",
    role: "Product Director, InnovateLab",
    image: "/images/testimonial-3.jpg",
    quote:
      "The UI/UX design team at TechNova created an interface that our users absolutely love. Engagement increased by 150% after the redesign. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const carouselInView = useInView(carouselRef, { once: true, margin: "-100px" });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);

  const handlePrev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  const handleNext = () =>
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    dragStartX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const endX =
      "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;

    const diff = dragStartX.current - endX;
    if (Math.abs(diff) > 50) diff > 0 ? handleNext() : handlePrev();
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#0a0a0c] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2895f7]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d9ff]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ y: 50, opacity: 0 }}
          animate={headingInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2895f7]/10 text-[#2895f7] text-sm font-medium mb-6">
            Testimonials
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Clients <span className="text-gradient">Say</span>
          </h2>

          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say
            about working with us.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          ref={carouselRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={carouselInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto"
          style={{ perspective: "1000px" }}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={() =>
            isDragging &&
            handleDragEnd({ clientX: dragStartX.current } as React.MouseEvent)
          }
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          {/* Cards */}
          <div className="relative h-[500px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => {
              const offset = index - activeIndex;
              const absOffset = Math.abs(offset);
              const isActive = index === activeIndex;

              const rotateY = offset * 45;
              const translateZ = isActive ? 0 : -200;
              const translateX = offset * 300;
              const scale = isActive ? 1 : 0.8;
              const opacity = absOffset > 1 ? 0 : isActive ? 1 : 0.5;
              const blur = isActive ? 0 : 2;

              return (
                <motion.div
                  key={testimonial.id}
                  animate={{
                    x: translateX,
                    rotateY,
                    scale,
                    opacity,
                    filter: `blur(${blur}px)`,
                    zIndex: isActive ? 10 : 5 - absOffset,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="absolute w-full max-w-lg cursor-grab active:cursor-grabbing"
                  style={{
                    transformStyle: "preserve-3d",
                    translateZ,
                  }}
                >
                  <div className="relative p-8 rounded-3xl glass border border-white/10">
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#2895f7] flex items-center justify-center glow-blue">
                      <Quote className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#2895f7] text-[#2895f7]"
                        />
                      ))}
                    </div>

                    <p className="text-white/80 text-lg leading-relaxed mb-8">
                      {testimonial.quote}
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#2895f7]/30">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">
                          {testimonial.name}
                        </h4>
                        <p className="text-white/50 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Nav */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-[#2895f7]/50 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-[#2895f7]/50 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-[#2895f7]"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}