import React, { useEffect, useRef } from 'react';

const InteractiveCanvas = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, lastX: -1000, lastY: -1000, speed: 0 });
  const particlesRef = useRef([]);

  useEffect(() => {
    // Disable particle simulation on touch-only devices for performance
    const isTouchDevice = window.matchMedia && !window.matchMedia('(pointer: fine)').matches;
    if (isTouchDevice) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor(x, y, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.speedX = speedX * 0.35 + (Math.random() - 0.5) * 0.4;
        this.speedY = speedY * 0.35 - Math.random() * 0.7 - 0.15;
        this.size = Math.random() * 2.8 + 1.2;
        this.alpha = 0.85;
        this.decay = Math.random() * 0.018 + 0.012;
        // Warm crimson shades matching Rishab's palette
        this.color = Math.random() > 0.4 ? '#ff2a2a' : '#ff6b6b';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= this.decay;
        if (this.size > 0.1) this.size -= 0.02;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0.1, this.size), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const handleMouseMove = (e) => {
      const mouse = mouseRef.current;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (mouse.lastX < 0) {
        mouse.lastX = mouse.x;
        mouse.lastY = mouse.y;
        return;
      }

      const dx = mouse.x - mouse.lastX;
      const dy = mouse.y - mouse.lastY;
      mouse.speed = Math.sqrt(dx * dx + dy * dy);

      const spawnCount = Math.min(Math.floor(mouse.speed / 5), 4);
      for (let i = 0; i < spawnCount; i++) {
        particlesRef.current.push(
          new Particle(
            mouse.x + (Math.random() - 0.5) * 6,
            mouse.y + (Math.random() - 0.5) * 6,
            dx * 0.12,
            dy * 0.12
          )
        );
      }

      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;

      // Soft mouse-following radial spotlight
      if (mouse.x > 0 && mouse.y > 0) {
        ctx.save();
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          280
        );
        gradient.addColorStop(0, 'rgba(255, 42, 42, 0.07)');
        gradient.addColorStop(0.5, 'rgba(255, 42, 42, 0.02)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 280, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Draw and update particles
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        if (p.alpha <= 0 || p.size <= 0.1) {
          particles.splice(i, 1);
        } else {
          p.draw();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  );
};

export default InteractiveCanvas;
