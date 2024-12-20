"use client";
import React from "react";
import Image from "next/image";
import HomeBg from "@/../public/home-bg.svg";
import Profile from "@/../public/image/profile.png";
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
        // justifyContent: lg ? "center" : "space-evenly",
        justifyContent: lg ? "center" : "center",
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
          width: "100%",
          height: "auto",
          position: "absolute",
          zIndex: "-10",
          top: "70%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <Stack
        sx={{
          // width: "700px",
          width: "600px",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          // border: "1px solid yellow",
          // gap: "6px",
          gap: lg ? "6px" : "16px",
          padding: "0px 20px",
          marginBottom: "50px",
        }}
      >
        <Typography
          sx={{
            fontSize: sm ? "35px" : "63px",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            color: "#E1E1E1",
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
            color: "#E1E1E1",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          ""As a passionate frontend web developer, with expertise in
          JavaScript, ReactJs, NextJs and modern web frameworks, I thrive on the
          challenges of creating intuitive, responsive designs and building
          seamless user experiences that drive engagement and innovation.""
        </Typography>

        <Stack sx={{ marginTop: "30px" }}>
          <a href="#footer">
            <DownloadMe name="Contact Me" />
          </a>
        </Stack>
      </Stack>

      {!lg && (
        <Stack
          sx={{
            width: "330px",
            height: "330px",
            marginBottom: "65px",
            // border: "1px solid #4FC3F7",
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
