import * as React from "react";

function SvgShippingFast(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M248 160H40a8 8 0 00-8 8v16a8 8 0 008 8h208a8 8 0 008-8v-16a8 8 0 00-8-8zm-24 88v-16a8 8 0 00-8-8H8a8 8 0 00-8 8v16a8 8 0 008 8h208a8 8 0 008-8zm-48 104a80 80 0 1080 80 80 80 0 00-80-80zm288 0a80 80 0 1080 80 80 80 0 00-80-80zM280 96H8a8 8 0 00-8 8v16a8 8 0 008 8h272a8 8 0 008-8v-16a8 8 0 00-8-8z"
        opacity={0.4}
      />
      <path
        d="M624 352h-16V243.9a48 48 0 00-14.1-33.9L494 110.1A48 48 0 00460.1 96H416V48a48 48 0 00-48-48H112a48 48 0 00-48 48v48h216a8 8 0 018 8v16a8 8 0 01-8 8H64v32h184a8 8 0 018 8v16a8 8 0 01-8 8H64v32h152a8 8 0 018 8v16a8 8 0 01-8 8H64v112a47.74 47.74 0 007 25 112 112 0 01215.86 23h66.28a112 112 0 01221.72 0H624a16 16 0 0016-16v-32a16 16 0 00-16-16zm-64-96H416V144h44.1l99.9 99.9z"
        className="shipping-fast_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgShippingFast;
