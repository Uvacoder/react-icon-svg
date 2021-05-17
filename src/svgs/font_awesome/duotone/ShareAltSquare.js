import * as React from "react";

function SvgShareAltSquare(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-96 376a56 56 0 01-54.26-69.9l-68-40.77a56 56 0 110-82.66l68-40.77a56 56 0 1116.48 27.43l-68 40.77a56.39 56.39 0 010 27.8l68 40.77A56 56 0 11304 408z"
        opacity={0.4}
      />
      <path
        d="M360 352a56 56 0 11-110.26-13.9l-68-40.77a56 56 0 110-82.66l68-40.77a56 56 0 1116.48 27.43l-68 40.77a56.39 56.39 0 010 27.8l68 40.77A56 56 0 01360 352z"
        className="share-alt-square_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgShareAltSquare;
