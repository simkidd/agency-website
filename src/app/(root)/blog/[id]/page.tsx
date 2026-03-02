import BlogArticle from "@/components/pages/blog/BlogArticle";
import React from "react";



const BlogArticlePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return <BlogArticle postId={id} />;
};

export default BlogArticlePage;
