"use client";
import React from "react";
import HomeBg from "@/../public/home-bg.svg";
import Profile from "@/../public/svg/profile.svg";
import Image from "next/image";
import { DownloadMe } from "@/components/common/CommonButton";
import { Stack, Theme, Typography, useMediaQuery } from "@mui/material";
import ScrollToTop from "@/components/common/ScrollToTop";

const HomeSection = () => {
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const lg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  return (
    <Stack
      id="home"
      style={{
        width: "100vw",
        height: lg ? "auto" : "100vh",
        marginTop: md ? "0px" : lg ? "200px" : "initial",
        display: "flex",
        justifyContent: lg ? "center" : "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        gap: lg ? "0px" : "70px",
        textAlign: "center",
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
          transform: "translate(-50%, -50%)",
        }}
      />

      <Stack
        sx={{
          width: "700px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          // border: "1px solid yellow",
          gap: "6px",
          padding: "0px 20px",
          // marginTop: "50px",
        }}
      >
        <Typography
          sx={{
            fontSize: sm ? "35px" : "63px",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Khun Ye Aung
        </Typography>

        <Typography
          style={{
            textAlign: "center",
            fontSize: sm ? "17px" : "26px",
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
          &quot;As a passionate frontend web developer, with expertise in
          JavaScript, ReactJs, NextJs, and modern web frameworks, I thrive on
          the challenges of creating intuitive, responsive designs and building
          seamless user experiences that drive engagement and innovation.&quot;
        </Typography>

        <Stack sx={{ marginTop: "30px" }}>
          <DownloadMe name="Contact Me" />
        </Stack>
      </Stack>

      {!lg && (
        <Stack
          sx={{
            width: "342px",
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
      )}

      <ScrollToTop />
    </Stack>
  );
};

export default HomeSection;
