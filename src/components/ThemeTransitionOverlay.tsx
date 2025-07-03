import React from "react";

interface Props {
  isActive: boolean;
  color: string;
}

const ThemeTransitionOverlay: React.FC<Props> = ({ isActive, color }) => (
  <div
    style={{
      pointerEvents: "none",
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: color,
      opacity: isActive ? 1 : 0,
      transition: "opacity 0.7s cubic-bezier(0.77,0,0.175,1)",
      willChange: "opacity",
    }}
  />
);

export default ThemeTransitionOverlay; 