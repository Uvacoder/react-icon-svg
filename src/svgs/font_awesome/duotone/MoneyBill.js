import * as React from "react";

function SvgMoneyBill(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M101.22 112A112.5 112.5 0 0148 165.22v181.56A112.5 112.5 0 01101.22 400h437.56A112.5 112.5 0 01592 346.78V165.22A112.5 112.5 0 01538.78 112zM320 352c-44.19 0-80-43-80-96s35.82-96 80-96 80 43 80 96-35.83 96-80 96z"
        opacity={0.4}
      />
      <path
        d="M616 64H24A24 24 0 000 88v336a24 24 0 0024 24h592a24 24 0 0024-24V88a24 24 0 00-24-24zm-24 282.78A112.5 112.5 0 00538.78 400H101.22A112.5 112.5 0 0048 346.78V165.22A112.5 112.5 0 00101.22 112h437.56A112.5 112.5 0 00592 165.22z"
        className="money-bill_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgMoneyBill;
