import * as React from "react";

function SvgTreeAlt(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M318.29 488.85A16 16 0 01304 512h-96a16 16 0 01-14.31-23.16L224 440.45V384h64v56.45z"
        opacity={0.4}
      />
      <path
        d="M28 356Q0 328 0 288a93.5 93.5 0 0116-53 92.4 92.4 0 0143-35q-14-24-10.5-49.5a79.43 79.43 0 0120.5-44A81.51 81.51 0 01110.5 82q24.5-6 49.5 5 4-37 31.5-62T256 0q37 0 64.5 25T352 87q25-11 49.5-5a81.51 81.51 0 0141.5 24.5 79.43 79.43 0 0120.5 44Q467 176 454 200h-1a92.4 92.4 0 0143 35 93.5 93.5 0 0116 53q0 40-28 68t-68 28H96q-40 0-68-28z"
        className="tree-alt_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgTreeAlt;
