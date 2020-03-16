import * as React from "react";

function SvgDiceD4(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M239.81 8.53v494.94c0 7.15-7.87 11.11-13.17 6.64L3 321.3a8.82 8.82 0 01-1.35-11.82L225.28 3.34C230-3.1 239.8.4 239.81 8.53z"
        opacity={0.4}
      />
      <path
        d="M272.2 503.47V8.53c0-8.13 9.8-11.63 14.52-5.19l223.6 306.14A8.79 8.79 0 01509 321.3L285.37 510.11c-5.3 4.47-13.17.51-13.17-6.64z"
        className="dice-d4_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDiceD4;
