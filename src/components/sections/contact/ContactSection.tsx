"use client";
// import { MainButton } from "@/components/common/CommonButton";
import PasswordTextField from "@/components/common/PasswordTextField";
import {
  Stack,
  Typography,
  Theme,
  useMediaQuery,
  TextField,
} from "@mui/material";
// import { Controller, SubmitHandler, useForm } from "react-hook-form";
import React from "react";
// import { Controller } from "react-hook-form";

const ContactSection = () => {
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Stack
      id="contact"
      style={{
        width: "100%",
        height: md ? "auto" : "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: md ? "100px" : "0px",
      }}
    >
      <Stack
        sx={{
          maxWidth: "696px",
          height: "710px",
          padding: "0px 20px",
          border: "1px solid red",
        }}
      >
        <Stack
          sx={{
            maxWidth: "696px",
            height: "710px",
            padding: "0px 20px",
            border: "1px solid red",
          }}
        >
          <Stack>
            <Typography
              sx={{
                fontSize: sm ? "35px" : "45px",
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Get In Touch
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
              Lets work together
            </Typography>
          </Stack>
          <Stack
            component="form"
            // onSubmit={handleSubmit(onSubmit)}
            flexGrow={1}
            mb={5}
            sx={{ gap: sm ? "23px" : "30px" }}
          >
            <Stack
              component="fieldset"
              // disabled={isLoading}
              spacing={2}
              alignItems="center"
              sx={{ border: 0 }}
            >
              {/* <Controller
              name="email"
              // control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  label="အီးမေးလ်"
                  required
                  autoComplete="off"
                  type="email"
                  variant="outlined"
                  fullWidth
                  // InputProps={{ disabled: isLoading }}
                  margin="normal"
                  // error={!!errors.email}
                  // helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              name="password"
              // control={control}
              defaultValue=""
              render={({ field }) => (
                <PasswordTextField
                  required
                  autoComplete="off"
                  label="စကားဝှက်"
                  variant="outlined"
                  fullWidth
                  // error={!!errors.password}
                  // helperText={errors.password?.message}
                />
              )}
            /> */}

              {/* <LoadingButton
              disabled={!isValid}
              type="submit"
              variant="contained"
              loading={isLoading}
            >
              အကောင့်ဝင်ရောက်မည်
            </LoadingButton> */}
            </Stack>
          </Stack>
        </Stack>

        {/* <Stack sx={{ marginTop: "40px" }}>
      {/* <Stack sx={{ marginTop: "40px" }}>
        <MainButton name="Get in Touch" />
      </Stack> */}
      </Stack>
    </Stack>
  );
};

export default ContactSection;
