import * as React from "react";

function SvgIndustry(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M512 184v272a24 24 0 01-24 24H136a24 24 0 0024-24V252.31l139.12-88.53A24 24 0 01336 184v68.28l139.12-88.53A24 24 0 01512 184z"
        opacity={0.4}
      />
      <path
        d="M136 480H24a24 24 0 01-24-24V56a24 24 0 0124-24h112a24 24 0 0124 24v400a24 24 0 01-24 24z"
        className="industry_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgIndustry;
