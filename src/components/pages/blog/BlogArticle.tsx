"use client";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Bookmark,
  MessageCircle,
  ThumbsUp,
  Tag,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import ArticleHeader from "./ArticleHeader";
import TextContent from "./TextContent";

const articles = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the cutting-edge technologies and methodologies shaping the future of web development, from AI-powered tools to WebAssembly.",
    content: `
      <p>The landscape of web development is evolving at an unprecedented pace. As we move through 2024, several key trends are emerging that will fundamentally change how we build and interact with web applications.</p>
      
      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is no longer just a buzzword in web development. From code completion to automated testing, AI tools are becoming indispensable for developers. GitHub Copilot, ChatGPT, and specialized AI coding assistants are revolutionizing the way we write code.</p>
      
      <h2>2. WebAssembly Goes Mainstream</h2>
      <p>WebAssembly (Wasm) is finally reaching maturity, enabling high-performance applications to run in the browser. From video editing to 3D gaming, Wasm is breaking down the performance barriers that once limited web applications.</p>
      
      <h2>3. Edge Computing Revolution</h2>
      <p>The shift toward edge computing is transforming how we architect web applications. By processing data closer to users, we're seeing dramatic improvements in latency and user experience.</p>
      
      <h2>4. The Rise of Server Components</h2>
      <p>React Server Components and similar technologies are changing the paradigm of frontend development. By rendering components on the server, we're achieving better performance while maintaining rich interactivity.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is exciting and full of possibilities. By staying ahead of these trends, developers and businesses can create more powerful, efficient, and user-friendly web experiences.</p>
    `,
    category: "Technology",
    author: "David Park",
    authorRole: "Tech Lead",
    authorImage: "/images/testimonial-3.jpg",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    image: "/images/case-study-1.jpg",
    tags: ["Web Development", "AI", "WebAssembly", "Trends"],
    likes: 234,
    comments: 45,
  },
  {
    id: "2",
    title: "Building Scalable Design Systems",
    excerpt:
      "Learn how to create and maintain design systems that grow with your organization while ensuring consistency across all products.",
    content: `
      <p>A well-crafted design system is the foundation of consistent, scalable product development. In this article, we'll explore the key principles and practices for building design systems that stand the test of time.</p>
      
      <h2>What is a Design System?</h2>
      <p>At its core, a design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications. It's not just a component library—it's a comprehensive set of standards, documentation, and principles.</p>
      
      <h2>Key Components of a Design System</h2>
      <p>Every effective design system includes several critical elements: a component library, design tokens, documentation, and governance processes. Let's explore each of these in detail.</p>
      
      <h2>Maintaining Consistency at Scale</h2>
      <p>As organizations grow, maintaining design consistency becomes increasingly challenging. We'll discuss strategies for keeping your design system relevant and adopted across large teams.</p>
      
      <h2>Measuring Success</h2>
      <p>How do you know if your design system is working? We'll cover key metrics and indicators that help measure the impact and adoption of your design system.</p>
    `,
    category: "Design",
    author: "Sarah Mitchell",
    authorRole: "Creative Director",
    authorImage: "/images/testimonial-1.jpg",
    date: "Jan 10, 2024",
    readTime: "6 min read",
    image: "/images/case-study-3.jpg",
    tags: ["Design Systems", "UI/UX", "Scalability"],
    likes: 189,
    comments: 32,
  },
  {
    id: "3",
    title: "AI in Modern Applications: A Practical Guide",
    excerpt:
      "Discover how to integrate AI capabilities into your applications to enhance user experience and automate complex tasks.",
    content: `
      <p>Artificial Intelligence is transforming how we build applications. From intelligent chatbots to predictive analytics, AI capabilities are becoming essential features in modern software.</p>
      
      <h2>Getting Started with AI Integration</h2>
      <p>Integrating AI into your application doesn't have to be overwhelming. We'll start with simple implementations and gradually explore more sophisticated use cases.</p>
      
      <h2>Popular AI Use Cases</h2>
      <p>From natural language processing to computer vision, we'll explore the most common and impactful ways AI is being used in applications today.</p>
      
      <h2>Choosing the Right AI Tools</h2>
      <p>With so many AI platforms and APIs available, selecting the right tools for your project can be challenging. We'll provide a framework for making informed decisions.</p>
      
      <h2>Best Practices for AI Implementation</h2>
      <p>Implementing AI responsibly requires careful consideration of privacy, bias, and user trust. We'll cover the essential best practices every developer should know.</p>
    `,
    category: "AI & ML",
    author: "Alex Chen",
    authorRole: "CEO & Founder",
    authorImage: "/images/testimonial-2.jpg",
    date: "Jan 5, 2024",
    readTime: "10 min read",
    image: "/images/case-study-4.jpg",
    tags: ["AI", "Machine Learning", "Integration"],
    likes: 312,
    comments: 67,
  },
];

