"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export interface ArticleHeaderProps {
  title: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  backHref?: string;
  backLabel?: string;
  // image prop kept for API compat but unused
  image?: string;
  authorImage?: string;
}

const ArticleHeader = ({
  title,
  category,
  author,
  authorRole,
  date,
  readTime,
  backHref = "/blog",
  backLabel = "Back to Blog",
  image,
}: ArticleHeaderProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} className="relative pt-36 pb-20 overflow-hidden">
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[#07070a]">
          <div className="absolute inset-0 bg-grid opacity-70" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[rgba(79,142,247,0.06)] blur-[100px]" />
        </div>
        <Image
          src={image || ""}
          alt={title}
          className="w-full h-full object-cover"
          fill
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07070a] pointer-events-none" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-[rgba(238,238,246,0.5)] hover:text-[#eeeef6] mb-8 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          {backLabel}
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[rgba(79,142,247,0.1)] border border-[rgba(79,142,247,0.2)] text-[#4f8ef7] text-sm font-medium mb-5">
            {category}
          </span>
          <h1 className="font-display font-700 text-4xl sm:text-5xl lg:text-6xl text-[#eeeef6] max-w-4xl leading-tight mb-8">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-[rgba(238,238,246,0.5)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[rgba(79,142,247,0.1)] border border-[rgba(79,142,247,0.2)] flex items-center justify-center text-[#4f8ef7] font-semibold text-sm">
                {author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <div className="text-[#eeeef6] font-medium text-sm">
                  {author}
                </div>
                <div className="text-xs">{authorRole}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4" />
              {date}
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4" />
              {readTime}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleHeader;
