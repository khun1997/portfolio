"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  phase: number;
}

interface Props {
  /** Color variant: "amber" for primary sections, "muted" for alternate bg sections */
  variant?: "amber" | "muted";
  /** Scene type: "blobs" (default) or "sunset" */
  scene?: "blobs" | "sunset";
}

export default function AnimatedBg({
  variant = "amber",
  scene = "blobs",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let time = 0;
    let stars: Star[] = [];

    const isDark = document.documentElement.classList.contains("dark");

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.scale(dpr, dpr);

      if (scene === "sunset") {
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        stars = Array.from({ length: 60 }, () => ({
          x: Math.random() * w,
          y: Math.random() * h * 0.7,
          size: Math.random() * 1.8 + 0.4,
          speed: Math.random() * 0.3 + 0.1,
          opacity: Math.random() * 0.6 + 0.2,
          phase: Math.random() * Math.PI * 2,
        }));
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const drawBlobs = () => {
      time += 0.005;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      const baseAlpha = isDark ? 0.08 : 0.15;
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
    };

    const drawSunset = () => {
      time += 0.01;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      // --- Sky gradient ---
      const skyGrad = ctx.createLinearGradient(0, 0, 0, h * 0.75);
      if (isDark) {
        skyGrad.addColorStop(0, "#0f0f23");
        skyGrad.addColorStop(0.3, "#1a1040");
        skyGrad.addColorStop(0.55, "#4a1942");
        skyGrad.addColorStop(0.75, "#7a2e1a");
      } else {
        skyGrad.addColorStop(0, "#1a1a4e");
        skyGrad.addColorStop(0.3, "#3d1a6e");
        skyGrad.addColorStop(0.55, "#b84a3a");
        skyGrad.addColorStop(0.75, "#e88a2a");
      }
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, h * 0.75);

      // --- Sun ---
      const sunX = w * (0.5 + Math.sin(time * 0.1) * 0.15);
      const sunY = h * 0.65;
      const sunR = Math.min(w, h) * 0.08;

      // Sun glow
      const glowGrad = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunR * 4);
      glowGrad.addColorStop(0, `rgba(255, 200, 100, ${isDark ? 0.6 : 0.8})`);
      glowGrad.addColorStop(0.3, `rgba(255, 160, 50, ${isDark ? 0.3 : 0.4})`);
      glowGrad.addColorStop(0.6, `rgba(255, 100, 30, ${isDark ? 0.15 : 0.2})`);
      glowGrad.addColorStop(1, "rgba(255, 100, 30, 0)");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, w, h);

      // Sun body
      const sunBody = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunR);
      sunBody.addColorStop(0, "#fff5e6");
      sunBody.addColorStop(0.4, "#ffcc44");
      sunBody.addColorStop(0.8, "#ff8822");
      sunBody.addColorStop(1, "rgba(255, 100, 30, 0)");
      ctx.fillStyle = sunBody;
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunR, 0, Math.PI * 2);
      ctx.fill();

      // --- Stars ---
      for (const star of stars) {
        star.y -= star.speed;
        if (star.y < -10) {
          star.y = h * 0.65;
          star.x = Math.random() * w;
        }

        const twinkle =
          Math.sin(time * 0.05 + star.phase) * 0.3 + 0.7;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        ctx.fill();
      }

      // --- Planet (half-world) ---
      const planetY = h * 0.72;
      const planetR = Math.max(w, h) * 0.5;

      ctx.save();
      ctx.beginPath();
      ctx.rect(0, planetY, w, h - planetY);
      ctx.clip();

      // Planet body
      const planetGrad = ctx.createRadialGradient(
        w * 0.5,
        planetY,
        0,
        w * 0.5,
        planetY,
        planetR
      );
      if (isDark) {
        planetGrad.addColorStop(0, "#1a1a2e");
        planetGrad.addColorStop(0.3, "#16213e");
        planetGrad.addColorStop(0.7, "#0f0f23");
        planetGrad.addColorStop(1, "#0a0a15");
      } else {
        planetGrad.addColorStop(0, "#2d2d5e");
        planetGrad.addColorStop(0.3, "#1a1a4e");
        planetGrad.addColorStop(0.7, "#0f0f3a");
        planetGrad.addColorStop(1, "#08082a");
      }

      ctx.beginPath();
      ctx.arc(w * 0.5, planetY + planetR, planetR, 0, Math.PI * 2);
      ctx.fillStyle = planetGrad;
      ctx.fill();

      // Planet glow on the edge (rim light from sun)
      const rimGrad = ctx.createLinearGradient(0, planetY, 0, planetY + planetR * 1.2);
      rimGrad.addColorStop(0, `rgba(255, 200, 100, ${isDark ? 0.15 : 0.25})`);
      rimGrad.addColorStop(0.3, `rgba(255, 200, 100, ${isDark ? 0.05 : 0.1})`);
      rimGrad.addColorStop(1, "rgba(255, 200, 100, 0)");
      ctx.fillStyle = rimGrad;
      ctx.fillRect(0, planetY, w, planetR * 1.2);

      ctx.restore();

      // --- Atmosphere glow ---
      const atmoGrad = ctx.createLinearGradient(0, h * 0.65, 0, h * 0.75);
      atmoGrad.addColorStop(0, "rgba(255, 150, 50, 0)");
      atmoGrad.addColorStop(0.5, `rgba(255, 150, 50, ${isDark ? 0.15 : 0.2})`);
      atmoGrad.addColorStop(1, "rgba(255, 150, 50, 0)");
      ctx.fillStyle = atmoGrad;
      ctx.fillRect(0, h * 0.65, w, h * 0.15);
    };

    const draw = () => {
      if (scene === "sunset") {
        drawSunset();
      } else {
        drawBlobs();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [variant, scene]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
