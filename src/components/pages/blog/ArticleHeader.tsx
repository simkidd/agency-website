"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export interface ArticleHeaderProps {
  title: string;
  category: string;
  image: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  readTime: string;
  backHref?: string;
  backLabel?: string;
}

const ArticleHeader = ({
  title,
  category,
  image,
  author,
  authorRole,
  authorImage,
  date,
  readTime,
  backHref = "/blog",
  backLabel = "Back to Blog",
}: ArticleHeaderProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  // scroll progress of THIS section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // parallax movement
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="relative h-[70vh] overflow-hidden">
      {/* Background image (PARALLAX) */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2895f7]/20 text-[#2895f7] text-sm font-medium mb-4">
              {category}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-4xl mb-6">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/60">
              <div className="flex items-center gap-3">
                <Image
                  src={authorImage}
                  alt={author}
                  className="w-10 h-10 rounded-full object-cover"
                  width={100}
                  height={100}
                />
                <div>
                  <div className="text-white font-medium">{author}</div>
                  <div className="text-sm">{authorRole}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {date}
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArticleHeader;
