"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  {
    id: "1",
    category: "Technology",
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt:
      "Explore the cutting-edge technologies and methodologies shaping the future of web development, from AI-powered tools to WebAssembly.",
    readTime: "8 min read",
    date: "Jan 15, 2025",
  },
  {
    id: "2",
    category: "Design",
    title: "Building Scalable Design Systems That Stand the Test of Time",
    excerpt:
      "Learn how to create and maintain design systems that grow with your organisation while ensuring consistency across all products.",
    readTime: "6 min read",
    date: "Jan 10, 2025",
  },
  {
    id: "3",
    category: "AI & ML",
    title: "AI in Modern Applications: A Practical Integration Guide",
    excerpt:
      "Discover how to integrate AI capabilities into your applications to enhance user experience and automate complex tasks.",
    readTime: "10 min read",
    date: "Jan 5, 2025",
  },
  {
    id: "4",
    category: "Engineering",
    title: "Cloud-Native Architecture Best Practices for 2025",
    excerpt:
      "Modern infrastructure patterns for teams that need to move fast without sacrificing reliability or security.",
    readTime: "12 min read",
    date: "Dec 28, 2024",
  },
  {
    id: "5",
    category: "Design",
    title: "The Art of Micro-Interactions: Details That Delight",
    excerpt:
      "Small moments of feedback that make digital products feel alive, responsive, and intentionally crafted.",
    readTime: "5 min read",
    date: "Dec 22, 2024",
  },
  {
    id: "6",
    category: "Strategy",
    title: "From Brief to Build: How We Approach New Projects",
    excerpt:
      "A behind-the-scenes look at Vanguardds discovery and strategy process and why it makes everything else better.",
    readTime: "7 min read",
    date: "Dec 15, 2024",
  },
];

export default function BlogContent() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link href={`/blog/${post.id}`} className="group block h-full">
                <div
                  className={`relative h-full rounded-2xl border border-border bg-gradient-to-br bg-card/80 hover:border-accent/30 transition-all duration-300 overflow-hidden p-7 flex flex-col justify-between min-h-[260px]`}
                >
                  <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 blur-[50px] group-hover:opacity-20 transition-all duration-500 bg-accent" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 bg-accent/10 border border-accent/20 text-accent">
                      {post.category}
                    </div>
                    <h3 className="font-display font-600 text-foreground text-lg leading-snug mb-3">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="relative z-10 flex items-center justify-between mt-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                      <span>·</span>
                      {post.date}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
