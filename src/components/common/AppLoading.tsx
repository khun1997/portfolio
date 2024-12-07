import { CircularProgress, Stack } from "@mui/material";
export default function AppLoading() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", height: "100vh" }}
    >
      <CircularProgress
        variant="indeterminate"
        style={{ color: "#4FC3F7" }}
        // color="primary"
      />
    </Stack>
  );
}
