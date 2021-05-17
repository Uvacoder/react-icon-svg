import * as React from "react";

function SvgHurricane(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M176 96l24.5-74.79A16.22 16.22 0 00183.1.12C80 12.42 0 101.61 0 208c0 114.9 93.1 208 208 208l-24.5 74.79a16.24 16.24 0 0017.4 21.1C304 499.58 384 410.39 384 304c0-114.9-93.1-208-208-208zm16 256a96 96 0 1196-96 96 96 0 01-96 96z"
        opacity={0.4}
      />
      <path
        d="M236 256a44 44 0 11-44-44 44 44 0 0144 44z"
        className="hurricane_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgHurricane;
