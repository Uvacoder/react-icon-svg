import * as React from "react";

function SvgShoppingCart(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M552 64H159.21l52.36 256h293.15a24 24 0 0023.4-18.68l47.27-208a24 24 0 00-18.08-28.72A23.69 23.69 0 00552 64z"
        opacity={0.4}
      />
      <path
        d="M218.12 352h268.42a24 24 0 0123.4 29.32l-5.52 24.28a56 56 0 11-63.6 10.4H231.18a56 56 0 11-67.05-8.57L93.88 64H24A24 24 0 010 40V24A24 24 0 0124 0h102.53A24 24 0 01150 19.19z"
        className="shopping-cart_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgShoppingCart;
