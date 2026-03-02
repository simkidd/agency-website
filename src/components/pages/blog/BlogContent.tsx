"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  Code,
  Cpu,
  Palette,
  Search,
  TrendingUp,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BlogFilter from "./BlogFilter";

const categories = [
  { id: "all", label: "All Posts", icon: TrendingUp },
  { id: "tech", label: "Technology", icon: Code },
  { id: "design", label: "Design", icon: Palette },
  { id: "ai", label: "AI & ML", icon: Cpu },
];

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the cutting-edge technologies and methodologies shaping the future of web development, from AI-powered tools to WebAssembly.",
    category: "tech",
    author: "David Park",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    image: "/images/case-study-1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Building Scalable Design Systems",
    excerpt:
      "Learn how to create and maintain design systems that grow with your organization while ensuring consistency across all products.",
    category: "design",
    author: "Sarah Mitchell",
    date: "Jan 10, 2024",
    readTime: "6 min read",
    image: "/images/case-study-3.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "AI in Modern Applications: A Practical Guide",
    excerpt:
      "Discover how to integrate AI capabilities into your applications to enhance user experience and automate complex tasks.",
    category: "ai",
    author: "Alex Chen",
    date: "Jan 5, 2024",
    readTime: "10 min read",
    image: "/images/case-study-4.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "The Art of Micro-Interactions",
    excerpt:
      "Small details make big differences. Learn how micro-interactions can elevate your user experience to the next level.",
    category: "design",
    author: "Emma Wilson",
    date: "Dec 28, 2023",
    readTime: "5 min read",
    image: "/images/case-study-2.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Cloud-Native Architecture Best Practices",
    excerpt:
      "A comprehensive guide to building resilient, scalable applications in the cloud using modern architectural patterns.",
    category: "tech",
    author: "David Park",
    date: "Dec 20, 2023",
    readTime: "12 min read",
    image: "/images/case-study-1.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Machine Learning for Beginners",
    excerpt:
      "Start your journey into machine learning with this beginner-friendly guide covering fundamental concepts and practical applications.",
    category: "ai",
    author: "Alex Chen",
    date: "Dec 15, 2023",
    readTime: "15 min read",
    image: "/images/case-study-4.jpg",
    featured: false,
  },
];

const BlogContent = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter(
    (post) => !post.featured || activeCategory !== "all",
  );

  return (
    <div>
      <BlogFilter
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Featured Post */}
      {featuredPost && activeCategory === "all" && !searchQuery && (
        <section className="py-16">
          <div className="w-full px-6 lg:px-12 xl:px-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={300}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#0a0a0c] lg:block hidden" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0c] to-transparent lg:hidden" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-[#0a0a0c]">
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-[#2895f7]/20 text-[#2895f7] text-xs font-medium mb-4">
                    Featured
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-linear transition-all">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/60 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6 text-sm text-white/40">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 text-[#2895f7] hover:text-white transition-colors group/btn"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      width={300}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0c]/80 to-transparent" />
                    <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/10 text-white text-xs backdrop-blur-sm">
                      {categories.find((c) => c.id === post.category)?.label}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-linear transition-all line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-white/40">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Empty State */}
          {regularPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-white/40 text-lg mb-4">
                No articles found
              </div>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="text-[#2895f7] hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogContent;
