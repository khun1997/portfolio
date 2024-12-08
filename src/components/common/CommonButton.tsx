"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

interface ButtonType {
  name: string;
  onClick?: () => void;
  isSelected?: boolean;
  children?: React.ReactNode;
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
  cursor: "pointer",
  transition:
    "background 1s ease-in-out, border-color 1s ease-in-out, color 1s ease-in-out, box-shadow 1s ease-in-out",

  "&:hover": {
    background: "linear-gradient(to right, #4FC3F7 0%, #ffffff 100%)",
    borderColor: "orange",
    color: "black",
    boxShadow: "0px 4px 10px rgba(79, 195, 247, 0.5)",
  },

  "&:active": {
    background: "linear-gradient(to right, #4FC3F7 0%, #ffffff 100%)",
    borderColor: "orange",
    boxShadow: "0px 2px 5px rgba(79, 195, 247, 0.4)",
  },

  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(79, 195, 247, 0.5)",
  },
});

//need to check container classname

export const DownloadMe: React.FC<ButtonType> = ({ name }) => {
  return (
    <Primary className="container">
      <Typography
        sx={{ fontSize: "15px", fontFamily: "Montserrat, sans-serif" }}
      >
        {name}
      </Typography>
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
      <Typography sx={{ fontSize: "15px", fontFamily: "Poppins, sans-serif" }}>
        {name}
      </Typography>
    </Main>
  );
};

const Nav = styled(Primary)({
  width: "126px",
  height: "43px",
  borderRadius: "9px",
});

export const NavContactMeButton: React.FC<ButtonType> = ({ name }) => {
  return (
    <Nav>
      <Typography
        sx={{ fontSize: "15px", fontFamily: "Montserrat, sans-serif" }}
      >
        {name}
      </Typography>
    </Nav>
  );
};

const SkillNav = styled(Button)<{ isSelected?: boolean }>(({ isSelected }) => ({
  width: "110px",
  height: "43px",
  borderRadius: "20px",
  background: isSelected
    ? "linear-gradient(to right, #4FC3F7 0%, #ffffff 100%)"
    : "transparent",
  border: isSelected ? "1px solid orange" : "1px solid #4FC3F7",
  color: isSelected ? "black" : "white",
  textTransform: "capitalize",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    background: "linear-gradient(to right, #4FC3F7 0%, #ffffff 100%)",
    borderColor: "orange",
    color: "black",
    boxShadow: "0px 4px 10px rgba(79, 195, 247, 0.5)",
  },
}));

export const SkillNavButton: React.FC<ButtonType> = ({
  name,
  onClick,
  isSelected,
  children,
}) => {
  return (
    <SkillNav onClick={onClick} isSelected={isSelected}>
      <Typography
        sx={{ fontSize: "15px", fontFamily: "Montserrat, sans-serif" }}
      >
        {children || name}
      </Typography>
    </SkillNav>
  );
};
