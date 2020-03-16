import * as React from "react";

function SvgUserNinja(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M304 128H144a32 32 0 0132-32h96a32 32 0 0132 32z"
        opacity={0.4}
      />
      <path
        d="M325.4 289.2L224 390.6 122.6 289.2C54 295.3 0 352.2 0 422.4V464a48 48 0 0048 48h352a48 48 0 0048-48v-41.6c0-70.2-54-127.1-122.6-133.2zM32 192a95.47 95.47 0 0069.2-29.7c15.1 53.9 64 93.7 122.8 93.7a128 128 0 000-256c-50.4 0-93.6 29.4-114.5 71.8A95.53 95.53 0 0032 32a95.74 95.74 0 0043.1 80A95.74 95.74 0 0032 192zm144-96h96a32 32 0 0132 32H144a32 32 0 0132-32z"
        className="user-ninja_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgUserNinja;
