import React from "react";
import HomeSection from "./sections/home/HomeSection";
import AboutSection from "./sections/about/AboutSection";
import SkillSection from "./sections/skills/SkillSection";
import ProjectSection from "./sections/projects/ProjectSection";
import Navbar from "./common/Navbar";
import Resume from "./sections/resume/ResumeSection";

type Props = {};

const Main = (props: Props) => {
  return (
    <div style={{ maxWidth: "1280px" }}>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <Resume />
    </div>
  );
};

export default Main;
