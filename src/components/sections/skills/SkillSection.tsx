"use client";
import React, { useState } from "react";
import { Stack, Typography, useMediaQuery, Theme } from "@mui/material";
import SkillCard from "./SkillCard";
import { techStackData } from "./techStackData";
import SkillNavBar, { SkillType } from "./SkillNavBar";
import { SkillNavButton } from "@/components/common/CommonButton";

const SkillSection = () => {
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const [selectedCategory, setSelectedCategory] = useState<SkillType>("All");
  const [expanded, setExpanded] = useState(false);

  const filteredTechStack = techStackData.filter((item) =>
    selectedCategory === "All" ? true : item.type === selectedCategory
  );

  const itemsToDisplay = expanded
    ? filteredTechStack
    : filteredTechStack.slice(0, 6);

  const showToggleButton = filteredTechStack.length > 6;

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Stack
      id="skills"
      sx={{
        width: "100%",
        padding: "20px 20px",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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

        <SkillNavBar
          selectedCategory={selectedCategory}
          onCategoryChange={(category: SkillType) => {
            setSelectedCategory(category);
            setExpanded(false);
          }}
        />

        <Stack
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: sm ? "16px" : "24px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "53px",
          }}
        >
          {itemsToDisplay.map((data) => (
            <SkillCard
              id={data.id}
              key={data.id}
              name={data.name}
              description={data.description}
              image={data.image}
            />
          ))}
        </Stack>

        {showToggleButton && (
          <Stack
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <SkillNavButton
              name={expanded ? "Show Less" : "View More"}
              onClick={handleToggle}
            />
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default SkillSection;
