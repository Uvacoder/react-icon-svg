import * as React from "react";

function SvgKeynote(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M368 448h-80v-64h-64v64h-80a16 16 0 00-16 16v32a16 16 0 0016 16h224a16 16 0 0016-16v-32a16 16 0 00-16-16zM206.68 82.45A47.73 47.73 0 00240 96h64a48 48 0 000-96h-64a47.89 47.89 0 00-46.31 36C137.77 49.72 96 99.91 96 160h48c0-37.62 26.21-69.06 62.68-77.55z"
        opacity={0.4}
      />
      <path
        d="M508.62 281.24a32.07 32.07 0 013.38 14.31V320a32 32 0 01-32 32H32a32 32 0 01-32-32v-24.45a32 32 0 013.38-14.31l51.78-103.55A32 32 0 0183.78 160h344.44a32 32 0 0128.62 17.69z"
        className="keynote_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgKeynote;
