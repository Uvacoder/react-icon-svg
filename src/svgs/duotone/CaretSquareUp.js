import * as React from "react";

function SvgCaretSquareUp(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-59.4 288H107.4c-10.14 0-15.21-14.07-8.05-22.29L216 163.82a10.38 10.38 0 0116.08 0l116.57 133.89c7.16 8.22 2.09 22.29-8.05 22.29z"
        opacity={0.4}
      />
      <path
        d="M340.6 320H107.4c-10.14 0-15.21-14.07-8.05-22.29L216 163.82a10.38 10.38 0 0116.08 0l116.57 133.89c7.16 8.22 2.09 22.29-8.05 22.29z"
        className="caret-square-up_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgCaretSquareUp;
