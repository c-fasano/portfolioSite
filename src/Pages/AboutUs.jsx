import React from "react";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import SkillsSection from "../components/SkillsSection";
import Nav from "../components/Nav";

const AboutUs = () => {
  return (
    <>
      <Nav />
      <AboutSection />
      <SkillsSection />
      <FaqSection />
    </>
  )
}

export default AboutUs