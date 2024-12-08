"use client";
import React from "react";
import HomeSection from "./sections/home/HomeSection";
import AboutSection from "./sections/about/AboutSection";
import SkillSection from "./sections/skills/SkillSection";
import ProjectSection from "./sections/projects/ProjectSection";
import Navbar from "./common/Navbar";
import { Stack, Theme, useMediaQuery } from "@mui/material";
import Humberger from "./common/Humberger";
import Footer from "./sections/footer/Footer";
import ContactSection from "./sections/contact/ContactSection";

const Main = () => {
  // const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Stack
      style={{
        maxWidth: "1280px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        {md ? <Humberger /> : <Navbar />}
      </Stack>
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </Stack>
  );
};

export default Main;
