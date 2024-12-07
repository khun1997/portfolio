import React, { useState } from "react";
import { Drawer, Button, Box, Stack } from "@mui/material";
import Image from "next/image";
import Humberger from "@/../public/svg/humberger.svg";
import Close from "@/../public/svg/close.svg";
import { MenuLinks } from "./Navbar";

const TopRightDrawer = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <Box>
      {!open && (
        <Button
          onClick={openDrawer}
          sx={{
            position: "absolute",
            top: 17,
            right: 17,
            zIndex: 100,
          }}
        >
          <Image src={Humberger} alt="humberger" />
        </Button>
      )}

      <Drawer
        anchor="right"
        open={open}
        onClose={openDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: "160px",
            height: "100%",
            top: "0",
            right: "0",
            borderRadius: "0px 0px 8px 8px",
            boxShadow: 3,
            background: "linear-gradient(to bottom, #4fc3f7 0%, #ffffff 100%)", // Gradient background
          },
        }}
      >
        <Box sx={{ padding: 2 }}>
          <Button
            onClick={closeDrawer}
            sx={{
              position: "absolute",
              top: 16,
              right: 10,
              zIndex: 100,
            }}
          >
            <Image src={Close} alt="Close" />
          </Button>

          <Stack
            sx={{
              gap: "40px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "90px",
            }}
          >
            {MenuLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "16px",
                }}
                className="humberger-link"
                onClick={closeDrawer}
              >
                {link.label}
              </a>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default TopRightDrawer;
