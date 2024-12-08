import { Stack, Theme, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import SkillCard from "./SkillCard";
import { techStackData } from "./techStackData";

const SkillSection = () => {
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Stack
      id="skills"
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 20px",
        // border: "1px solid red",
      }}
    >
      <Stack
        sx={{
          // width: "921px",
          // height: "100vh",
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // textAlign: "center",
          // border: "1px solid green",
          flexDirection: "column",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            // height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // textAlign: "center",
            // border: "1px solid pink",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontSize: sm ? "35px" : "45px",
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            My Tech Stack
          </Typography>

          <Typography
            style={{
              textAlign: "center",
              fontSize: sm ? "12px" : "14px",
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
            Technologies I’ve been working with recently
          </Typography>
        </Stack>

        <Stack
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: sm ? "16px" : "24px",
            justifyContent: "center",
            alignItems: "center",
            // border: "1px solid yellow",
            marginTop: "53px",
          }}
        >
          {techStackData.map((data) => {
            return (
              <SkillCard
                id={data.id}
                key={data.id}
                name={data.name}
                description={data.description}
                image={data.image}
              />
            );
          })}
        </Stack>

        <Stack sx={{ marginTop: "40px" }}>
          {/* <MainButton name="Download Me" /> */}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SkillSection;
