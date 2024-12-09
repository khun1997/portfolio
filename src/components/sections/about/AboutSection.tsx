import { MainButton } from "@/components/common/CommonButton";
import { Stack, Typography, Theme, useMediaQuery } from "@mui/material";
import React from "react";

const AboutSection = () => {
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Stack
      id="about"
      style={{
        width: "100%",
        height: md ? "auto" : "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: md ? "100px" : "0px",
      }}
    >
      <Stack sx={{ maxWidth: "840px", padding: "0px 20px" }}>
        <Stack>
          <Typography
            sx={{
              fontSize: sm ? "35px" : "45px",
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            About Me
          </Typography>

          <Typography
            style={{
              textAlign: "center",
              fontSize: sm ? "12px" : "14px",
              fontWeight: "bold",
              backgroundImage:
                "linear-gradient(to right, #4FC3F7 0%,#9bd8f5f0 50%, #ffffff 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Get to know me
          </Typography>
        </Stack>

        <Stack sx={{ gap: sm ? "23px" : "30px" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: sm ? "14px" : "17px",
              fontFamily: "Poppins, sans-serif",
              marginTop: sm ? "30px" : "40px",
            }}
          >
            Hi there! I&rsquo;m Khun Ye Aung, a frontend web developer
            specializing in creating dynamic, user-friendly web applications
            using JavaScript, TypeScript, ReactJS, NextJS, and AstroJS. With a
            solid foundation in backend technologies as well, I bring a
            full-stack approach to building scalable, high-performance websites
            and applications.
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: sm ? "14px" : "17px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            I have a passion for crafting seamless user experiences and ensuring
            optimal performance across various platforms. Whether it&rsquo;s
            developing interactive UIs, managing state with React, or optimizing
            page load times with NextJS and AstroJS, I&rsquo;m here to help you
            build fast, responsive web solutions.
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: sm ? "14px" : "17px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Combining my frontend expertise with backend knowledge, I focus on
            delivering end-to-end solutions that meet your business needs.
            Let&rsquo;s collaborate to build modern, innovative web applications
            that stand out. Reach out, and let&rsquo;s create something amazing
            together!
          </Typography>
        </Stack>
      </Stack>

      <Stack sx={{ marginTop: "40px" }}>
        <MainButton name="Download Me" />
      </Stack>
    </Stack>
  );
};

export default AboutSection;
