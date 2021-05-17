import * as React from "react";

function SvgDollyFlatbedEmpty(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M162.74 448a48 48 0 1090.52 0zm378.52 0h-90.52a48 48 0 1090.52 0z"
        opacity={0.4}
      />
      <path
        d="M640 400v32a16 16 0 01-16 16H80a16 16 0 01-16-16V64H16A16 16 0 010 48V16A16 16 0 0116 0h96a16 16 0 0116 16v368h496a16 16 0 0116 16z"
        className="dolly-flatbed-empty_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDollyFlatbedEmpty;
