import * as React from "react";

function SvgFemale(props) {
  return (
    <svg viewBox="0 0 256 512" {...props}>
      <path d="M64 64a64 64 0 1164 64 64 64 0 01-64-64z" opacity={0.4} />
      <path
        d="M80 144h11.37a87.91 87.91 0 0073.28 0H176a24 24 0 0123.28 18.18l48 192A24 24 0 01224 384h-56v104a24 24 0 01-24 24h-32a24 24 0 01-24-24V384H32a24 24 0 01-23.27-29.82l48-192A24 24 0 0180 144z"
        className="female_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgFemale;
