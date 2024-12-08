"use client";
import {
  IconButton,
  InputAdornment,
  OutlinedTextFieldProps,
  TextField,
} from "@mui/material";
import React, { forwardRef } from "react";
import Visibility from "@/../public/svg/visibility-on.svg";
import VisibilityOff from "@/../public/svg/visibility-off.svg";
import Image from "next/image";

interface Props extends OutlinedTextFieldProps {}
export default forwardRef<HTMLDivElement, Props>(function PasswordTextField(
  { ...props },
  ref
) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <TextField
      ref={ref}
      InputProps={{
        sx: { borderRadius: 4 },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? (
                <Image src={Visibility} alt="visiblity on" />
              ) : (
                <Image src={VisibilityOff} alt="visiblity off" />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
      label="Password"
      {...props}
      type={showPassword ? "text" : "password"}
      inputProps={{
        autoComplete: showPassword ? "new-password" : "off",
      }}
    />
  );
});
