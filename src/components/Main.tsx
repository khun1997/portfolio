"use client";
import React from "react";
import HomeSection from "./sections/home/HomeSection";
import AboutSection from "./sections/about/AboutSection";
import SkillSection from "./sections/skills/SkillSection";
import ProjectSection from "./sections/projects/ProjectSection";
import Navbar from "./common/Navbar";
import Resume from "./sections/resume/ResumeSection";
import { Stack, Theme, useMediaQuery } from "@mui/material";
import Humberger from "./common/Humberger";

const Main = () => {
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Stack
      style={{
        maxWidth: "1280px",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "60px",
          paddingLeft: md ? "120px" : "90px",
          paddingRight: md ? "120px" : "90px",
        }}
      >
        {sm ? <Humberger /> : <Navbar />}
      </Stack>
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <Resume />
    </Stack>
  );
};

export default Main;
