import * as React from "react";

function SvgPrintSlash(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M176 104.26V48h240v32a16 16 0 0016 16h32v96H289.53L538 384h22a16 16 0 0016-16V256a64 64 0 00-64-64V77.25a32 32 0 00-9.37-22.63L457.37 9.37A32 32 0 00434.74 0H160a32 32 0 00-32 32v35.16zM496 248a24 24 0 11-24 24 24 24 0 0124-24zm-64 216l59.29 45.72A31.48 31.48 0 01480 512H160a32 32 0 01-32-32v-96H80a16 16 0 01-16-16V256a63.83 63.83 0 0129.47-53.75L328 384H176v80z"
        opacity={0.4}
      />
      <path
        d="M636.64 480.55L617 505.82a16 16 0 01-22.46 2.81L6.18 53.9a16 16 0 01-2.81-22.45L23 6.18a16 16 0 0122.47-2.81L633.82 458.1a16 16 0 012.82 22.45z"
        className="print-slash_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgPrintSlash;
