import * as React from "react";

function SvgBible(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M96 448c-19.2 0-32-12.8-32-32s16-32 32-32h319.33c-1.93 16.24-1.76 48.38.53 64z"
        opacity={0.4}
      />
      <path
        d="M96 384h328a24 24 0 0024-24V32a32 32 0 00-32-32H96A96 96 0 000 96v320a96 96 0 0096 96h328a24 24 0 0024-24v-16a24 24 0 00-24-24H96c-19.2 0-32-12.8-32-32s16-32 32-32zm48-240a16 16 0 0116-16h48V80a16 16 0 0116-16h32a16 16 0 0116 16v48h48a16 16 0 0116 16v32a16 16 0 01-16 16h-48v112a16 16 0 01-16 16h-32a16 16 0 01-16-16V192h-48a16 16 0 01-16-16z"
        className="bible_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBible;
