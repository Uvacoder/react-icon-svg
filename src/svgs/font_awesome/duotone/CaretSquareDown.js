import * as React from "react";

function SvgCaretSquareDown(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-51.37 182.31L232.06 348.16a10.38 10.38 0 01-16.12 0L99.37 214.31C92.17 206 97.28 192 107.43 192h233.14c10.15 0 15.26 14 8.06 22.31z"
        opacity={0.4}
      />
      <path
        d="M348.63 214.31L232.06 348.16a10.38 10.38 0 01-16.12 0L99.37 214.31C92.17 206 97.28 192 107.43 192h233.14c10.15 0 15.26 14 8.06 22.31z"
        className="caret-square-down_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCaretSquareDown;
