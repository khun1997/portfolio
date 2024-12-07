"use client";
import React from "react";
import HomeBg from "@/../public/home-bg.svg";
import Profile from "@/../public/svg/profile.svg";

import Image from "next/image";
import { DownloadMe } from "@/components/common/CommonButton";
import { Stack, Typography } from "@mui/material";

type Props = {};

const HomeSection = (props: Props) => {
  return (
    <Stack
      id="home"
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        gap: "70px",
      }}
    >
      <Image
        src={HomeBg}
        alt=""
        style={{
          position: "absolute",
          zIndex: "-10",
          top: "70%",
          left: "50%",
          transform: "translate(-55%, -50%)",
        }}
      />

      <Stack
        sx={{
          width: "500px",
          display: "flex",
          // justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          // border: "1px solid yellow",
          gap: "6px",
          marginTop: "50px",
        }}
      >
        <Typography
          sx={{
            fontSize: "63px",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Khun Ye Aung
        </Typography>
        <Typography
          style={{
            textAlign: "center",
            fontSize: "26px",
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
          Frontend Web Developer
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "14px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          As a passionate data scientist, with expertise in machine learning,
          AI, and data analytics, I thrive on the challenges of exploring
          complex data landscapes and uncovering meaningful patterns that drive
          innovation
        </Typography>
        <Stack sx={{ marginTop: "30px" }}>
          <DownloadMe name="Contact Me" />
        </Stack>
      </Stack>

      <Stack
        sx={{
          width: "332px",
          height: "400px",
          border: "1px solid #4FC3F7",
        }}
      >
        <Image
          src={Profile}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            zIndex: "-10",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default HomeSection;
