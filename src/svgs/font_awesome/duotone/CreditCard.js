import * as React from "react";

function SvgCreditCard(props) {
  return (
    <svg viewBox="0 0 576 512" {...props}>
      <path
        d="M0 432a48 48 0 0048 48h480a48 48 0 0048-48V256H0zm192-68a12 12 0 0112-12h136a12 12 0 0112 12v40a12 12 0 01-12 12H204a12 12 0 01-12-12zm-128 0a12 12 0 0112-12h72a12 12 0 0112 12v40a12 12 0 01-12 12H76a12 12 0 01-12-12zM528 32H48A48 48 0 000 80v48h576V80a48 48 0 00-48-48z"
        opacity={0.4}
      />
      <path d="M576 256H0V128h576z" className="credit-card_svg__fa-primary" />
    </svg>
  );
}

export default SvgCreditCard;