const relatedArticles = [
  {
    id: "4",
    title: "The Art of Micro-Interactions",
    category: "Design",
    image: "/images/case-study-2.jpg",
    readTime: "5 min",
  },
  {
    id: "5",
    title: "Cloud-Native Architecture Best Practices",
    category: "Technology",
    image: "/images/case-study-1.jpg",
    readTime: "12 min",
  },
  {
    id: "6",
    title: "Machine Learning for Beginners",
    category: "AI & ML",
    image: "/images/case-study-4.jpg",
    readTime: "15 min",
  },
];

const BlogArticle = ({ postId }: { postId: string }) => {
  const article = articles.find((a) => a.id === postId);
  if (!article) return null;

  return (
    <div>
      <ArticleHeader
        title={article.title}
        category={article.category}
        image={article.image}
        author={article.author}
        authorRole={article.authorRole}
        authorImage={article.authorImage}
        date={article.date}
        readTime={article.readTime}
      />

      {/* Article Content */}
      <section className="py-16">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-8">
                {/* <div
                  className="article-content prose prose-invert prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                /> */}
                <TextContent content={article.content} />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 text-white/60 text-sm"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Engagement */}
                <div className="mt-8 flex items-center gap-6">
                  <button className="flex items-center gap-2 text-white/60 hover:text-[#2895f7] transition-colors">
                    <ThumbsUp className="w-5 h-5" />
                    <span>{article.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-white/60 hover:text-[#2895f7] transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>{article.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-white/60 hover:text-[#2895f7] transition-colors">
                    <Bookmark className="w-5 h-5" />
                    <span>Save</span>
                  </button>
                </div>

                {/* Share */}
                <div className="mt-8 p-6 rounded-2xl glass border border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium flex items-center gap-2">
                      <Share2 className="w-5 h-5" />
                      Share this article
                    </span>
                    <div className="flex gap-3">
                      <button className="w-10 h-10 rounded-full bg-[#1DA1F2]/20 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-all">
                        <Twitter className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-[#0A66C2]/20 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all">
                        <Linkedin className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-[#1877F2]/20 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all">
                        <Facebook className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-8 p-6 rounded-2xl glass border border-white/10">
                  <div className="flex items-start gap-4">
                    <img
                      src={article.authorImage}
                      alt={article.author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {article.author}
                      </h3>
                      <p className="text-[#2895f7] text-sm mb-2">
                        {article.authorRole}
                      </p>
                      <p className="text-white/60 text-sm">
                        Passionate about creating exceptional digital
                        experiences and sharing knowledge with the community.
                        Follow for more insights on technology and design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <h3 className="text-white font-semibold text-lg mb-6">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.id}
                        href={`/blog/${related.id}`}
                        className="group block"
                      >
                        <div className="flex gap-4">
                          <div className="w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={related.image}
                              alt={related.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <div>
                            <span className="text-[#2895f7] text-xs">
                              {related.category}
                            </span>
                            <h4 className="text-white text-sm font-medium line-clamp-2 group-hover:text-gradient transition-all">
                              {related.title}
                            </h4>
                            <span className="text-white/40 text-xs">
                              {related.readTime}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Newsletter */}
                  <div className="mt-8 p-6 rounded-2xl glass border border-white/10">
                    <h3 className="text-white font-semibold mb-2">
                      Subscribe to our newsletter
                    </h3>
                    <p className="text-white/50 text-sm mb-4">
                      Get the latest articles delivered to your inbox.
                    </p>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#2895f7] focus:outline-none transition-all text-sm mb-3"
                    />
                    <button className="w-full py-3 bg-[#2895f7] text-white font-medium rounded-xl hover:bg-[#0082f3] transition-all text-sm">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArticle;
