import * as React from "react";

function SvgLambda(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M194.62 243.73l-95 221.72A24 24 0 0177.54 480H25.31a24 24 0 01-22.06-33.45l132.88-310.06z"
        opacity={0.4}
      />
      <path
        d="M448 408v48a24 24 0 01-24 24h-81.5a32 32 0 01-28.1-16.68L131.5 128H24a24 24 0 01-24-24V56a24 24 0 0124-24h145.5a32 32 0 0128.1 16.68L380.5 384H424a24 24 0 0124 24z"
        className="lambda_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgLambda;
