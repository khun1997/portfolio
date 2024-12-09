"use client";
import React from "react";
import { Fab, Box, useMediaQuery, Theme } from "@mui/material";
import Image from "next/image";
import TopArrow from "@/../public/svg/top_arrow.svg";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Box>
      <Fab
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: sm ? 10 : 20,
          right: sm ? 10 : 20,
          zIndex: 1200,
          backgroundColor: "#4FC3F7",
          width: sm ? 40 : 56,
          height: sm ? 40 : 56,
          "&:hover": {
            backgroundColor: "#0288d1",
            animation: "jump 0.5s ease-in-out",
          },
          animation: "jump 2s ease-in-out infinite",
        }}
        aria-label="scroll to top"
      >
        <Image
          src={TopArrow}
          alt="top-arrow"
          width={sm ? 20 : 24}
          height={sm ? 20 : 24}
        />
      </Fab>

      <style jsx global>{`
        @keyframes jump {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
};

export default ScrollToTop;
