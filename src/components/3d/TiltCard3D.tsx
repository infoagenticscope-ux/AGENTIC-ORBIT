import React, { useRef, useState } from 'react';

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  maxTilt?: number;
}

export const TiltCard3D: React.FC<TiltCard3DProps> = ({
  children,
  className = '',
  maxTilt = 8,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    setMousePos({ x: xPercent, y: yPercent });

    const rotateX = ((y / rect.height) - 0.5) * -maxTilt * 2;
    const rotateY = ((x / rect.width) - 0.5) * maxTilt * 2;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform,
        transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out',
      }}
      className={`relative preserve-3d group ${className}`}
    >
      {/* Specular Radial Spotlight Glow */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 220px at ${mousePos.x}% ${mousePos.y}%, rgba(0, 240, 255, 0.25), transparent 80%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};
