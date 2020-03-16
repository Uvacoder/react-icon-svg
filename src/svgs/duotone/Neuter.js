import * as React from "react";

function SvgNeuter(props) {
  return (
    <svg viewBox="0 0 288 512" {...props}>
      <path d="M144 256a80 80 0 1180-80 80 80 0 01-80 80z" opacity={0.4} />
      <path
        d="M284.37 144A144 144 0 10112 316.41V468a12 12 0 0012 12h40a12 12 0 0012-12V316.41A144 144 0 00284.37 144zM144 256a80 80 0 1180-80 80 80 0 01-80 80z"
        className="neuter_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgNeuter;
