"use client";
import { motion } from "framer-motion";
import { LucideIcon, Search } from "lucide-react";
import React from "react";

export interface BlogCategory {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface BlogFilterProps {
  categories: BlogCategory[];
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const BlogFilter = ({
  categories,
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
}: BlogFilterProps) => {
  const filterItem = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="py-8 border-y border-white/10">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-6"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.08,
                duration: 0.5,
                ease: "easeOut",
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 relative">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  variants={filterItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[#2895f7] text-white"
                      : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {/* animated active background */}
                  {isActive && (
                    <motion.span
                      layoutId="activeCategory"
                      className="absolute inset-0 rounded-full bg-[#2895f7]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {category.label}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Search */}
          <motion.div className="relative w-full lg:w-80" variants={filterItem}>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:border-[#2895f7] focus:outline-none transition-colors"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogFilter;
