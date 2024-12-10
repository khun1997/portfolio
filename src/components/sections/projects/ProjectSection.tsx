"use client";
import React, { useState } from "react";
import { Stack, Typography, useMediaQuery, Theme } from "@mui/material";
import { motion, AnimatePresence } from "motion/react";
import { SkillNavButton } from "@/components/common/CommonButton";
import { projectsData } from "./projectData";
import ProjectNavBar, { ProjectType } from "./ProjectNavBar";
import ProjectCard from "./ProjectCard";

const SkillSection = () => {
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const lg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  const [selectedCategory, setSelectedCategory] = useState<ProjectType>("All");
  const [expanded, setExpanded] = useState(false);

  const filteredTechStack = projectsData.filter((item) =>
    selectedCategory === "All" ? true : item.type === selectedCategory
  );

  const itemsToDisplay = expanded
    ? filteredTechStack
    : filteredTechStack.slice(0, 3);

  const showToggleButton = filteredTechStack.length > 3;

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  //need to go detail and github show
  return (
    <Stack
      id="projects"
      sx={{
        width: "100%",
        height: expanded ? "auto" : lg ? "auto" : "auto",

        padding: sm ? "16px" : "32px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: md ? "100px" : "0px",
        gap: sm ? "24px" : "40px",
      }}
    >
      <Stack
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          sx={{
            fontSize: sm ? "28px" : md ? "35px" : "45px",
            fontWeight: "bold",
            fontFamily: "Poppins, sans-serif",
            textAlign: "center",
            color: "#E1E1E1",
          }}
        >
          Projects
        </Typography>

        <Typography
          sx={{
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

      <ProjectNavBar
        selectedCategory={selectedCategory}
        onCategoryChange={(category: ProjectType) => {
          setSelectedCategory(category);
          setExpanded(false);
        }}
      />

      <motion.div
        layout
        style={{
          width: "100%",
          maxWidth: "1114px",
          display: "flex",
          flexWrap: "wrap",
          gap: sm ? "40px" : "24px",
          justifyContent: "center",
          marginTop: sm ? "24px" : "35px",
          padding: sm ? "0 8px" : "0",
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
              <ProjectCard
                id={data.id}
                name={data.name}
                description={data.description}
                mainImage={data.mainImage}
                images={data.images}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {showToggleButton && (
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: sm ? "16px" : "20px",
          }}
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
