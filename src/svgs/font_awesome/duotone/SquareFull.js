import * as React from "react";

function SvgSquareFull(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M-1 0v512h512V0zm432 417.33A14.67 14.67 0 01416.33 432H93.67A14.67 14.67 0 0179 417.33V94.67A14.67 14.67 0 0193.67 80h322.66A14.67 14.67 0 01431 94.67z"
        opacity={0.4}
      />
      <path
        d="M431 417.33A14.67 14.67 0 01416.33 432H93.67A14.67 14.67 0 0179 417.33V94.67A14.67 14.67 0 0193.67 80h322.66A14.67 14.67 0 01431 94.67z"
        className="square-full_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgSquareFull;
