"use client";
import React from "react";
import { NavContactMeButton } from "./CommonButton";
import { Typography } from "@mui/material";

type Props = {};

export const MenuLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Resume",
    href: "#resume",
  },
];

const Navbar = (props: Props) => {
  return (
    <div
      style={{
        width: "1271px",
        height: "45px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: "0px 10px",
        marginTop: "60px",
        position: "absolute",
        zIndex: "10",
        // border: "1px solid red",
      }}
    >
      <div>
        {" "}
        <Typography sx={{ fontSize: "16px", fontWeight: "900" }}>
          Khun1997
        </Typography>
      </div>
      <div
        style={{
          width: "541px",
          height: "22px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          //   gap: "30px",
          //   border: "1px solid yellow",
        }}
      >
        {MenuLinks.map((link) => (
          <a
            href={link.href}
            key={link.href}
            style={{
              fontFamily: "Montserrat, sans-serif",
              textDecoration: "none",
              fontSize: "16px",
            }}
            className="nav-link"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div>
        <NavContactMeButton name="Contact Me" />
      </div>
    </div>
  );
};

export default Navbar;
