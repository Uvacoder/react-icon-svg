import * as React from "react";

function SvgScalpel(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M176 320h105.6v8c0 38.39-15.35 76.61-46.72 102.32l-.59.48C170.28 482.82 87 512.07 0 512z"
        opacity={0.4}
      />
      <path
        d="M199.9 288a16 16 0 01-12.19-26.47l201.5-235.46C412.52-1.18 453.5-9 482.7 11.85c33.76 24.08 38.9 71.69 12.53 102.49l-139 162.44A32.08 32.08 0 01331.84 288z"
        className="scalpel_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgScalpel;
