"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
}

const SPECTRUM = ["#00D4FF", "#1B6EFF", "#E85D24", "#D61F8C", "#8DC63F"];

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let nodes: Node[] = [];
    const connectionDistance = 150;
    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 35 : 70;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const initNodes = () => {
      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        color: Math.random() > 0.95 ? SPECTRUM[Math.floor(Math.random() * SPECTRUM.length)] : "#00D4FF",
      }));
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle =
          node.color === "#00D4FF"
            ? `rgba(0, 212, 255, ${0.4 + Math.random() * 0.3})`
            : node.color;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    initNodes();
    draw();

    const handleResize = () => {
      resize();
      initNodes();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,212,255,0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(27,110,255,0.1) 0%, transparent 50%)`,
        }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
      aria-hidden
    />
  );
}
