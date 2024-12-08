import { Stack, useMediaQuery, Theme } from "@mui/material";
import React from "react";

const Resume = () => {
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Stack
      id="resume"
      style={{
        width: "100vw",
        height: sm ? "auto" : "100vh",
        marginTop: sm ? "100px" : "0px",
      }}
    >
      Resumee
    </Stack>
  );
};

export default Resume;
