import CaseStudies from "@/components/home/CaseStudies";
import Contact from "@/components/home/Contact";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import LogoEcosystem from "@/components/home/LogoEcosystem";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
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
