import Pricing from "@/components/pages/services/Pricing";
import ServicesCTA from "@/components/pages/services/ServicesCTA";
import ServicesDetail from "@/components/pages/services/ServicesDetail";
import OurApproach from "@/components/pages/services/OurApproach";
import PageHeader from "@/components/shared/PageHeader";

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        badgeText="About Us"
        title="Solutions for Every Need"
        gradientText="Every Need"
        subtitle="From concept to deployment, we offer comprehensive digital services tailored to help your business thrive in the modern world."
      />
      <ServicesDetail />
      <OurApproach />
      {/* <Pricing /> */}
      <ServicesCTA />
    </>
  );
};

export default ServicesPage;
