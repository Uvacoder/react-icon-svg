import * as React from "react";

function SvgPhonePlus(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M144 16v64h64a16 16 0 0116 16v32a16 16 0 01-16 16h-64v64a16 16 0 01-16 16H96a16 16 0 01-16-16v-64H16a16 16 0 01-16-16V96a16 16 0 0116-16h64V16A16 16 0 0196 0h32a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M512 48c0 256.5-207.9 464-464 464a24 24 0 01-23.4-18.6l-24-104a24.29 24.29 0 0114-27.6l112-48a24 24 0 0128 6.9l49.6 60.6a370.61 370.61 0 00177.2-177.2l-60.6-49.6a23.94 23.94 0 01-6.9-28l48-112A24.16 24.16 0 01389.41.61l104 24A24 24 0 01512 48z"
        className="phone-plus_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPhonePlus;
