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
            Hi there! I&apos;m [Your Name], a data scientist specializing in
            data analytics, predictive modeling, natural language processing,
            machine learning, and AI chatbots. With a passion for unraveling
            insights from complex datasets, I&apos;m dedicated to helping
            businesses make informed decisions and stay ahead in today&apos;s
            data-driven world.
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: sm ? "14px" : "17px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            I bring a blend of technical expertise, hands-on experience, and a
            commitment to clear communication to every project. Whether
            it&apos;s uncovering hidden patterns, predicting future trends, or
            automating processes with AI, I&apos;m here to help you harness the
            full potential of your data.
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: sm ? "14px" : "17px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Let&apos;s work together to transform your data into actionable
            insights that drive real results. Get in touch, and let&apos;s start
            unlocking the power of your data today!
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
