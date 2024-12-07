"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { Typography } from "@mui/material";

interface ButtonType {
  name: string;
}

const Primary = styled(Button)({
  width: "187px",
  height: "55px",
  fontSize: "15px",
  padding: "10px 10px",
  background: "transparent",
  border: "1px solid #4FC3F7",
  color: "white",
  borderRadius: "75px",
  textTransform: "none",
  transition: "background 0.3s ease, border-color 0.3s ease",

  "&:hover": {
    background: "linear-gradient(to right, #4FC3F7 0%, #ffffff 100%)",
    border: "1px solid orange",
    color: "black",
  },

  "&:active": {
    background: "linear-gradient(to right, #4FC3F7 0%, #ffffff 100%)",
    border: "1px solid orange",
  },

  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(79, 195, 247, .5)",
  },
});

export const DownloadMe: React.FC<ButtonType> = ({ name }) => {
  return (
    <Primary>
      <Typography sx={{ fontSize: "15px" }}>{name}</Typography>
    </Primary>
  );
};

const Main = styled(Primary)({
  width: "212px",
  height: "55px",
  borderRadius: "75px",
});

export const MainButton: React.FC<ButtonType> = ({ name }) => {
  return (
    <Main>
      <Typography sx={{ fontSize: "15px" }}>{name}</Typography>
    </Main>
  );
};

const Nav = styled(Primary)({
  width: "126px",
  height: "45px",
  borderRadius: "9px",
});

export const NavContactMeButton: React.FC<ButtonType> = ({ name }) => {
  return (
    <Nav>
      <Typography sx={{ fontSize: "15px" }}>{name}</Typography>
    </Nav>
  );
};
