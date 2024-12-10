"use client";
import React, { useState } from "react";
import { Stack, Typography, useMediaQuery, Theme } from "@mui/material";
import { motion, AnimatePresence } from "motion/react";
import SkillCard from "./SkillCard";
import { techStackData } from "./techStackData";
import SkillNavBar, { SkillType } from "./SkillNavBar";
import { SkillNavButton } from "@/components/common/CommonButton";

const SkillSection = () => {
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

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
        // height: "100vh",
        height: expanded ? "auto" : md ? "auto" : "100vh",

        padding: "20px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: md ? "100px" : "0px",
      }}
    >
      <Stack
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          sx={{
            fontSize: sm ? "35px" : "45px",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            color: "#E1E1E1",
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

      <motion.div
        layout
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: sm ? "16px" : "24px",
          justifyContent: "center",
          marginTop: "53px",
        }}
      >
        <AnimatePresence>
          {itemsToDisplay.map((data) => (
            <motion.div
              key={data.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <SkillCard
                id={data.id}
                name={data.name}
                description={data.description}
                image={data.image}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {showToggleButton && (
        <Stack
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          <SkillNavButton
            name={expanded ? "Show Less" : "View More"}
            onClick={handleToggle}
          />
        </Stack>
      )}
    </Stack>
  );
};

export default SkillSection;
