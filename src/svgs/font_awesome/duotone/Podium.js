import * as React from "react";

function SvgPodium(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path d="M384 224l-22.22 240H86.22L64 224z" opacity={0.4} />
      <path
        d="M400 464H48a16 16 0 00-16 16v16a16 16 0 0016 16h352a16 16 0 0016-16v-16a16 16 0 00-16-16zm32-320H113.68c6.2-30.29 29.85-54.3 61-61.55A47.72 47.72 0 00208 96h64a48 48 0 000-96h-64a47.89 47.89 0 00-46.31 36C110.81 48.48 71.66 91.15 65 144H16a16 16 0 00-16 16v16a16 16 0 0016 16h416a16 16 0 0016-16v-16a16 16 0 00-16-16z"
        className="podium_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPodium;
