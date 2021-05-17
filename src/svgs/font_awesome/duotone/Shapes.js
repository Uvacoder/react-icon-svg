import * as React from "react";

function SvgShapes(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M128 256a128 128 0 10128 128 128 128 0 00-128-128zm379.51-80l-95-160c-12.67-21.33-44.35-21.33-57 0l-95 160c-12.67 21.33 3.17 48 28.51 48H479c25.34 0 41.18-26.67 28.51-48z"
        opacity={0.4}
      />
      <path
        d="M512 320v160a32 32 0 01-32 32H320a32 32 0 01-32-32V320a32 32 0 0132-32h160a32 32 0 0132 32z"
        className="shapes_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgShapes;
