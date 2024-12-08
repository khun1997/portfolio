import { Stack, useMediaQuery, Theme } from "@mui/material";
import React from "react";

const Footeer = () => {
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Stack
      id="footeer"
      style={{
        width: "100vw",
        height: sm ? "auto" : "242px",
        marginTop: sm ? "100px" : "0px",
      }}
    >
      Footer
    </Stack>
  );
};

export default Footeer;
