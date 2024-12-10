"use client";
import React from "react";
import { Stack, Typography, Button } from "@mui/material";
// import Image from "next/image";
import { ProjecType } from "./projectData";
import { useRouter } from "next/navigation";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import LeftArrow from "@/../public/svg/left-arrow.svg";
import RightArrow from "@/../public/svg/right-arrow.svg";

interface ProjectDetailProps {
  project: ProjecType;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const router = useRouter();

  const handleBack = () => {
    router.replace("/#projects");
  };

  const {
    name,
    description,
    mainImage,
    images,
    documentation,
    website,
    techStack,
  } = project;

  const SlideImg = () => {
    return (
      <Slide
        // duration={0} // Faster slide time
        infinite={true}
        arrows={true}
        prevArrow={
          <Image
            src={LeftArrow}
            alt="right arrow"
            style={{ marginLeft: "20px" }}
          />
        }
        nextArrow={
          <Image
            src={RightArrow}
            alt="right arrow"
            style={{ marginRight: "20px" }}
          />
        }
        indicators={(index) => (
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: index! % 2 === 0 ? "blue" : "green",
              margin: "0 5px",
              display: "inline-block",
              cursor: "pointer",
            }}
          />
        )}
      >
        {images && images.length > 0 ? (
          images.map((img, index) => (
            <Stack
              key={index}
              className="each-slide-effect"
              // style={{ width: "100%", height: "100%" }}s
            >
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                // width={1200}
                // height={500}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                  // border: "1px solid yellow",
                }}
              />
            </Stack>
          ))
        ) : (
          <div>No images available</div>
        )}
      </Slide>
    );
  };

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        padding: "20px 40px",
        textAlign: "start",
        border: "1px solid yellow",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          border: "1px solid red",
        }}
      >
        <Button onClick={handleBack}>Back</Button>
      </Stack>

      {/* Image Carousel using react-slideshow-image */}
      <Stack sx={{ padding: "0px 30px", width: "100%", height: "100%" }}>
        <SlideImg />
        {/* {images?.map((data)=>{
          return (
            <Image src={data.}/>
          )
        })} */}
      </Stack>

      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#E1E1E1" }}>
        {name}
      </Typography>

      {website && (
        <Button
          onClick={() => window.open(website, "_blank")}
          sx={{ marginTop: "20px", color: "#E1E1E1" }}
        >
          Visit Website
        </Button>
      )}

      <Typography sx={{ color: "#E1E1E1" }}>{description}</Typography>

      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", marginTop: "20px", color: "#E1E1E1" }}
      >
        Tech Stack
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center">
        {techStack.map((tech, index) => (
          <Typography
            key={index}
            sx={{
              padding: "5px 10px",
              backgroundColor: "#333",
              color: "#E1E1E1",
              borderRadius: "5px",
            }}
          >
            {tech}
          </Typography>
        ))}
      </Stack>

      {documentation && documentation.length > 0 && (
        <>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginTop: "20px", color: "#E1E1E1" }}
          >
            Documentation
          </Typography>
          <Stack spacing={2} sx={{ textAlign: "left", paddingX: "20px" }}>
            {documentation.map((doc) => (
              <Typography key={doc.id} sx={{ color: "#E1E1E1" }}>
                {doc.text}
              </Typography>
            ))}
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default ProjectDetail;
