"use client";

import { useEffect, useRef } from "react";

interface Props {
  /** Color variant: "amber" for primary sections, "muted" for alternate bg sections */
  variant?: "amber" | "muted";
}

export default function AnimatedBg({ variant = "amber" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const isDark =
      document.documentElement.classList.contains("dark");
    const baseAlpha = isDark ? 0.08 : 0.15;

    const draw = () => {
      time += 0.005;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      // Three orbiting gradient blobs
      const blobs = [
        { cx: 0.3, cy: 0.5, r: 0.5, speed: 0.3, drift: 0 },
        { cx: 0.7, cy: 0.4, r: 0.4, speed: 0.5, drift: 1.2 },
        { cx: 0.5, cy: 0.7, r: 0.35, speed: 0.4, drift: 2.5 },
      ];

      for (const blob of blobs) {
        const x =
          w * (blob.cx + Math.sin(time * blob.speed + blob.drift) * 0.15);
        const y =
          h * (blob.cy + Math.cos(time * blob.speed * 0.7 + blob.drift) * 0.15);
        const r = Math.min(w, h) * blob.r;

        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, `rgba(245, 158, 11, ${baseAlpha * 2})`);
        grad.addColorStop(0.5, `rgba(251, 146, 60, ${baseAlpha})`);
        grad.addColorStop(1, "rgba(245, 158, 11, 0)");

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
        ctx.globalCompositeOperation = "screen";
      }
      ctx.globalCompositeOperation = "source-over";

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
