import { MainButton } from "@/components/common/CommonButton";
import { Stack, Typography } from "@mui/material";
import React from "react";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <Stack
      id="about"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Stack sx={{ maxWidth: "840px" }}>
        <Stack>
          <Typography
            sx={{
              fontSize: "45px",
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            About Me
          </Typography>

          <Typography
            style={{
              textAlign: "center",
              fontSize: "14px",
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

        <Stack sx={{ gap: "30px" }}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "17px",
              fontFamily: "Poppins, sans-serif",
              marginTop: "40px",
            }}
          >
            Hi there! I'm [Your Name], a data scientist specializing in data
            analytics, predictive modeling, natural language processing, machine
            learning, and AI chatbots. With a passion for unraveling insights
            from complex datasets, I'm dedicated to helping businesses make
            informed decisions and stay ahead in today's data-driven world.
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: "17px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            I bring a blend of technical expertise, hands-on experience, and a
            commitment to clear communication to every project. Whether it's
            uncovering hidden patterns, predicting future trends, or automating
            processes with AI, I'm here to help you harness the full potential
            of your data.
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: "17px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Let's work together to transform your data into actionable insights
            that drive real results. Get in touch, and let's start unlocking the
            power of your data today!
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
