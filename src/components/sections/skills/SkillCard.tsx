import { Stack, Theme, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

type Props = {
  id: number;
  name: string;
  description: string;
  image?: string | null;
};

const SkillCard = ({ id, description, name, image }: Props) => {
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Stack
      key={id}
      sx={{
        width: "100%",
        maxWidth: "289px",
        height: "174px",
        border: "0.5px solid #787777",
        borderRadius: "10px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        backgroundImage:
          "linear-gradient(to right, #1C1C1C 0%,#1c1c1c76 50%, #05050565 100%)",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        transition: "transform 0.3s ease-in-out",
        cursor: "pointer",

        "&:hover": {
          //   backgroundImage:
          //     "linear-gradient(to right, #4fc2f788 0%,#9bd9f5c7 50%, #ffffff 100%)",
          transform: "scale(1.03)", // Scale up slightly on hover
          // animation: "jump 0.5s ease-in-out", // Optional: Add custom animation
          boxShadow: "0px 8px 16px rgba(98, 97, 97, 0.2)",
        },
      }}
    >
      {image ? (
        <Stack
          sx={{
            width: "52px",
            height: "52px",
            backgroundImage:
              "linear-gradient(to right, #4fc2f788 0%,#9bd9f5c7 50%, #ffffff 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "9px",
            border: "none",
            padding: "5px",
          }}
        >
          <Image
            src={image}
            alt={`${name} logo`}
            width={44}
            height={44}
            // style={{}}
          />
        </Stack>
      ) : (
        <Typography sx={{ color: "#E1E1E1", fontSize: "14px" }}>
          No Image Available
        </Typography>
      )}
      <Typography
        sx={{
          color: "#E1E1E1",
          fontSize: sm ? "13px" : "15px",
          fontWeight: "bold",
          fontFamily: "Poppins,san-serif",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          color: "#E1E1E1",
          fontSize: sm ? "11px" : "13px",
          fontFamily: "Poppins,san-serif",
        }}
      >
        {description}
      </Typography>
    </Stack>
  );
};

export default SkillCard;
