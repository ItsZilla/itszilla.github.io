
import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createPoints = () => {
      const points: Point[] = [];
      const numPoints = Math.floor((window.innerWidth * window.innerHeight) / 15000);
      
      for (let i = 0; i < numPoints; i++) {
        const baseVx = (Math.random() - 0.5) * 0.5;
        const baseVy = (Math.random() - 0.5) * 0.5;
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: baseVx,
          vy: baseVy,
          baseVx,
          baseVy,
        });
      }
      
      pointsRef.current = points;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const drawPoints = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isDark = theme === 'dark';
      const pointColor = isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)';
      const lineColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
      
      // Draw connections
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      
      for (let i = 0; i < pointsRef.current.length; i++) {
        for (let j = i + 1; j < pointsRef.current.length; j++) {
          const dx = pointsRef.current[i].x - pointsRef.current[j].x;
          const dy = pointsRef.current[i].y - pointsRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = 1 - distance / 150;
            ctx.strokeStyle = isDark ? `rgba(255, 255, 255, ${opacity * 0.1})` : `rgba(0, 0, 0, ${opacity * 0.1})`;
            ctx.beginPath();
            ctx.moveTo(pointsRef.current[i].x, pointsRef.current[i].y);
            ctx.lineTo(pointsRef.current[j].x, pointsRef.current[j].y);
            ctx.stroke();
          }
        }
        
        // Mouse interaction
        const mouseDx = pointsRef.current[i].x - mouseRef.current.x;
        const mouseDy = pointsRef.current[i].y - mouseRef.current.y;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
        
        if (mouseDistance < 100) {
          const opacity = 1 - mouseDistance / 100;
          ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.5})`;
          ctx.beginPath();
          ctx.moveTo(pointsRef.current[i].x, pointsRef.current[i].y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
        }
      }
      
      // Draw points
      ctx.fillStyle = pointColor;
      pointsRef.current.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const updatePoints = () => {
      pointsRef.current.forEach(point => {
        // Mouse repulsion
        const mouseDx = point.x - mouseRef.current.x;
        const mouseDy = point.y - mouseRef.current.y;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
        
        if (mouseDistance < 50) {
          const force = (50 - mouseDistance) / 50;
          point.vx += (mouseDx / mouseDistance) * force * 0.01;
          point.vy += (mouseDy / mouseDistance) * force * 0.01;
        } else {
          // Return to base velocity when not interacting
          point.vx += (point.baseVx - point.vx) * 0.02;
          point.vy += (point.baseVy - point.vy) * 0.02;
        }
        
        point.x += point.vx;
        point.y += point.vy;
        
        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) {
          point.vx *= -1;
          point.baseVx *= -1;
          point.x = Math.max(0, Math.min(canvas.width, point.x));
        }
        if (point.y < 0 || point.y > canvas.height) {
          point.vy *= -1;
          point.baseVy *= -1;
          point.y = Math.max(0, Math.min(canvas.height, point.y));
        }
      });
    };

    const animate = () => {
      updatePoints();
      drawPoints();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createPoints();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createPoints();
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme]);

  const isDark = theme === 'dark';
  const bgGradient = isDark 
    ? 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2a2a2a 100%)'
    : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)';

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: bgGradient }}
    />
  );
};

export default AnimatedBackground;
