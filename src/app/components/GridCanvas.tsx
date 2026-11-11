'use client';

import React, { useEffect, useRef } from 'react';

export default function GridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Grid config
    const spacing = 35; // distance between dots
    const mouse = { x: -1000, y: -1000, radius: 150 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          // Calculate distance to mouse
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Wave effect using sin/cos
          const wave = Math.sin(time + (x + y) * 0.01) * 2;
          
          let size = 1.2;
          let opacity = 0.18;
          let color = 'rgba(203, 213, 225, '; // slate-300 base

          // Mouse proximity hover effect (Orange accent)
          if (dist < mouse.radius) {
            const factor = (1 - dist / mouse.radius);
            size += factor * 3;
            opacity = 0.2 + factor * 0.6;
            color = `rgba(249, 115, 22, `; // orange-500 hover
          }

          ctx.beginPath();
          ctx.arc(x, y + wave, size, 0, Math.PI * 2);
          ctx.fillStyle = `${color}${opacity})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
    />
  );
}