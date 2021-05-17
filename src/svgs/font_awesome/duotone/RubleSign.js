import * as React from "react";

function SvgRubleSign(props) {
  return (
    <svg viewBox="0 0 384 512" {...props}>
      <path
        d="M320 368v32a16 16 0 01-16 16H16a16 16 0 01-16-16v-32a16 16 0 0116-16h288a16 16 0 0116 16z"
        opacity={0.4}
      />
      <path
        d="M239.36 32H76a12 12 0 00-12 12v206.63H12a12 12 0 00-12 12V308a12 12 0 0012 12h52v148a12 12 0 0012 12h58.56a12 12 0 0012-12V320h92.8C324.48 320 384 260.54 384 175.07S324.48 32 239.36 32zM224 250.63h-77.44V100.75h78.72c46.72 0 74.88 29.11 74.88 74.32 0 45.83-28.16 75.56-76.16 75.56z"
        className="ruble-sign_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgRubleSign;
