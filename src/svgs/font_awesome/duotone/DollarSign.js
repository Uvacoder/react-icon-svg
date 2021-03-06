import * as React from "react";

function SvgDollarSign(props) {
  return (
    <svg viewBox="0 0 288 512" {...props}>
      <path
        d="M176 64h-64V16a16 16 0 0116-16h32a16 16 0 0116 16zm-64 384v48a16 16 0 0016 16h32a16 16 0 0016-16v-48z"
        opacity={0.4}
      />
      <path
        d="M281.72 375.1c-15.4 44.1-59.11 71.8-105.72 72.7l-64 .2a141.39 141.39 0 01-86.51-30c-7.9-6.1-8.9-17.6-1.8-24.5l34.81-34a15.6 15.6 0 0119.5-2 61 61 0 0034.19 10.5h66.31a29.49 29.49 0 008.3-57.8l-102.52-30c-44.4-13-79.61-50.5-83.81-96.6A109.57 109.57 0 0199.55 64.46c3.3-.3 6.61-.46 9.92-.46H176a141.44 141.44 0 0186.52 30c7.9 6.1 8.9 17.6 1.8 24.5l-34.81 34a15.6 15.6 0 01-19.5 2A61.1 61.1 0 00175.8 144h-66.31a29.49 29.49 0 00-8.3 57.8l108 31.6c57.93 16.9 94.04 80.1 72.53 141.7z"
        className="dollar-sign_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDollarSign;
