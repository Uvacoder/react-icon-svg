import * as React from "react";

function SvgPenNib(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M288 96l128 128-42.79 151.4a64 64 0 01-41.35 43.31L52 512l-14.69-14.69L187.42 347.2a48.45 48.45 0 10-22.62-22.62L14.69 474.69 0 460l93.29-279.86a64 64 0 0143.31-41.35z"
        opacity={0.4}
      />
      <path
        d="M497.94 74.17a48 48 0 010 67.91l-56.55 56.55-128-128 56.55-56.55a48 48 0 0167.91 0z"
        className="pen-nib_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPenNib;
