"use client";
import React from "react";
import { NavContactMeButton } from "./CommonButton";
import { Stack, Theme, Typography, useMediaQuery } from "@mui/material";

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
    label: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Stack
      style={{
        maxWidth: "100%",
        width: "100%",
        height: "45px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "60px",
        position: "absolute",
        zIndex: "10",
        paddingLeft: md ? "120px" : "90px",
        paddingRight: md ? "120px" : "90px",
      }}
    >
      <Stack>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "900",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Khun1997
        </Typography>
      </Stack>

      {!md && (
        <Stack
          style={{
            width: "541px",
            height: "22px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
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
        </Stack>
      )}

      <Stack sx={{ background: "transparent" }}>
        <a href="#footer">
          <NavContactMeButton name="Contact Me" />
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
