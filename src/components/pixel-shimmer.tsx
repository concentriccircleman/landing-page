"use client";

import { useEffect, useRef } from "react";

const CELL = 5;
const DEFAULT_SPAWN_RATE = 20;
const DEFAULT_FADE_RATE = 0.003;

interface PixelShimmerProps {
  maxOpacity?: number;
  spawnRate?: number;
  fadeRate?: number;
}

export default function PixelShimmer({
  maxOpacity = 0.15,
  spawnRate = DEFAULT_SPAWN_RATE,
  fadeRate = DEFAULT_FADE_RATE,
}: PixelShimmerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<Map<string, number>>(new Map());
  const animRef = useRef<number>(0);
  const dimsRef = useRef({ cols: 0, rows: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const syncSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      if (w === 0 || h === 0) return;
      dimsRef.current.cols = Math.ceil(w / CELL);
      dimsRef.current.rows = Math.ceil(h / CELL);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    syncSize();

    const onResize = () => { syncSize(); };
    window.addEventListener("resize", onResize);

    const tick = () => {
      const { cols, rows } = dimsRef.current;
      if (cols === 0 || rows === 0) {
        animRef.current = requestAnimationFrame(tick);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const totalCells = cols * rows;
      const spawnCount = Math.max(1, Math.round((totalCells / 1000) * spawnRate));

      for (let i = 0; i < spawnCount; i++) {
        const gx = Math.floor(Math.random() * cols);
        const gy = Math.floor(Math.random() * rows);
        const key = `${gx},${gy}`;
        const jitter = Math.random() * Math.random();
        const opacity = jitter * maxOpacity;
        if (opacity < 0.03) continue;
        const existing = gridRef.current.get(key) ?? 0;
        if (opacity > existing) gridRef.current.set(key, opacity);
      }

      for (const [key, opacity] of gridRef.current) {
        const next = opacity - fadeRate;
        if (next <= 0) {
          gridRef.current.delete(key);
          continue;
        }
        gridRef.current.set(key, next);

        const [gxStr, gyStr] = key.split(",");
        const gx = Number(gxStr);
        const gy = Number(gyStr);

        ctx.fillStyle = `rgba(37, 99, 235, ${next})`;
        ctx.fillRect(gx * CELL, gy * CELL, CELL - 1, CELL - 1);
      }

      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animRef.current);
    };
  }, [maxOpacity, spawnRate, fadeRate]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
