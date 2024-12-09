"use client";
import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            width: "100%",
            borderRadius: "10px",
            color: "white",
            fontSize: "14px",
            border: "0.5px solid #D6DDED",
            fontFamily: "Montserrat, sans-serif",

            "& fieldset": {
              // border: "0.5px solid red",
            },
            "&:hover fieldset": {
              borderColor: "#4FC3F7",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#4FC3F7",
            },
          },
          "& .MuiInputLabel-root": {
            color: "white",
            "&.Mui-focused": {
              color: "white",
            },
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          // borderBottomWidth: 0.5,
          // borderColor: "#DFDACE",
          borderColor: "#787777",
          // background: "red",
          height: "0.1px",
        },
      },
    },
  },
});

export default defaultTheme;

// const defaultTheme = createTheme({
//   palette: {
//     mode: "dark",
//     text: {
//       primary: "#444444",
//       secondary: "#858585",
//     },
//     primary: {
//       main: "#EFAF30",
//     },
//     secondary: {
//       main: "#6D4900",
//     },
//     background: {
//       paper: "#FFF2DA",
//     },
//     info: {
//       main: "#653613",
//     },
//     error: {
//       main: "#CC2933",
//     },
//     action: {
//       disabled: "#9D9D9D",
//       disabledBackground: "#EBEBEB",
//     },
//   },
//   typography: {
//     // fontFamily: "Poppins, sans-serif",
//     // color: "white",
//   },
//   components: {
//     // MuiContainer: {
//     //   defaultProps: {
//     //     maxWidth: "lg",
//     //   },
//     // },
//     // MuiAppBar: {
//     //   defaultProps: {
//     //     position: "sticky",
//     //     sx: { bgcolor: "white" },
//     //     elevation: 0,
//     //   },
//     //   styleOverrides: {
//     //     root: {
//     //       height: 75,
//     //       display: "flex",
//     //       justifyContent: "center",
//     //       backgroundColor: "white",
//     //       borderRadius: 0,
//     //       borderBottom: "0.5px solid #D6D6D6",
//     //     },
//     //   },
//     // },
//     // MuiFormHelperText: {
//     //   defaultProps: {
//     //     sx: {
//     //       mx: 0,
//     //     },
//     //   },
//     // },
//     // MuiPaper: {
//     //   defaultProps: { elevation: 0 },
//     //   styleOverrides: {
//     //     root: {
//     //       borderRadius: 18,
//     //     },
//     //   },
//     // },
//     // MuiButton: {
//     //   styleOverrides: {
//     //     root: ({ ownerState }) => ({
//     //       textTransform: "none",
//     //       color: "#6D4900",
//     //       ...(ownerState.variant === "contained" &&
//     //         ownerState.color === "primary" && {
//     //           padding: "24px 40px",
//     //           borderRadius: 92,
//     //           fontSize: 16,
//     //           fontWeight: 700,
//     //           // chg hover container color
//     //           "&:hover": {
//     //             background: "#f9d285",
//     //           },
//     //         }),
//     //     }),
//     //   },
//     // },
//     // MuiTextField: {
//     //   styleOverrides: {
//     //     root: {
//     //       "& .MuiOutlinedInput-root": {
//     //         borderRadius: "16px",
//     //         color: "#444444",
//     //         "& fieldset": {
//     //           borderColor: "gray",
//     //         },
//     //         "&:hover fieldset": {
//     //           borderColor: "#999999",
//     //         },
//     //         "&.Mui-focused fieldset": {
//     //           borderColor: "#444444",
//     //         },
//     //       },
//     //       "& .MuiInputLabel-root": {
//     //         color: "#444444",
//     //         "&.Mui-focused": {
//     //           color: "#444444",
//     //         },
//     //       },
//     //     },
//     //   },
//     // },
//     // MuiDivider: {
//     //   styleOverrides: {
//     //     root: {
//     //       borderBottomWidth: 0.5,
//     //       borderColor: "#DFDACE",
//     //     },
//     //   },
//     // },
//     // MuiToggleButtonGroup: {
//     //   styleOverrides: {
//     //     grouped: ({ theme }) => ({
//     //       "&.MuiToggleButton-root": {
//     //         width: theme.breakpoints.down("sm") ? "100%" : 70,
//     //         // height: breakpoints.down("sm") ? 35 : 55,
//     //         fontSize: 16,
//     //         fontWeight: 700,
//     //         borderRadius: 18,
//     //         border: 0,
//     //         marginLeft: 10,
//     //         backgroundColor: "#EAE4D6",
//     //       },
//     //     }),
//     //   },
//     // },
//     // MuiToggleButton: {
//     //   styleOverrides: {
//     //     root: {
//     //       marginLeft: 10,
//     //       "&.Mui-selected": {
//     //         color: "white",
//     //         backgroundColor: "#997C43 !important",
//     //       },
//     //     },
//     //   },
//     // },
//     // MuiMenuItem: {
//     //   styleOverrides: {
//     //     root: {
//     //       whiteSpace: "unset",
//     //       wordBreak: "break-all",
//     //     },
//     //   },
//     // },
//     // MuiLinearProgress: {
//     //   styleOverrides: {
//     //     root: {
//     //       backgroundColor: "#D8CDB7 !important",
//     //     },
//     //     bar: {
//     //       backgroundColor: "#997C43 !important",
//     //     },
//     //   },
//     // },
//     // MuiInputLabel: {
//     //   styleOverrides: {
//     //     root: {
//     //       color: "#444444", // Example: Default label color
//     //       "&.Mui-focused": {
//     //         color: "#444444", // Example: Focused label color
//     //       },
//     //     },
//     //   },
//     // },
//     // MuiFormControl: {
//     //   styleOverrides: {
//     //     root: {
//     //       color: "#444444",
//     //       "& .MuiOutlinedInput-root": {
//     //         color: "#444444",
//     //         "& fieldset": {
//     //           borderColor: "gray",
//     //         },
//     //         "&:hover fieldset": {
//     //           borderColor: "#999999",
//     //         },
//     //         "&.Mui-focused fieldset": {
//     //           borderColor: "#444444",
//     //         },
//     //       },
//     //     },
//     //   },
//     // },
//   },
// });

// export default defaultTheme;
