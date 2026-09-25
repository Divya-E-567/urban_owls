import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const particleCount = 40;

    // Handle resizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse positions for hover interactions
    const mouse = {
      x: null,
      y: null,
      radius: 120
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5; // small particles for elegance
        this.speedX = Math.random() * 0.3 - 0.15; // slow speed
        this.speedY = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.2 + 0.05; // soft opacity for light theme
        this.fadeSpeed = Math.random() * 0.002 + 0.001;
        this.direction = 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce on borders
        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;

        // Mouse interaction (subtle attraction/float towards mouse)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            this.x += (dx / distance) * force * 0.4;
            this.y += (dy / distance) * force * 0.4;
          }
        }

        // Opacity oscillation
        this.opacity += this.fadeSpeed * this.direction;
        if (this.opacity > 0.35 || this.opacity < 0.05) {
          this.direction = -this.direction;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Soft charcoal color for light theme
        ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`;
        ctx.shadowBlur = this.size * 2;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle background radial gradient glows (soft dark highlight)
      if (mouse.x !== null && mouse.y !== null) {
        const glow = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, mouse.radius * 2
        );
        glow.addColorStop(0, 'rgba(0, 0, 0, 0.015)');
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticleBackground;
