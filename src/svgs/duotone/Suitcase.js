import * as React from "react";

function SvgSuitcase(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M80 480h48V128H80zm304-352v352h48V128z" opacity={0.4} />
      <path
        d="M336 32H176a48 48 0 00-48 48v400h256V80a48 48 0 00-48-48zm-16 96H192V96h128zm144 0h-32v352h32a48 48 0 0048-48V176a48 48 0 00-48-48zM0 176v256a48 48 0 0048 48h32V128H48a48 48 0 00-48 48z"
        className="suitcase_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSuitcase;
