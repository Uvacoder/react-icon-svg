import * as React from "react";

function SvgMedkit(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M384 128v352h64V128zM64 480h64V128H64z" opacity={0.4} />
      <path
        d="M336 32H176a48 48 0 00-48 48v400h256V80a48 48 0 00-48-48zM192 96h128v32H192zm160 224a16 16 0 01-16 16h-48v48a16 16 0 01-16 16h-32a16 16 0 01-16-16v-48h-48a16 16 0 01-16-16v-32a16 16 0 0116-16h48v-48a16 16 0 0116-16h32a16 16 0 0116 16v48h48a16 16 0 0116 16zM0 176v256a48 48 0 0048 48h16V128H48a48 48 0 00-48 48zm464-48h-16v352h16a48 48 0 0048-48V176a48 48 0 00-48-48z"
        className="medkit_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMedkit;
