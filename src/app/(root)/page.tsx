import CaseStudies from "@/components/pages/home/CaseStudies";
import Contact from "@/components/pages/home/Contact";
import Features from "@/components/pages/home/Features";
import Hero from "@/components/pages/home/Hero";
import LogoEcosystem from "@/components/pages/home/LogoEcosystem";
import Process from "@/components/pages/home/Process";
import Services from "@/components/pages/home/Services";
import Testimonials from "@/components/pages/home/Testimonials";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <LogoEcosystem />
      <Features />
      <Services />
      <Process />
      <Testimonials />
      <CaseStudies />
      <Contact />
    </>
  );
};

export default HomePage;
