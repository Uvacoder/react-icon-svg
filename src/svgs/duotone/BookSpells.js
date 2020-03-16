import * as React from "react";

function SvgBookSpells(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M96 448c-19.2 0-32-12.8-32-32s16-32 32-32h319.33c-1.93 16.24-1.76 48.38.53 64z"
        opacity={0.4}
      />
      <path
        d="M96 384h328a24 24 0 0024-24V32a32 32 0 00-32-32H96A96 96 0 000 96v320a96 96 0 0096 96h328a24 24 0 0024-24v-16a24 24 0 00-24-24H96c-19.2 0-32-12.8-32-32s16-32 32-32zm176-224l26.66 53.33L352 240l-53.34 26.67L272 320l-26.66-53.33L192 240l53.34-26.67zM160 96l16-32 16 32 32 16-32 16-16 32-16-32-32-16z"
        className="book-spells_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgBookSpells;
