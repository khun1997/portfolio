import { SkillNavButton } from "@/components/common/CommonButton";
import { Stack } from "@mui/material";
import React from "react";

export type SkillType = "All" | "Language" | "Framework" | "DataBase" | "UI";

const categories: SkillType[] = [
  "All",
  "Language",
  "Framework",
  "DataBase",
  "UI",
];

type SkillNavBarProps = {
  selectedCategory: SkillType;
  onCategoryChange: (category: SkillType) => void;
};

const SkillNavBar = ({
  selectedCategory,
  onCategoryChange,
}: SkillNavBarProps) => {
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

export default SkillNavBar;
