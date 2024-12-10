import {
  Stack,
  useMediaQuery,
  Theme,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Gmail from "@/../public/svg/gmail.svg";
import Linkedin from "@/../public/svg/social-media/linkedin.svg";
import Facebook from "@/../public/svg/social-media/facebook.svg";
import Messenger from "@/../public/svg/social-media/messenger.svg";
import Telegram from "@/../public/svg/social-media/telegram.svg";
import Line from "@/../public/svg/social-media/line.svg";

interface SocialButton {
  id: number;
  name: string;
  img: string;
  href: string;
}

const socialButtons: SocialButton[] = [
  {
    id: 1,
    name: "LinkedIn",
    img: Linkedin,
    href: "https://www.linkedin.com/in/khun-ye-aung-29a230238/",
  },
  {
    id: 2,
    name: "Facebook",
    img: Facebook,
    href: "https://www.facebook.com/khun.yair.75",
  },
  {
    id: 3,
    name: "Messenger",
    img: Messenger,
    // href: "https://m.me/khun.yair.75",
    href: "https://www.messenger.com/t/100013220521245/",
  },
  {
    id: 4,
    name: "Telegram",
    img: Telegram,
    href: "https://t.me/khunyeaung1997",
  },
  {
    id: 5,
    name: "Line",
    img: Line,
    href: "https://line.me/ti/p/@81219978121997812199",
  },
];

const Footeer = () => {
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const lg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
  // const xl = useMediaQuery((theme: Theme) => theme.breakpoints.down("xl"));

  const currentYear = new Date().getFullYear();

  return (
    <Stack
      id="footer"
      style={{
        // width: lg ? "100%" : "1114px",
        width: "100%",
        height: md ? "auto" : "242px",
        marginTop: sm ? "100px" : "0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // border: md ? "1px solid yellow" : "",
        // marginBottom: "30px",
        // border: "1px solid red",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          flexDirection: md ? "column" : "row",
          gap: "20px",
        }}
      >
        <Stack
          sx={{
            width: lg ? "auto" : "693px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: sm ? "30px" : lg ? "40px" : "63px",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Let’s Work Together -{" "}
          </Typography>
        </Stack>

        <Button
          sx={{
            width: "310px",
            border: "0.5px solid #787777",
            gap: "5px",
            borderRadius: "10px",
          }}
        >
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNrdNllRVxZkVSzrSSlSwFKFKhjpTDvzTNlMCFGtVphkpNVtKbxnJSkBzRDgRqDrdLqcCg"
            target="_blank"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image src={Gmail} alt="gmail svg" />
            <Typography
              sx={{
                color: "#C9C9C9",
                fontSize: sm ? "16px" : "24px",
                textTransform: "none",
                marginLeft: "6px",
              }}
            >
              kkhun531@gmail.com
            </Typography>
          </a>
        </Button>
      </Stack>

      <Divider sx={{ m: sm ? "30px 0px" : "40px 0px", width: "85%" }} />

      <Stack
        sx={{
          width: "100%",
          // width: "85%",
          height: "30px",
          display: "flex",
          justifyContent: "space-between",
          padding: sm ? "0px 30px" : "0px 50px",
          alignItems: "center",
          flexDirection: "row",
          marginBottom: sm ? "20px" : lg ? "20px" : "",
        }}
      >
        <Typography sx={{ fontSize: sm ? "13px" : "16px", color: "#A9A9A9" }}>
          © {currentYear} All rights reserved.
        </Typography>

        <Stack
          sx={{
            width: sm ? "auto" : "244px",
            display: "flex",
            justifyContent: sm ? "center" : "space-evenly",
            alignItems: "center",
            flexDirection: "row",
            gap: sm ? "15px" : "18px",
          }}
        >
          {socialButtons.map((button) => (
            <a
              key={button.id}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={button.img}
                alt={button.name}
                width={sm ? "22" : "32"}
                height={sm ? "22" : "32"}
              />
            </a>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footeer;
