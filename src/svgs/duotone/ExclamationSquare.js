import * as React from "react";

function SvgExclamationSquare(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zM224 384a32 32 0 1132-32 32 32 0 01-32 32zm38.24-238.41l-12.8 128A16 16 0 01233.52 288h-19a16 16 0 01-15.92-14.41l-12.8-128A16 16 0 01201.68 128h44.64a16 16 0 0115.92 17.59z"
        opacity={0.4}
      />
      <path
        d="M246.32 128h-44.64a16 16 0 00-15.92 17.59l12.8 128A16 16 0 00214.48 288h19a16 16 0 0015.92-14.41l12.8-128A16 16 0 00246.32 128zM224 320a32 32 0 1032 32 32 32 0 00-32-32z"
        className="exclamation-square_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgExclamationSquare;
