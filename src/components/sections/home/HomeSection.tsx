"use client";
import React from "react";
import HomeBg from "@/../public/home-bg.svg";
import Image from "next/image";
import { DownloadMe } from "@/components/common/CommonButton";

type Props = {};

const HomeSection = (props: Props) => {
  return (
    <div
      id="home"
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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

      <div></div>
      <DownloadMe name="Contact Me" />
    </div>
  );
};

export default HomeSection;
