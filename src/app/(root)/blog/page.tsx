import BlogContent from '@/components/pages/blog/BlogContent'
import BlogCTA from '@/components/pages/blog/BlogCTA'
import PageHeader from '@/components/shared/PageHeader'

const BlogPage = () => {
  return (
    <>
      <PageHeader
        badgeText="Our Blog"
        title="Insights & Ideas"
        gradientText="Ideas"
        subtitle="Explore the latest trends, insights, and best practices in technology, design, and digital innovation."
      />

      <BlogContent />
      <BlogCTA />
    </>
  )
}

export default BlogPage