"use client";

import { useEffect, useRef } from "react";

/** Red de nodos que se conectan lentamente, como un diagrama de arquitectura. */
export function HeroNetwork() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let frame = 0;
    let nodes: { x: number; y: number; vx: number; vy: number }[] = [];

    const size = () => {
      const r = canvas.getBoundingClientRect();
      const d = window.devicePixelRatio || 1;
      w = r.width;
      h = r.height;
      canvas.width = w * d;
      canvas.height = h * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      const n = Math.round(Math.min(50, w / 22));
      nodes = Array.from({ length: n }, () => ({
        x: w * (0.42 + Math.random() * 0.58),
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.strokeStyle = `rgba(76,141,255,${0.28 * (1 - d / 120)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      nodes.forEach((p, i) => {
        ctx.fillStyle = i % 9 === 0 ? "#f6a443" : i % 3 === 0 ? "#34d39e" : "#4c8dff";
        ctx.globalAlpha = 0.8;
        ctx.fillRect(p.x - 1.5, p.y - 1.5, 3, 3);
        ctx.globalAlpha = 1;
        if (!still) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < w * 0.38 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
      });
      if (!still) frame = requestAnimationFrame(draw);
    };

    const onResize = () => {
      cancelAnimationFrame(frame);
      size();
      draw();
    };

    size();
    draw();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="hero-net" aria-hidden="true" />;
}
