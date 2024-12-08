import { Button, Stack, Theme, Typography, useMediaQuery } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import DetailArrow from "@/../public/svg/detail_arrow.svg";

type Props = {
  id: number;
  name: string;
  description: string;
  image?: StaticImageData | string | null;
};

const ProjectCard = ({ id, description, name, image }: Props) => {
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Stack
      key={id}
      sx={{
        width: "100%",
        maxWidth: "354px",
        height: "297px",
        border: "0.5px solid #787777",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "13px",
        backgroundImage:
          "linear-gradient(to right, #1C1C1C 0%,#1c1c1c76 50%, #05050565 100%)",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        transition: "transform 0.3s ease-in-out",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",

        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0px 8px 16px rgba(98, 97, 97, 0.2)",
        },

        "&:hover .detail-arrow": {
          opacity: 1,
          visibility: "visible",
        },
      }}
    >
      {image ? (
        <Stack
          sx={{
            width: "354px",
            height: "198px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "9px",
            overflow: "hidden",
          }}
        >
          <Image src={image} alt={`${name} logo`} width={354} height={198} />
        </Stack>
      ) : (
        <Typography sx={{ color: "#E1E1E1", fontSize: "14px" }}>
          No Image Available
        </Typography>
      )}

      <Stack sx={{ padding: "0px 10px", position: "relative" }}>
        <Typography
          sx={{
            color: "#E1E1E1",
            fontSize: sm ? "13px" : "15px",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            color: "#E1E1E1",
            fontSize: sm ? "11px" : "13px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {description}
        </Typography>

        <Button
          className="detail-arrow"
          sx={{
            position: "absolute",
            bottom: 0,
            right: 2,
            opacity: 0,
            visibility: "hidden",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
          }}
        >
          <Image src={DetailArrow} alt="detail arrow" />
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProjectCard;
