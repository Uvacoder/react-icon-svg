import * as React from "react";

function SvgCheckSquare(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-20.69 165.94l-184 184a16 16 0 01-22.62 0l-104-104a16 16 0 010-22.63l22.62-22.62a16 16 0 0122.63 0L184 302.75l150.06-150.06a16 16 0 0122.63 0l22.62 22.62a16 16 0 010 22.63z"
        opacity={0.4}
      />
      <path
        d="M195.31 381.94a16 16 0 01-22.62 0l-104-104a16 16 0 010-22.63l22.62-22.62a16 16 0 0122.63 0L184 302.74l150.06-150a16 16 0 0122.63 0l22.62 22.62a16 16 0 010 22.63l-184 184z"
        className="check-square_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCheckSquare;
