import * as React from "react";

function SvgShoppingBasket(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M242.82 38.12a32 32 0 00-44.7 7.06L91.34 192h79.14l79.4-109.18a32 32 0 00-7.06-44.7zm135.06 7.06a32 32 0 10-51.76 37.64L405.52 192h79.14z"
        opacity={0.4}
      />
      <path
        d="M552 192H24a24 24 0 00-24 24v16a24 24 0 0024 24h8l26.11 182.79A48 48 0 00105.63 480h364.74a48 48 0 0047.52-41.21L544 256h8a24 24 0 0024-24v-16a24 24 0 00-24-24zM200 392a24 24 0 01-48 0V280a24 24 0 0148 0zm112 0a24 24 0 01-48 0V280a24 24 0 0148 0zm112 0a24 24 0 01-48 0V280a24 24 0 0148 0z"
        className="shopping-basket_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgShoppingBasket;
