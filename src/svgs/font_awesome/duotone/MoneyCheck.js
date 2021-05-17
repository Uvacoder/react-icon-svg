import * as React from "react";

function SvgMoneyCheck(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M0 448a32 32 0 0032 32h576a32 32 0 0032-32V128H0zm448-208a16 16 0 0116-16h96a16 16 0 0116 16v32a16 16 0 01-16 16h-96a16 16 0 01-16-16zm0 120a8 8 0 018-8h112a8 8 0 018 8v16a8 8 0 01-8 8H456a8 8 0 01-8-8zM64 264a8 8 0 018-8h304a8 8 0 018 8v16a8 8 0 01-8 8H72a8 8 0 01-8-8zm0 96a8 8 0 018-8h176a8 8 0 018 8v16a8 8 0 01-8 8H72a8 8 0 01-8-8z"
        opacity={0.4}
      />
      <path
        d="M568 352H456a8 8 0 00-8 8v16a8 8 0 008 8h112a8 8 0 008-8v-16a8 8 0 00-8-8zm-192-96H72a8 8 0 00-8 8v16a8 8 0 008 8h304a8 8 0 008-8v-16a8 8 0 00-8-8zm-128 96H72a8 8 0 00-8 8v16a8 8 0 008 8h176a8 8 0 008-8v-16a8 8 0 00-8-8zM624 32H16A16 16 0 000 48v48h640V48a16 16 0 00-16-16z"
        className="money-check_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMoneyCheck;
