import * as React from "react";

function SvgDreidel(props) {
  return (
    <svg viewBox="0 0 448 512" {...props}>
      <path
        d="M443.3 82l-109 109 72 71.9a33.38 33.38 0 010 47.3l-68.7 68.7-236.4-236.45 68.7-68.7a33.38 33.38 0 0147.3 0l71.9 71.9 109-109a16.06 16.06 0 0122.6 0l22.6 22.6a16 16 0 010 22.75z"
        opacity={0.4}
      />
      <path
        d="M78.5 165.05l236.4 236.4-58.9 58.9A66.83 66.83 0 01208.7 480H66.9A66.83 66.83 0 010 413.05v-141.8A66.49 66.49 0 0119.6 224z"
        className="dreidel_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgDreidel;
