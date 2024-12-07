"use client";
import AppLoading from "@/components/common/AppLoading";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { PropsWithChildren, Suspense } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return (
    // "@ts-expect-error"
    <ThemeRegistry>
      <Suspense fallback={<AppLoading />}>{children}</Suspense>
    </ThemeRegistry>
  );
}
