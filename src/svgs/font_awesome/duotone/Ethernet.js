import * as React from "react";

function SvgEthernet(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 208v224a16 16 0 01-16 16h-80V320h-32v128h-64V320h-32v128h-64V320h-32v128h-64V320H96v128H16a16 16 0 01-16-16V208a16 16 0 0116-16h48v-48a16 16 0 0116-16h48V80a16 16 0 0116-16h224a16 16 0 0116 16v48h48a16 16 0 0116 16v48h48a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M192 448h32V320h-32zm-96 0h32V320H96zm192 0h32V320h-32zm96-128v128h32V320z"
        className="ethernet_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgEthernet;
