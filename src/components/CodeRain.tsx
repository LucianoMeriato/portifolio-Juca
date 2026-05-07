"use client";

import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  density?: number;
  speed?: number;
  opacity?: number;
  /** Cor base dos glifos. Aceita rgba() string com `OPACITY` placeholder. */
  color?: string;
  highlight?: string;
  /** Cor do trail (fade do canvas). rgba string. Default = dark theme. */
  fadeColor?: string;
};

const GLYPHS =
  "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ{};</>=>$#@*+-_λΣΩ()[]";

export default function CodeRain({
  className = "",
  density = 0.85,
  speed = 1,
  opacity = 0.55,
  color = "rgba(122, 166, 255, OPACITY)",
  highlight = "rgba(255, 255, 255, OPACITY)",
  fadeColor = "rgba(6, 8, 12, 0.20)",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let columns: number[] = [];
    let charSize = 16;
    let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    let lastTime = 0;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      charSize = Math.max(12, Math.min(18, Math.floor(width / 80)));
      const colCount = Math.floor((width / charSize) * density);
      columns = Array.from(
        { length: colCount },
        () => Math.random() * (height / charSize)
      );
    };

    const draw = (t: number) => {
      const dt = Math.min(50, t - lastTime || 16);
      lastTime = t;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      ctx.fillStyle = fadeColor;
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${charSize}px var(--font-mono), ui-monospace, monospace`;
      ctx.textBaseline = "top";

      const colWidth = w / columns.length;

      for (let i = 0; i < columns.length; i++) {
        const x = i * colWidth + (colWidth - charSize) / 2;
        const y = columns[i] * charSize;
        const ch = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

        ctx.fillStyle = color.replace("OPACITY", String(opacity * 0.95));
        ctx.fillText(ch, x, y);

        if (Math.random() > 0.94) {
          ctx.fillStyle = highlight.replace("OPACITY", String(opacity * 0.55));
          ctx.fillText(ch, x, y - charSize);
        }

        const advance = (dt / 60) * (0.6 + Math.random() * 0.8) * speed;
        columns[i] += advance;
        if (columns[i] * charSize > h && Math.random() > 0.975) {
          columns[i] = -Math.random() * 30;
        }
      }
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    resize();
    if (!reduceMotion) raf = requestAnimationFrame(draw);
    else draw(0);

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [density, speed, opacity, color, highlight, fadeColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
    />
  );
}
