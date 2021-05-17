import * as React from "react";

function SvgCube(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M480.85 85.58l-208-78a47.17 47.17 0 00-33.7-.1l-208 78a48.06 48.06 0 00-31.1 45v225.1a48 48 0 0026.5 42.9l208 104a47.66 47.66 0 0042.9 0l208-104a47.91 47.91 0 0026.5-42.9v-225.1a47.93 47.93 0 00-31.1-44.9zM448 345.16l-160 80v-148.9l160-65zm.05-202.48l-192 78-192-78v-1.1l192-72 192 72z"
        opacity={0.4}
      />
      <path
        d="M448 345.16l-160 80v-148.9l160-65z"
        className="cube_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCube;
