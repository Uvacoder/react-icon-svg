import * as React from "react";

function SvgCreditCardBlank(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M340 352H204a12 12 0 00-12 12v40a12 12 0 0012 12h136a12 12 0 0012-12v-40a12 12 0 00-12-12zm-192 0H76a12 12 0 00-12 12v40a12 12 0 0012 12h72a12 12 0 0012-12v-40a12 12 0 00-12-12z"
        opacity={0.4}
      />
      <path
        d="M528 32H48A48 48 0 000 80v352a48 48 0 0048 48h480a48 48 0 0048-48V80a48 48 0 00-48-48zM160 404a12 12 0 01-12 12H76a12 12 0 01-12-12v-40a12 12 0 0112-12h72a12 12 0 0112 12zm192 0a12 12 0 01-12 12H204a12 12 0 01-12-12v-40a12 12 0 0112-12h136a12 12 0 0112 12z"
        className="credit-card-blank_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCreditCardBlank;
