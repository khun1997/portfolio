import { SkillNavButton } from "@/components/common/CommonButton";
import { Stack } from "@mui/material";
import React from "react";

export type ProjectType =
  | "All"
  | "LMS"
  | "Landing"
  | "Volunteer"
  | "Ekyc"
  | "Portfolio";

const categories: ProjectType[] = [
  "All",
  "LMS",
  "Landing",
  "Volunteer",
  "Ekyc",
  "Portfolio",
];

type ProjectNavBarProps = {
  selectedCategory: ProjectType;
  onCategoryChange: (category: ProjectType) => void;
};

const ProjectNavBar = ({
  selectedCategory,
  onCategoryChange,
}: ProjectNavBarProps) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        width: "100%",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        marginTop: "23px",
      }}
    >
      {categories.map((category) => (
        <SkillNavButton
          name={category}
          key={category}
          onClick={() => onCategoryChange(category)}
          isSelected={selectedCategory === category}
        >
          {category}
        </SkillNavButton>
      ))}
    </Stack>
  );
};

export default ProjectNavBar;
