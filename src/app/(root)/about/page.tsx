import AboutCTA from "@/components/pages/about/AboutCTA";
import AboutStory from "@/components/pages/about/AboutStory";
import AboutValues from "@/components/pages/about/AboutValues";
import TeamGrid from "@/components/pages/about/TeamGrid";
import PageHeader from "@/components/shared/PageHeader";

export const metadata = {
  title: "About Us",
};

const AboutPage = () => {
  return (
    <>
      <PageHeader
        badgeText="About Us"
        title="We Build Digital Dreams"
        gradientText="Digital Dreams"
        subtitle="TechNova is a forward-thinking digital agency that transforms ideas into exceptional digital experiences. Since 2012, we've been pushing the boundaries of what's possible."
      />
      <AboutStory />
      <AboutValues />
      <TeamGrid />
      <AboutCTA />
    </>
  );
};

export default AboutPage;
