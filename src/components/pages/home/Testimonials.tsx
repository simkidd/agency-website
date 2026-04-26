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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);

  const handlePrev = () =>
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const handleNext = () =>
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

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
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-[rgba(214,185,140,0.08)] blur-[100px]" />
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full bg-[rgba(214,185,140,0.05)] blur-[80px]" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium mb-5 uppercase tracking-wider">
            Client Love
          </div>
          <h2 className="font-display font-700 text-4xl lg:text-5xl text-foreground leading-tight">
            What our <span className="text-gradient">clients say</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          style={{ perspective: "1000px" }}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          <div className="relative h-[420px] flex items-center justify-center">
            {testimonials.map((t, i) => {
              const offset = i - activeIndex;
              const abs = Math.abs(offset);
              const isActive = i === activeIndex;

              return (
                <motion.div
                  key={t.name}
                  animate={{
                    x: offset * 280,
                    scale: isActive ? 1 : 0.85,
                    opacity: abs > 1 ? 0 : isActive ? 1 : 0.5,
                    rotateY: offset * 35,
                    zIndex: isActive ? 10 : 5 - abs,
                    filter: `blur(${isActive ? 0 : 2}px)`,
                  }}
                  transition={{ duration: 0.45 }}
                  className="absolute w-full max-w-md cursor-grab active:cursor-grabbing"
                >
                  <div className="relative p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-xl">
                    {/* Quote */}
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Quote className="w-4 h-4 text-accent" />
                    </div>

                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                      “{t.quote}”
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-[rgba(255,255,255,0.07)]">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent/30">
                        <Image
                          src={t.image}
                          alt={t.name}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">
                          {t.name}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {t.role}
                        </div>
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
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-accent/10 transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-accent/10 transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === activeIndex ? "w-6 bg-accent" : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
