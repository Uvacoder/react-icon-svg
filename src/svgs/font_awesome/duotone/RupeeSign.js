import * as React from "react";

function SvgRupeeSign(props) {
  return (
    <svg viewBox="0 0 320 512" {...props}>
      <path
        d="M320 144v32a16 16 0 01-16 16H16a16 16 0 01-16-16v-32a16 16 0 0116-16h288a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M320 44v40a12 12 0 01-12 12h-76.26a144 144 0 01-114.87 223.91l150.88 139.27a12 12 0 01-8.14 20.82h-82.56a12 12 0 01-8.14-3.18L3.86 324.46A12 12 0 010 315.64v-48A12 12 0 019.13 256H96a79.68 79.68 0 0031.39-6.4 68.32 68.32 0 006.21-3 80 80 0 00-4.83-143.6 71.06 71.06 0 00-31.52-7.28H12a12 12 0 01-12-12V44a12 12 0 0112-12h296a12 12 0 0112 12z"
        className="rupee-sign_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgRupeeSign;
