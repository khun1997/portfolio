import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Stack,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  Theme,
  CircularProgress,
  Snackbar,
  SnackbarContent,
} from "@mui/material";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const md = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "kkhun531@gmail.com",
          subject: `New message from ${data.name}`,
          body: `<strong>Name:</strong> ${data.name}<br><strong>Email from:</strong> ${data.email}<br><strong>Message:</strong> ${data.message}`,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        reset();
        setIsLoading(false);

        setSuccessMessage("Your email has been sent successfully!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
      } else {
        throw new Error(result.error || "Error sending email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setIsLoading(false);

      setErrorMessage(
        "There was an error sending the email. Please try again later."
      );
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Stack
      id="contact"
      sx={{
        width: "100%",
        height: md ? "auto" : "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        mt: md ? "100px" : "0px",
        px: sm ? 2 : 5,
      }}
    >
      <Stack
        sx={{
          width: md ? "100%" : "696px",
          height: "auto",
          padding: sm ? "10px 15px" : "20px",
        }}
      >
        <Stack sx={{ width: "100%" }}>
          <Typography
            sx={{
              fontSize: sm ? "28px" : "45px",
              fontWeight: "bold",
              fontFamily: "Poppins, sans-serif",
              color: "#E1E1E1",
            }}
          >
            Get In Touch
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
            Let&apos;s work together
          </Typography>
        </Stack>

        {errorMessage && (
          <Typography color="error" sx={{ marginBottom: "10px" }}>
            {errorMessage}
          </Typography>
        )}

        <Stack
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          flexGrow={1}
          mb={5}
          sx={{
            gap: sm ? "20px" : "30px",
            mt: "20px",
            width: "100%",
          }}
        >
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                fullWidth
                placeholder="Your Name"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="example@gmail.com"
                variant="outlined"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />

          <Controller
            name="message"
            control={control}
            rules={{ required: "Message is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                fullWidth
                multiline
                placeholder="Message"
                error={!!errors.message}
                helperText={errors.message?.message}
              />
            )}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              color: "black",
              border: "1px solid #4FC3F7",
              backgroundColor: "#ffffff",
              fontSize: sm ? "12px" : "14px",
              fontWeight: "bold",
              mt: sm ? "15px" : "16px",
              textTransform: "none",
              transition:
                "background 1s ease-in-out, border-color 1s ease-in-out, color 1s ease-in-out, box-shadow 1s ease-in-out",

              "&:hover": {
                background:
                  "linear-gradient(to right, #4FC3F7 0%, #ffffff 100%)",
                borderColor: "orange",
                color: "black",
                boxShadow: "0px 4px 10px rgba(79, 195, 247, 0.5)",
              },
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} sx={{ color: "#4FC3F7" }} />
            ) : (
              "Get in Touch"
            )}
          </Button>
        </Stack>
      </Stack>

      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        sx={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "auto",
          maxWidth: "400px",
        }}
      >
        <SnackbarContent
          sx={{
            backgroundColor: "#4FC3F7",
            color: "black",
            borderRadius: "5px",
            padding: "10px 20px",
            fontWeight: "bold",
            fontSize: "14px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          message={
            snackbarSeverity === "success" ? successMessage : errorMessage
          }
        />
      </Snackbar>
    </Stack>
  );
};

export default ContactSection;
