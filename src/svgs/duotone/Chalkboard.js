import * as React from "react";

function SvgChalkboard(props) {
  return (
    <svg viewBox="0 0 640 512" {...props}>
      <path
        d="M624 448h-16V40a40 40 0 00-40-40H72a40 40 0 00-40 40v408H16a16 16 0 00-16 16v32a16 16 0 0016 16h608a16 16 0 0016-16v-32a16 16 0 00-16-16zm-528 0V64h448v384z"
        opacity={0.4}
      />
      <path
        d="M544 64v384h-64v-64H288v64H96V64z"
        className="chalkboard_svg__fa-primary"
      />
    </svg>
  );
}

export default SvgChalkboard;
