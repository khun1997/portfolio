import styles from "./page.module.css";
import Main from "@/components/Main";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack className={styles.page}>
      <Main />
    </Stack>
  );
}
