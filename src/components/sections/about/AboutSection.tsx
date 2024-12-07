import { MainButton } from "@/components/common/CommonButton";
import React from "react";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <div id="about" style={{ width: "100vw", height: "100vh" }}>
      <MainButton name="Download Me" />
    </div>
  );
};

export default AboutSection;
