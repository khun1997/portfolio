import React from "react";
import { Fab, Box } from "@mui/material";
import Image from "next/image";
import TopArrow from "@/../public/svg/top_arrow.svg";

const ScrollToTop = () => {
  // Function to scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  return (
    <Box>
      {/* Scroll to top button */}
      <Fab
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1200, // Make sure the button is on top of other elements
          backgroundColor: "#4FC3F7", // You can change the button color
          "&:hover": {
            backgroundColor: "#0288d1", // Hover color
            animation: "jump 0.5s ease-in-out", // Jumping effect on hover
          },
          animation: "jump 2s ease-in-out infinite", // Make the jump animation infinite
        }}
        aria-label="scroll to top"
      >
        <Image src={TopArrow} alt="top-arrow" />
      </Fab>

      <style jsx global>{`
        @keyframes jump {
          0% {
            transform: translateY(0); /* Normal position */
          }
          50% {
            transform: translateY(-10px); /* Move the button up */
          }
          100% {
            transform: translateY(0); /* Return to original position */
          }
        }
      `}</style>
    </Box>
  );
};

export default ScrollToTop;
