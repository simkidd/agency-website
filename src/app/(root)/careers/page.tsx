import BenefitSection from "@/components/pages/career/BenefitSection";
import CareerCTA from "@/components/pages/career/CareerCTA";
import OpenPositions from "@/components/pages/career/OpenPositions";
import PageHeader from "@/components/shared/PageHeader";

const CareerPage = () => {
  return (
    <>
      <PageHeader
        badgeText="Join Our Team"
        title="Build the Future With Us"
        gradientText="Future"
        subtitle="We're always looking for talented individuals who are passionate about creating exceptional digital experiences."
      />

      <BenefitSection />
      <OpenPositions />
      <CareerCTA />
    </>
  );
};

export default CareerPage;
