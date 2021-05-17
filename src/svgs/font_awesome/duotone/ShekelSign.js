import * as React from "react";

function SvgShekelSign(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M200 176v224h112a56 56 0 0056-56V48a16 16 0 0116-16h48a16 16 0 0116 16v296a136 136 0 01-136 136H144a24 24 0 01-24-24V176a16 16 0 0116-16h48a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M328 168v168a16 16 0 01-16 16h-48a16 16 0 01-16-16V168a56 56 0 00-56-56H80v352a16 16 0 01-16 16H16a16 16 0 01-16-16V56a24 24 0 0124-24h168a136 136 0 01136 136z"
        className="shekel-sign_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgShekelSign;
